using ESShopReact.NetCore.Data;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ESShopReact.NetCore.Models
{
    public class OrderDetail
    {
        [Key]
        public int DetailID { get; set; }
        public string DetailName { get; set; }
        public decimal DetailPrice { get; set; }
        public int DetailQuantity { get; set; }
        public Order Order { get; set; }
        public List<Product> Product { get; set; }
    }
}
