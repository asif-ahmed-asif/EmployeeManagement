using FullStack.API.Model;

namespace FullStack.API.Services.DepartmentService
{
    public interface IDepartmentService
    {
        Task<IEnumerable<Department?>?> GetAll();
        Task<bool?> AddDepartment(Department department);
        Task<Department?> GetDepartment(int id);
        Task<Department?> EditDepartment(Department department);
        Task<Department?> ChangeStatus(int id);
        Task<IEnumerable<Department?>?> SearchDepartment(string key);
    }
}
