using ESShopReact.NetCore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Models
{
    public class ProductOrder
    {
        public int ProductID { get; set; }
        public Product Product { get; set; }
        public int OrderID { get; set; }
        public Order Order { get; set; }
    }
}
