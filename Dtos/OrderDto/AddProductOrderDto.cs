using ESShopReact.NetCore.Dtos.Product;
using ESShopReact.NetCore.Dtos.UserLogin;
using ESShopReact.NetCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Dtos.OrderDto
{
    public class AddProductOrderDto
    {
        public int OrderID { get; set; }
        public int ProductID { get; set; }

    }
}
