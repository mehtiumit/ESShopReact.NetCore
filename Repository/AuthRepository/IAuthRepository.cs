using ESShopReact.NetCore.Dtos.UserLogin;
using ESShopReact.NetCore.Models;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository
{
    public interface IAuthRepository
    {
        Task<User> RegisterUser(User user, string password);
        Task<User> Login(string eMail, string password);
               Task<bool> UserExists(string eMail);
    }
}
