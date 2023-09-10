using FullStack.API.Data;
using FullStack.API.Model;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Services.AuthService
{
    public class AuthService : IAuthService
    {
        private readonly DataContext _db;

        public AuthService(DataContext db)
        {
            _db = db;
        }

        public async Task<string> Login(Login login)
        {
            throw new NotImplementedException();
        }

        public async Task<bool?> SignUp(User user)
        {
            var checkUser = await _db.Users.AnyAsync(u => u.Email == user.Email);
            if (checkUser)
            {
                return false;
            }
            user.Id = Guid.NewGuid();
            user.Token = "";
            user.Role = "";
            user.Status = "";
            _db.Users.Add(user);
            await _db.SaveChangesAsync();
            return true;
        }
    }
}
