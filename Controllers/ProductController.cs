using AutoMapper;
using ESShopReact.NetCore.Dtos;
using ESShopReact.NetCore.Dtos.Product;
using ESShopReact.NetCore.Models;
using ESShopReact.NetCore.Repository;
using ESShopReact.NetCore.Repository.ProductRepository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IAppRepository _appRepository;
        private readonly IProductRepository _productRepository;
        private readonly IMapper _mapper;

        public ProductController(IAppRepository appRepository, IMapper mapper, IProductRepository productRepository)
        {
            _appRepository = appRepository;
            _mapper = mapper;
            _productRepository = productRepository;
        }
        [HttpGet()]
        public async Task<IActionResult> GetProducts()
        {
            return Ok(await _productRepository.GetAllProducts());
        }

        [HttpPost("addproduct")]

        public async Task<IActionResult> AddProduct(AddProductDto addProductDto)
        {
            return Ok(await _productRepository.AddProduct(addProductDto));
        }
        [HttpGet("{productId}")]
        public async Task<IActionResult> GetProductByID(int productId)
        {
            return Ok(await _productRepository.GetProductById(productId));
        }
        [HttpDelete("deleteproduct/{productId}")]
        public async Task<IActionResult> DeleteProduct(int productId)
        {
            ServiceResponse<List<GetProductDto>> response = await _productRepository.DeleteProduct(productId);
            if (response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
        [HttpPut]
        public async Task<IActionResult> UpdateProduct(UpdateProductDto updatedProduct)
        {
            ServiceResponse<GetProductDto> response = await _productRepository.UpdateProduct(updatedProduct);
            if (response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
        [HttpGet("getbyCategory/{categoryId}")]
        public async Task<IActionResult> GetProductsByCategory(int categoryId)
        {
            return Ok(await _productRepository.GetProductsByCategory(categoryId));
        }
    }
}
