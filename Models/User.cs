using System.Collections.Generic;

namespace ESShopReact.NetCore.Models
{
    public class User
    {

        public User()
        {
            Orders = new List<Order>();
        }

        public int UserID { get; set; }
        public ICollection<Order> Orders { get; set; }
        public string UserName { get; set; }
        public string UserSurname { get; set; }
        public string EMail { get; set; }
        public string PhoneNumber { get; set; }
        public string Adress { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}
