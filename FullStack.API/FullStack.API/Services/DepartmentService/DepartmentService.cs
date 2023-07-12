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

        public async Task<Department?> EditDepartment(Department department)
        {
            var departmentDetails = await _db.Departments.FindAsync(department.Id);
            if (departmentDetails is null) 
            {
                return null;
            }
            departmentDetails.Name = department.Name;
            departmentDetails.Status = department.Status;
            await _db.SaveChangesAsync();
            return departmentDetails;
        }

        public async Task<IEnumerable<Department?>?> GetAll()
        {
            return await _db.Departments.ToListAsync();
        }

        public async Task<Department?> GetDepartment(int id)
        {
            var department = await _db.Departments.FindAsync(id);
            if (department is null)
            {
                return null;
            }
            return department;
        }
    }
}
