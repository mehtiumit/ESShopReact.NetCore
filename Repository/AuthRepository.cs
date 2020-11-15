using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository
{
    public class AuthRepository : IAuthRepository
    {

        private readonly DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<User> Login(string eMail, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.EMail == eMail);
            if (user == null)
            {
                return null;
            }

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }

            return user;
        }
        private bool VerifyPasswordHash(string password, byte[] userPasswordHash, byte[] userPasswordSalt)
        {
            using (var hcmac = new System.Security.Cryptography.HMACSHA512(userPasswordSalt))
            {
                var computedHash = hcmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != userPasswordHash[i])
                    {
                        return false;
                    }
                }

                return true;
            }
        }
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hcmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hcmac.Key;
                passwordHash = hcmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
        public async Task<User> RegisterUser(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }
        public async Task<bool> UserExists(string eMail)
        {
            if (await _context.Users.AnyAsync(u => u.EMail == eMail))
            {
                return true;
            }

            return false;
        }
    }
}

