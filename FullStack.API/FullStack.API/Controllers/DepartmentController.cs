using Microsoft.AspNetCore.Mvc;

namespace FullStack.API.Controllers
{
    public class DepartmentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
