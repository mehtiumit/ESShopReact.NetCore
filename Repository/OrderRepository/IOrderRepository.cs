using ESShopReact.NetCore.Dtos.OrderDto;
using ESShopReact.NetCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository.OrderRepository
{
    public interface IOrderRepository
    {
        //Task<ServiceResponse<List<OrderDetailDto>>> AddOrder(OrderDetailDto newOrder);
        //Task<ServiceResponse<OrderDetailDto>> GetOrderDetail(int orderId);
        //Task<ServiceResponse<List<OrderDetailDto>>> GetAllOrder();


        Task<ServiceResponse<List<OrderDto>>> AddOrder(OrderDto newOrder);
        Task<ServiceResponse<OrderDto>> GetOrderDetail(int orderId);
        Task<ServiceResponse<List<OrderDto>>> GetAllOrder();
    }
}
