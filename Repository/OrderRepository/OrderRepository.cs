using AutoMapper;
using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Dtos.OrderDto;
using ESShopReact.NetCore.Dtos.Product;
using ESShopReact.NetCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository.OrderRepository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;

        public OrderRepository(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<ServiceResponse<GetOrderDto>> AddOrder(List<AddProductOrderDto> newOrders)
        {

            ServiceResponse<GetOrderDto> serviceResponse = new ServiceResponse<GetOrderDto>();
            try
            {
                foreach (var newOrder in newOrders)
                {
                    Order order = await _context.Orders.Include(p => p.ProductOrders)
                   .ThenInclude(po => po.Product)
                   .FirstOrDefaultAsync(c => c.OrderID == newOrder.OrderID);
                    if (order == null)
                    {
                        serviceResponse.Success = false;
                        serviceResponse.Message = "Order not found";
                        return serviceResponse;
                    }
                    Product product = await _context.Products.FirstOrDefaultAsync(p => p.ProductID == newOrder.ProductID);

                    if (product == null)
                    {
                        serviceResponse.Success = false;
                        serviceResponse.Message = "Product not found";
                        return serviceResponse;
                    }
                    ProductOrder productOrder = new ProductOrder
                    {
                        Order = order,
                        Product = product,
                    };
                    await _context.ProductOrders.AddAsync(productOrder);
                    await _context.SaveChangesAsync();
                    serviceResponse.Data = _mapper.Map<GetOrderDto>(order);
                }

            }
            catch (Exception e)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = e.Message;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetOrderDto>>> GetAllOrder()
        {
            ServiceResponse<List<GetOrderDto>> serviceResponse = new ServiceResponse<List<GetOrderDto>>();
            List<Order> dbOrderDetail = await _context.Orders.Include(p => p.ProductOrders).
            ThenInclude(p => p.Product).ToListAsync();
            serviceResponse.Data = dbOrderDetail.Select(o => _mapper.Map<GetOrderDto>(o)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetOrderDto>> GetOrderDetail(int orderId)
        {
            var serviceResponse = new ServiceResponse<GetOrderDto>();
            var order = await _context.Orders.Include(p => p.ProductOrders).ThenInclude(po => po.Product).FirstOrDefaultAsync(o => o.OrderID == orderId);
            serviceResponse.Data = _mapper.Map<GetOrderDto>(order);
            return serviceResponse;
        }
    }
}
