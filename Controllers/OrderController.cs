using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ESShopReact.NetCore.Dtos.OrderDto;
using ESShopReact.NetCore.Repository.OrderRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ESShopReact.NetCore.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _repository;
        public OrderController(IOrderRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllOrders()
        {
            return Ok(await _repository.GetAllOrder());
        }

        [HttpGet("getorder/{orderId}")]
        public async Task<IActionResult> GetOrderById(int orderId)
        {
            return Ok(await _repository.GetOrderDetail(orderId));
        }
        [HttpPost("addorder")]
        public async Task<IActionResult> AddOrder(OrderDto newOrder)
        {
            return Ok(await _repository.AddOrder(newOrder));
        }
    }
}
