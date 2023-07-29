using FullStack.API.Model;
using Microsoft.AspNetCore.Mvc;

namespace FullStack.API.Services.EmployeeService
{
    public interface IEmployeeService
    {
        Task<IEnumerable<Employee?>?> GetAll();
        Task<bool?> AddEmployee(Employee employee);
        Task<Employee?> GetEmployee(Guid id);
        Task<bool?> EditEmployee(Employee employee);
        Task<Employee?> DeleteEmployee(Guid id);
        Task<IEnumerable<Employee?>?> SearchEmployee(string key);

    }
}
