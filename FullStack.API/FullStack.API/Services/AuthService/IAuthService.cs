using FullStack.API.Model;

namespace FullStack.API.Services.AuthService
{
    public interface IAuthService
    {
        Task<bool?> SignUp(User user);
        Task<string> Login(Login login);
    }
}
