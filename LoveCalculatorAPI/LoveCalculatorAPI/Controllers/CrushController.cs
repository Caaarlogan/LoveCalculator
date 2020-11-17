using LoveCalculatorAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LoveCalculatorAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrushController : ControllerBase
    {
        private ApplicationDatabase _context;

        public CrushController(ApplicationDatabase context)
        {
            _context = context;
        }


        //Gets the number of instances the input crush name has been a user name
        [HttpGet]
        [Route("GetCrushNameInstances")]
        public int GetCrushNameInstances(string crushName)
        {
            var crushInstances = _context.UserName
                .Where(s => s.User_Name == crushName)
                .FirstOrDefault();

            int num = 0;

            if(crushInstances != null && crushInstances.User_Name_Instances != 0)
            {
                num = crushInstances.User_Name_Instances;
            }

            return num;
        }

        //Gets the number of instances the input crush name has a crush on the input user name
        [HttpGet]
        [Route("GetCrushInstances")]
        public int GetCrushInstances(string userName, string crushName)
        {
            var crushInstances = _context.Crush
                .Where(s => s.User_Name == crushName && s.Crush_Name == userName)
                .DefaultIfEmpty()
                .First();

            int num = 0;

            if (crushInstances != null && crushInstances.Crush_Instances != 0)
            {
                num = crushInstances.Crush_Instances;
            }

            return num;
        }

        //Gets the number of instances people had a crush on the input user name
        [HttpGet]
        [Route("GetCrushOnUserInstances")]
        public int GetCrushOnUserInstances(string crushName)
        {
            var crushInstances = _context.CrushName
                .Where(s => s.Crush_Name == crushName)
                .DefaultIfEmpty()
                .First();

            int num = 0;

            if (crushInstances != null && crushInstances.Crush_Name_Instances != 0)
            {
                num = crushInstances.Crush_Name_Instances;
            }

            return num;
        }

        //Updates crush, crush name, and user name tables from front end input
        [HttpPut]
        [Route("UpdateCrush")]
        public async Task<IActionResult> UpdateCrush([FromBody] UpdateCrushModel data)
        {
            var userName = _context.UserName
                .Where(s => s.User_Name == data.User_Name)
                .DefaultIfEmpty()
                .First();

            //If user name not found, add to the table with instance of 1
            if(userName == null || userName.User_Name == null || userName.User_Name == "" || userName.User_Name.Length == 0)
            {
                _context.UserName.Add(new Models.UserName { User_Name = data.User_Name, User_Name_Instances = 1 });
            }
            //If user name found, add one to the instace
            else
            {
                userName.User_Name_Instances += 1;
            }

            var crushName = _context.CrushName
                .Where(s => s.Crush_Name == data.Crush_Name)
                .DefaultIfEmpty()
                .First();

            //If crush name not found, add to the table with instance of 1
            if (crushName == null || crushName.Crush_Name == null || crushName.Crush_Name == "" || crushName.Crush_Name.Length == 0)
            {
                _context.CrushName.Add(new Models.CrushName { Crush_Name = data.Crush_Name, Crush_Name_Instances = 1 });
            }
            //If crush name found, add one to the instace
            else
            {
                crushName.Crush_Name_Instances += 1;
            }

            var crush = _context.Crush
                .Where(s => s.User_Name == data.User_Name && s.Crush_Name == data.Crush_Name)
                .DefaultIfEmpty()
                .First();

            //If crush not found, add to the table with instance of 1
            if(crush == null || crush.User_Name == null || crush.Crush_Name == null || crush.User_Name == "" || crush.Crush_Name == "")
            {
                _context.Crush.Add(new Models.Crush { User_Name = data.User_Name, Crush_Name = data.Crush_Name, Crush_Instances = 1 });
            }
            //If crush found, add one to the instance
            else
            {
                crush.Crush_Instances += 1;
            }

            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

    public class UpdateCrushModel
    {
        [Required]
        public string User_Name { get; set; }

        [Required]
        public string Crush_Name { get; set; }
    }
}
