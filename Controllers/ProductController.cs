using ESShopReact.NetCore.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IAppRepository _appRepository;

        public ProductController(IAppRepository appRepository)
        {
            _appRepository = appRepository;
        }
        [HttpGet()]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _appRepository.GetAllProducts();
            return Ok(products);
        }
        [HttpGet("getproductbyid")]
        public async Task<IActionResult> GetProductByID(int productID)
        {
            var product = await _appRepository.GetProductById(productID);
            return Ok(product);
        }

    }
}
