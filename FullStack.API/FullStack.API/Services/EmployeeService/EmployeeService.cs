using FullStack.API.Data;
using FullStack.API.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace FullStack.API.Services.EmployeeService
{
    public class EmployeeService : IEmployeeService
    {
        private readonly DataContext _db;
        public EmployeeService(DataContext db)
        {
            _db = db;
        }

        public async Task<bool?> AddEmployee(Employee employee)
        {
            var exists = await _db.Employees.AnyAsync(x => x.Email == employee.Email);
            if (exists)
            {
                return false;
            }
            employee.Id = Guid.NewGuid();
            _db.Employees.Add(employee);
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<Employee?> DeleteEmployee(Guid id)
        {
            var employee = await _db.Employees.FindAsync(id);
            if (employee is null)
            {
                return null;
            }
            _db.Employees.Remove(employee);
            await _db.SaveChangesAsync();
            return employee;
        }

        public async Task<bool?> EditEmployee(Employee employee)
        {
            var exists = await _db.Employees.FirstOrDefaultAsync(x => x.Email == employee.Email);
            if (exists != null && exists.Id != employee.Id)
            {
                return false;
            }
            var employeeDetails = await _db.Employees.FindAsync(employee.Id);
            if (employeeDetails is null)
            {
                return null;
            }
            employeeDetails.Name = employee.Name;
            employeeDetails.Email = employee.Email;
            employeeDetails.Phone = employee.Phone;
            employeeDetails.Salary = employee.Salary;
            employeeDetails.DepartmentId = employee.DepartmentId;
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Employee?>?> GetAll()
        {
            return await _db.Employees.Include(d => d.Department).ToListAsync();
        }

        public async Task<Employee?> GetEmployee(Guid id)
        {
            var employee = await _db.Employees.FindAsync(id);
            if (employee is null)
            {
                return null;
            }
            return employee;
        }

        public async Task<IEnumerable<Employee?>?> SearchEmployee(string key)
        {
            var employees = await _db.Employees.Where(e => e.Name.Contains(key))
                .Include(d => d.Department)
                .ToListAsync();
            if (employees.Any())
            {
                return employees;
            }
            return null;
        }
    }
}
