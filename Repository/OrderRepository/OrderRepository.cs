using AutoMapper;
using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Dtos.OrderDto;
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

        public async Task<ServiceResponse<List<OrderDto>>> AddOrder(OrderDto newOrder)
        {

            ServiceResponse<List<OrderDto>> serviceResponse = new ServiceResponse<List<OrderDto>>();
            Order order = _mapper.Map<Order>(newOrder);
            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync();
            serviceResponse.Data = _context.Orders.Select(o => _mapper.Map<OrderDto>(o)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<OrderDto>>> GetAllOrder()
        {
            ServiceResponse<List<OrderDto>> serviceResponse = new ServiceResponse<List<OrderDto>>();
            List<Order> dbOrderDetail = await _context.Orders.Include(p => p.ProductOrders).
            ThenInclude(p => p.Product).ToListAsync();
            serviceResponse.Data = dbOrderDetail.Select(o => _mapper.Map<OrderDto>(o)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<OrderDto>> GetOrderDetail(int orderId)
        {
            var serviceResponse = new ServiceResponse<OrderDto>();
            var order = await _context.Orders.FirstOrDefaultAsync(o => o.OrderID == orderId);
            serviceResponse.Data = _mapper.Map<OrderDto>(order);
            return serviceResponse;
        }
    }
}
