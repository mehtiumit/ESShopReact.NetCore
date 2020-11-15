using System.Collections.Generic;

namespace ESShopReact.NetCore.Models
{
    public class Order
    {
        public int OrderID { get; set; }
        User User { get; set; }
        public string OrderShipName { get; set; }
        public string OrderAdress { get; set; }
        public int OrderAmount { get; set; }
        public ICollection<OrderDetail> OrderDetail { get; set; }
    }
}
