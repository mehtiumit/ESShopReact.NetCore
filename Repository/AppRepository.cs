using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository
{
    public class AppRepository : IAppRepository
    {
        private DataContext _context;
        public AppRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {

            _context.Remove(entity);
        }

        public async Task<List<Product>> GetAllProducts()
        {
            var products = await _context.Products.ToListAsync();
            return products;
        }

        public Task<Order> GetOrderDetail(int orderDetailID)
        {
            throw new System.NotImplementedException();
        }

        public async Task<Product> GetProductById(int productID)
        {
            var product = await _context.Products.FirstOrDefaultAsync(p => p.ProductID == productID);
            return product;
        }

        public async Task<User> GetUserDetail(int userID)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserID == userID);
            return user;
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
