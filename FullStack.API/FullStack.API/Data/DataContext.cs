using FullStack.API.Model;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

       public DbSet<Employee> Employees { get; set; } 
    }
}
