using FullStack.API.Model;
using FullStack.API.Services.AuthService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FullStack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        public async Task<ActionResult<string>> SignUp([FromBody] User user)
        {
            var output = await _authService.SignUp(user);
            if(output is true) 
            {
                return Ok(new
                {
                    Message = "User Registered!"
                });
            }
            return BadRequest(new
            {
                Message = "Email already registered!"
            });

        }
        
        [HttpPost("login")]
        public async Task<ActionResult<string>> Login([FromBody] Login login)
        {
            var output = await _authService.Login(login);
            if (output.result is null)
            {
                return NotFound(new
                {
                    Message = "Email not Registered!"
                });
            }
            if (output.result == "incorrect")
            {
                return BadRequest(new
                {
                    Message = "Incorrect Password!"
                });
            }            
            return Ok(new
            {
                Token = output.user?.Token,
                Message = "User Logged In!"
            });
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAll()
        {
            return Ok(await _authService.GetUsers());
        }
    }
}
