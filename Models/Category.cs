using System.Collections.Generic;

namespace ESShopReact.NetCore.Data
{
    public class Category
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public ICollection<Product> Product { get; set; }
    }
}
