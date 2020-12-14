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

        private readonly IProductRepository _productRepository;


        public ProductController(IProductRepository productRepository)
        {
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
        [HttpGet("asc/{categoryId}")]
        public async Task<IActionResult> GetProductsByCategoryASC(int categoryId)
        {
            return Ok(await _productRepository.GetProductsByCategoryASC(categoryId));
        }
        [HttpGet("dsc/{categoryId}")]
        public async Task<IActionResult> GetProductsByCategoryDSC(int categoryId)
        {
            return Ok(await _productRepository.GetProductsByCategoryDESC(categoryId));
        }
        [HttpGet("asc")]
        public async Task<IActionResult> GetProductsByCategoryDeneme()
        {
            return Ok(await _productRepository.GetProductsByASC());
        }
    }
}
