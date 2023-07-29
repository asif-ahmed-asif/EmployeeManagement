using FullStack.API.Model;
using FullStack.API.Services.EmployeeService;
using Microsoft.AspNetCore.Mvc;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetAll()
        {
            return Ok(await _employeeService.GetAll());
        }
        [HttpPost]
        public async Task<ActionResult<Employee>> AddEmployee([FromBody] Employee employee)
        {
            var result = await _employeeService.AddEmployee(employee);
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
        [HttpGet("{id:Guid}")]
        public async Task<ActionResult<Employee>> GetEmployee([FromRoute] Guid id)
        {
            var employee = await _employeeService.GetEmployee(id);
            if (employee is null)
            {
                return NotFound();
            }
            return Ok(employee);
        }
        [HttpPut]
        public async Task<ActionResult<Employee>> EditEmployee([FromBody] Employee employee)
        {
            var result = await _employeeService.EditEmployee(employee);
            if (result is null)
            {
                return NotFound();
            }
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
        [HttpDelete("{id:Guid}")]
        public async Task<ActionResult<Employee>> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await _employeeService.DeleteEmployee(id);
            if (employee is null)
            {
                return NotFound(new
                {
                    Message = "Something went wrong!"
                });
            }
            return Ok(new
            {
                Message = "Employee Deleted!"
            });
        }
        [HttpGet("search/{key}")]
        public async Task<ActionResult<IEnumerable<Employee>>> SearchEmployee([FromRoute] string key)
        {
            var employees = await _employeeService.SearchEmployee(key);
            if (employees is null)
            {
               return NotFound();
            }
             return Ok(employees);
        }

    }
}
