using AutoMapper;
using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Dtos;
using ESShopReact.NetCore.Dtos.Category;
using ESShopReact.NetCore.Dtos.OrderDto;
using ESShopReact.NetCore.Dtos.Product;
using ESShopReact.NetCore.Dtos.UserLogin;
using ESShopReact.NetCore.Models;
using System.Linq;

namespace ESShopReact.NetCore
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Product, GetProductDto>()
            .ForMember(dto => dto.Category, c => c.MapFrom(c => c.Category));
            CreateMap<AddProductDto, Product>();
            CreateMap<User, UserForInfoDto>();
            CreateMap<Category, GetCategoryDto>();
            CreateMap<Order, GetOrderDto>()
            .ForMember(dto => dto.Products, c => c.MapFrom(p => p.ProductOrders.Select(po => po.Product)))
            .ForMember(dto => dto.User, u => u.MapFrom(u => u.User));

        }
    }
}
