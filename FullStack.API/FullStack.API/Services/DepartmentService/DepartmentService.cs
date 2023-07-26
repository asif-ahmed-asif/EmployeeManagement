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
        public async Task<bool?> AddDepartment(Department department)
        {
            var exists = await _db.Departments.AnyAsync(x => x.Name == department.Name);
            if (exists)
            {
                return false;
            }
            _db.Departments.Add(department);
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<Department?> ChangeStatus(int id)
        {
            var department = await _db.Departments.FindAsync(id);
            if (department is null)
            {
                return null;
            }
            if (department.Status == "Active")
            {
                department.Status = "Inactive";
            }
            else
            {
                department.Status = "Active";
            }
            await _db.SaveChangesAsync();
            return department;
        }

        public async Task<bool?> EditDepartment(Department department)
        {
            var exists = await _db.Departments.FirstOrDefaultAsync(x => x.Name == department.Name);
            if (exists != null && exists.Id != department.Id)
            {
                return false;
            }
            var departmentDetails = await _db.Departments.FindAsync(department.Id);
            if (departmentDetails is null) 
            {
                return null;
            }
            departmentDetails.Name = department.Name;
            departmentDetails.Status = department.Status;
            await _db.SaveChangesAsync();
            return true;
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

        public async Task<IEnumerable<Department?>?> SearchDepartment(string key)
        {
            var department = await _db.Departments.Where(d => d.Name.Contains(key)).ToListAsync();
            if (department.Any())
            {
                return department;
            }
            return null;
        }
    }
}
