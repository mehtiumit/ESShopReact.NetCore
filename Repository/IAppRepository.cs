using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Dtos.Category;
using ESShopReact.NetCore.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository
{
    public interface IAppRepository
    {
        Task<ServiceResponse<List<GetCategoryDto>>> GetCategories();
    }
}
