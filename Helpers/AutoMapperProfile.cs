using AutoMapper;
using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Dtos;
using ESShopReact.NetCore.Dtos.Product;

namespace ESShopReact.NetCore
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Product, GetProductDto>();
            CreateMap<AddProductDto, Product>();
        }
    }
}
