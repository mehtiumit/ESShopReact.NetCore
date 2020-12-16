using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ESShopReact.NetCore.Dtos.UserDto;
using ESShopReact.NetCore.Dtos.UserLogin;
using ESShopReact.NetCore.Models;
using ESShopReact.NetCore.Repository.UserRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ESShopReact.NetCore.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserReporsitory _userReporsitory;
        public UserController(IUserReporsitory userReporsitory)
        {
            _userReporsitory = userReporsitory;
        }

        [HttpPut("updateuser")]
        public async Task<IActionResult> UpdateUser(UserForUpdateDto userForUpdate)
        {
            ServiceResponse<UserForInfoDto> response = await _userReporsitory.UpdateUser(userForUpdate);
            if (response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
        [HttpGet("getuser/{userId}")]
        public async Task<IActionResult> GetUser(int userId)
        {
            return Ok(await _userReporsitory.UserInfo(userId));
        }
    }
}
