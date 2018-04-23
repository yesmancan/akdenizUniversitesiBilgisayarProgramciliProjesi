using Microsoft.EntityFrameworkCore;

namespace WebApi.Model
{
    public partial class HeroesContext : DbContext
    {
        public static string ConnectionString { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
        }

        public virtual DbSet<USER> USER { get; set; }
        public virtual DbSet<Hero> HEROES { get; set; }
    }
}
