using AutoMapper;
using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Dtos.UserDto;
using ESShopReact.NetCore.Dtos.UserLogin;
using ESShopReact.NetCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository.UserRepository
{
    public class UserRepository : IUserReporsitory
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        public UserRepository(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<ServiceResponse<UserForInfoDto>> UpdateUser(UserForUpdateDto userForUpdate)
        {
            ServiceResponse<UserForInfoDto> serviceResponse = new ServiceResponse<UserForInfoDto>();
            try
            {
                User user = await _context.Users.FirstOrDefaultAsync(u => u.UserID == userForUpdate.UserID);
                if (user != null)
                {
                    user.UserName = userForUpdate.UserName;
                    user.UserSurname = userForUpdate.UserSurname;
                    user.PhoneNumber = userForUpdate.PhoneNumber;
                    user.Adress = userForUpdate.Adress;
                    user.EMail = userForUpdate.EMail;
                    _context.Update(user);
                    await _context.SaveChangesAsync();
                    serviceResponse.Data = _mapper.Map<UserForInfoDto>(user);
                }
                else
                {
                    serviceResponse.Success = false;
                    serviceResponse.Message = "User not found";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }
        public async Task<ServiceResponse<UserForInfoDto>> UserInfo(int userId)
        {
            ServiceResponse<UserForInfoDto> serviceResponse = new ServiceResponse<UserForInfoDto>();
            User dbUser = await _context.Users.FirstOrDefaultAsync(u => u.UserID == userId);
            serviceResponse.Data = _mapper.Map<UserForInfoDto>(dbUser);
            return serviceResponse;
        }
    }
}
