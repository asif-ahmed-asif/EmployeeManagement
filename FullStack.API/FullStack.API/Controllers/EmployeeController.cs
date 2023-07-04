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
    }
}
