using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LoveCalculatorAPI.Models
{
    public class Crush
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int CrushID { get; set; }

        [Required]
        public string User_Name { get; set; }

        [Required]
        public string Crush_Name { get; set; }

        [Required]
        public int Crush_Instances { get; set; }
    }
}
