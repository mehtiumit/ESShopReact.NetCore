using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository
{
    public interface IAppRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        bool SaveAll();
        Task<List<Product>> GetAllProducts();
        Task<Product> GetProductById(int productID);
        Task<User> GetUserDetail(int userID);
        Task<Order> GetOrderDetail(int orderDetailID);
    }
}
