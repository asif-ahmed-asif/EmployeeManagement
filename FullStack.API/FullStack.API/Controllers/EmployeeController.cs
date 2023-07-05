using FullStack.API.Data;
using FullStack.API.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly DataContext _db;

        public EmployeeController(DataContext db)
        {
            _db = db;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetAll()
        {
            return Ok(await _db.Employees.ToListAsync());
        }
        [HttpPost]
        public async Task<ActionResult<Employee>> AddEmployee([FromBody] Employee employee)
        {
            employee.Id = Guid.NewGuid();
            _db.Employees.Add(employee);
           await _db.SaveChangesAsync();
            return Ok(employee);
        }
        [HttpGet("{id:Guid}")]
        public async Task<ActionResult<Employee>> GetEmployee([FromRoute] Guid id)
        {
            var employee = await _db.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }
        [HttpPut]
        public async Task<ActionResult<Employee>> EditEmployee([FromBody] Employee employee)
        {
            var employeeDetails = await _db.Employees.FindAsync(employee.Id);
            if (employeeDetails == null)
            {
                return NotFound();
            }
            employeeDetails.Name = employee.Name;
            employeeDetails.Email = employee.Email;
            employeeDetails.Phone = employee.Phone;
            employeeDetails.Salary = employee.Salary;
            employeeDetails.Department = employee.Department;
            await _db.SaveChangesAsync();
            return Ok(employeeDetails);
        }

    }
}
