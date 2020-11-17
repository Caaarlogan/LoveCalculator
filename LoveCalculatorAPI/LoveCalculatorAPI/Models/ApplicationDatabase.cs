using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoveCalculatorAPI.Models
{
    public class ApplicationDatabase : DbContext
    {
        public DbSet<Crush> Crush { get; set; }
        public DbSet<CrushName> CrushName { get; set; }
        public DbSet<UserName> UserName { get; set; }

        public ApplicationDatabase(DbContextOptions<ApplicationDatabase> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Crush>()
                .Property(p => p.CrushID)
                .ValueGeneratedOnAdd();
        }
    }
}
