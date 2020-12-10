using AutoMapper;
using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Dtos;
using ESShopReact.NetCore.Dtos.Category;
using ESShopReact.NetCore.Dtos.Product;
using ESShopReact.NetCore.Dtos.UserLogin;
using ESShopReact.NetCore.Models;

namespace ESShopReact.NetCore
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Product, GetProductDto>();
            CreateMap<AddProductDto, Product>();
            CreateMap<User, UserForInfoDto>();
            CreateMap<Category, GetCategoryDto>();
        }
    }
}
