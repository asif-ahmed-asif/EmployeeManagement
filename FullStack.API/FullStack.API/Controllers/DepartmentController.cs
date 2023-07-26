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
        public async Task<ActionResult<string>> AddDepartment([FromBody] Department department)
        {
            var result = await _departmentService.AddDepartment(department);
            if (result is true)
            {
                return Ok(new
                {
                    Message = "Department created!"
                });
            }
            return BadRequest(new
            {
                Message = "Name already exists!"
            });
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
        [HttpPut]
        public async Task<ActionResult<Department>> EditDepartment([FromBody] Department department)
        {
            var result = await _departmentService.EditDepartment(department);
            if (result is null)
            {
                return NotFound();
            }
            if (result is true)
            {
                return Ok(new
                {
                    Message = "Department updated!"
                });
            }
            return BadRequest(new
            {
                Message = "Name already exists!"
            });
        }
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<string>> ChangeStatus([FromRoute] int id)
        {
            var department = await _departmentService.ChangeStatus(id);
            if (department is null)
            {
                return NotFound(new
                {
                    Message = "Something went wrong!"
                });
            }
            return Ok(new
            {
                Message = "Status changed!"
            });
        }
        [HttpGet("search/{key}")]
        public async Task<ActionResult<IEnumerable<Department>>> SearchDepartment([FromRoute] string key)
        {
            var department = await _departmentService.SearchDepartment(key);
            if (department is null)
            {
                return NotFound();
            }
            return Ok(department);
        }
    }
}
