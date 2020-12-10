using AutoMapper;
using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Dtos;
using ESShopReact.NetCore.Dtos.Product;
using ESShopReact.NetCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository.ProductRepository
{
    public class ProductRepository : IProductRepository
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;

        public ProductRepository(IMapper mapper, DataContext context)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ServiceResponse<List<GetProductDto>>> AddProduct(AddProductDto newProduct)
        {
            ServiceResponse<List<GetProductDto>> serviceResponse = new ServiceResponse<List<GetProductDto>>();
            Product product = _mapper.Map<Product>(newProduct);
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();
            serviceResponse.Data = (_context.Products.Select(p => _mapper.Map<GetProductDto>(p))).ToList();
            return serviceResponse;

        }

        public async Task<ServiceResponse<List<GetProductDto>>> DeleteProduct(int productID)
        {
            ServiceResponse<List<GetProductDto>> serviceResponse = new ServiceResponse<List<GetProductDto>>();
            try
            {
                Product product = await _context.Products.FirstOrDefaultAsync(p => p.ProductID == productID);
                if (product != null)
                {
                    _context.Products.Remove(product);
                    await _context.SaveChangesAsync();
                    serviceResponse.Data = _context.Products.Select(p => _mapper.Map<GetProductDto>(p)).ToList();
                }
                else
                {
                    serviceResponse.Success = false;
                    serviceResponse.Message = "Product not found";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetProductDto>>> GetAllProducts()
        {
            ServiceResponse<List<GetProductDto>> serviceResponse = new ServiceResponse<List<GetProductDto>>();
            List<Product> dbProducts = await _context.Products.ToListAsync();
            serviceResponse.Data = dbProducts.Select(p => _mapper.Map<GetProductDto>(p)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetProductDto>> GetProductById(int productID)
        {
            //TODO Can be wrong!
            ServiceResponse<GetProductDto> serviceResponse = new ServiceResponse<GetProductDto>();
            Product dbProducts = await _context.Products
                .FirstOrDefaultAsync(p => p.ProductID == productID);
            serviceResponse.Data = _mapper.Map<GetProductDto>(dbProducts);
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetProductDto>>> GetProductsByCategory(int categoryID)
        {
            ServiceResponse<List<GetProductDto>> serviceResponse = new ServiceResponse<List<GetProductDto>>();
            List<Product> dbProducts = await _context.Products.Where(c => c.CategoryID == categoryID).ToListAsync();
            serviceResponse.Data = dbProducts.Select(p => _mapper.Map<GetProductDto>(p)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetProductDto>> UpdateProduct(UpdateProductDto updatedProduct)
        {
            ServiceResponse<GetProductDto> serviceResponse = new ServiceResponse<GetProductDto>();
            try
            {
                Product product = await _context.Products.FirstOrDefaultAsync(p => p.ProductID == updatedProduct.ProductID);
                if (product != null)
                {
                    product.ProductName = updatedProduct.ProductName;
                    product.ListPrice = updatedProduct.ListPrice;
                    product.UnitsInStock = updatedProduct.UnitsInStock;
                    product.CategoryID = updatedProduct.CategoryID;
                    product.Description = updatedProduct.Description;
                    _context.Products.Update(product);
                    await _context.SaveChangesAsync();
                    serviceResponse.Data = _mapper.Map<GetProductDto>(product);
                }
                else
                {
                    serviceResponse.Success = false;
                    serviceResponse.Message = "Product not found";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }
    }

}
