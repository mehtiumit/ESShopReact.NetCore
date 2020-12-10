using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Dtos.Category
{
    public class GetCategoryDto
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public ICollection<AddProductDto> Product { get; set; }
    }
}
