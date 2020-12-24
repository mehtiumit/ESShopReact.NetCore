using ESShopReact.NetCore.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ESShopReact.NetCore.Data
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public int UnitsInStock { get; set; }
        public int OrderedQuantity { get; set; }
        public decimal ListPrice { get; set; }
        [ForeignKey("CategoryID")]
        public int CategoryID { get; set; }
        public Category Category { get; set; }
        public List<ProductOrder> ProductOrders { get; set; }

    }
}

