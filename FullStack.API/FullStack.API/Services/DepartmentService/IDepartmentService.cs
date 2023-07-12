using FullStack.API.Model;

namespace FullStack.API.Services.DepartmentService
{
    public interface IDepartmentService
    {
        Task<IEnumerable<Department?>?> GetAll();
        Task<Department?> AddDepartment(Department department);
        Task<Department?> GetDepartment(int id);
    }
}
