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
            return Ok(await _employeeService.AddEmployee(employee));
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
            var employeeDetails = await _employeeService.EditEmployee(employee);
            if (employeeDetails is null)
            {
                return NotFound();
            }
            return Ok(employeeDetails);
        }
        [HttpDelete("{id:Guid}")]
        public async Task<ActionResult<Employee>> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await _employeeService.DeleteEmployee(id);
            if (employee is null)
            {
                return NotFound();
            }
            return Ok(employee);
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
