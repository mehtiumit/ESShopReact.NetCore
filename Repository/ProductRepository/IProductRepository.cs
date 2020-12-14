using ESShopReact.NetCore.Dtos;
using ESShopReact.NetCore.Dtos.Product;
using ESShopReact.NetCore.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository.ProductRepository
{
    public interface IProductRepository
    {
        Task<ServiceResponse<List<GetProductDto>>> GetAllProducts();
        Task<ServiceResponse<GetProductDto>> GetProductById(int productID);
        Task<ServiceResponse<List<GetProductDto>>> AddProduct(AddProductDto newProduct);
        Task<ServiceResponse<GetProductDto>> UpdateProduct(UpdateProductDto updatedProduct);
        Task<ServiceResponse<List<GetProductDto>>> DeleteProduct(int productID);
        Task<ServiceResponse<List<GetProductDto>>> GetProductsByCategory(int categoryID);
        Task<ServiceResponse<List<GetProductDto>>> GetProductsByCategoryASC(int categoryID);
        Task<ServiceResponse<List<GetProductDto>>> GetProductsByCategoryDESC(int categoryID);
        Task<ServiceResponse<List<GetProductDto>>> GetProductsByASC();
    }
}
