﻿using ESShopReact.NetCore.Dtos.Product;
using ESShopReact.NetCore.Dtos.UserLogin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Dtos.OrderDto
{
    public class GetOrderDto
    {
        public int UserID { get; set; }
        public UserForInfoDto User { get; set; }
        public string OrderShipName { get; set; }
        public string OrderAdress { get; set; }
        public int OrderAmount { get; set; }
        public List<GetProductDto> Products { get; set; }
    }
}
