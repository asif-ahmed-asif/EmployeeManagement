using FullStack.API.Data;
using FullStack.API.Model;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Services.DepartmentService
{
    public class DepartmentService : IDepartmentService
    {
        private readonly DataContext _db;

        public DepartmentService(DataContext db)
        {
            _db = db;
        }
        public async Task<Department?> AddDepartment(Department department)
        {
            _db.Departments.Add(department);
            await _db.SaveChangesAsync();
            return department;
        }

        public async Task<IEnumerable<Department?>?> GetAll()
        {
            return await _db.Departments.ToListAsync();
        }
    }
}
