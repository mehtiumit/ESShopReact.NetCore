using ESShopReact.NetCore.Data;

namespace ESShopReact.NetCore.Dtos
{
    public class AddProductDto
    {
     //   public int ProductID { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public decimal ListPrice { get; set; }
        public int CategoryID { get; set; }
        public Category Category { get; set; }
    }
}
