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

            CreateMap<Order, OrderDto>()
           .ForMember(dto => dto.Product, c => c.MapFrom(p => p.ProductOrders.Select(po => po.Product)))
           .ForMember(dto => dto.User, u => u.MapFrom(u => u.User));


            //    CreateMap<OrderDto, Order>().ForMember(dto => dto.ProductOrders.Select(p => p.Product), c => c.MapFrom(p => p.Product)); 
            /* çalışmıyor AutoMapper.AutoMapperConfigurationException:* 'Custom configuration for members is only supported for top-level individual members on a type.'*/
            CreateMap<OrderDto, Order>(); // product hariç hepsini yüklüyor
        }
    }
}
