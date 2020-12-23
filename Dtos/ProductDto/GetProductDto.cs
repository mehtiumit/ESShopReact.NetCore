using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Dtos.Category;
using ESShopReact.NetCore.Dtos.OrderDto;
using ESShopReact.NetCore.Models;
using System.Collections.Generic;

namespace ESShopReact.NetCore.Dtos.Product
{
    public class GetProductDto
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public int UnitsInStock { get; set; }
        public int OrderedQuantity { get; set; }
        public decimal ListPrice { get; set; }
        public int CategoryID { get; set; }
        public GetCategoryDto Category { get; set; }

    }
}
