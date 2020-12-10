using ESShopReact.NetCore.Models;
using System.Collections.Generic;

namespace ESShopReact.NetCore.Data
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public int UnitsInStock { get; set; }
        public decimal ListPrice { get; set; }
        public int CategoryID { get; set; }
        public Category Category { get; set; }
        public ICollection<OrderDetail> OrderDetail { get; set; }

    }
}

