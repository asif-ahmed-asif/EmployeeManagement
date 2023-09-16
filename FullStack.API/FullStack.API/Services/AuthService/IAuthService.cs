using FullStack.API.Model;

namespace FullStack.API.Services.AuthService
{
    public interface IAuthService
    {
        Task<bool?> SignUp(User user);
        Task<(User? user, string? result)> Login(Login login);
        Task<IEnumerable<User>> GetUsers();
    }
}
