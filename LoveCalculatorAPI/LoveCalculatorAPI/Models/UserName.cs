using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LoveCalculatorAPI.Models
{
    public class UserName
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string User_Name { get; set; }

        [Required]
        public int User_Name_Instances { get; set; }

        // foreign key to Crush
        public ICollection<Crush> Crush { get; set; }
    }
}
