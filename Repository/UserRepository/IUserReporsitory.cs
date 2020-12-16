using ESShopReact.NetCore.Dtos.UserDto;
using ESShopReact.NetCore.Dtos.UserLogin;
using ESShopReact.NetCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository.UserRepository
{
    public interface IUserReporsitory
    {
        Task<ServiceResponse<UserForInfoDto>> UpdateUser(UserForUpdateDto userForUpdate);
        Task<ServiceResponse<UserForInfoDto>> UserInfo(int userId);
    }
}
