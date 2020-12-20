using ESShopReact.NetCore.Data;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ESShopReact.NetCore.Models
{
    public class Order
    {

        public int OrderID { get; set; }

        [ForeignKey("UserID")]
        public int UserID { get; set; }
        public User User { get; set; }
        public string OrderShipName { get; set; }
        public string OrderAdress { get; set; }
        public int OrderAmount { get; set; }


        public List<ProductOrder> ProductOrders { get; set; }
    }
}
