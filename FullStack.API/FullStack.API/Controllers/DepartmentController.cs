using FullStack.API.Model;
using FullStack.API.Services.DepartmentService;
using Microsoft.AspNetCore.Mvc;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DepartmentController : Controller
    {
        private readonly IDepartmentService _departmentService;

        public DepartmentController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Department>>> GetAll()
        {
            return Ok(await _departmentService.GetAll());
        }
        [HttpPost]
        public async Task<ActionResult<Department>> AddDepartment([FromBody] Department department)
        {
            return Ok(await _departmentService.AddDepartment(department));
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Department>> GetDepartment([FromRoute] int id)
        {
            var department = await _departmentService.GetDepartment(id);
            if (department is null) 
            {
                return NotFound();
            }
            return Ok(department);
        }
    }
}
