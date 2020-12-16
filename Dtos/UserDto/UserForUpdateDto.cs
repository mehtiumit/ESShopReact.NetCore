using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Dtos.UserDto
{
    public class UserForUpdateDto
    {
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string UserSurname { get; set; }
        public string EMail { get; set; }
        public string PhoneNumber { get; set; }
        public string Adress { get; set; }
    }
}
