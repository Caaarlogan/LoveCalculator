using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LoveCalculatorAPI.Models
{
    public class CrushName
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Crush_Name { get; set; }

        [Required]
        public int Crush_Name_Instances { get; set; }

        // foreign key to Crush
        public ICollection<Crush> Crush { get; set; }
    }
}
