using FullStack.API.Model;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        DbSet<Employee> Employees { get; set; } 
    }
}
