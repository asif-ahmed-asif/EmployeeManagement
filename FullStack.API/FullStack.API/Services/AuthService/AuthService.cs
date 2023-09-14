using FullStack.API.Data;
using FullStack.API.Helpers;
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

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _db.Users.ToListAsync();
        }

        public async Task<string?> Login(Login login)
        {
            var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == login.Email);
            if (user == null)
            {
                return null;
            }
            if(!PasswordHasher.VerifyPassword(login.Password, user.Password)) 
            {
                return "incorrect";
            }
            return "correct";
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
            user.Password = PasswordHasher.HashPassword(user.Password);
            _db.Users.Add(user);
            await _db.SaveChangesAsync();
            return true;
        }
    }
}
