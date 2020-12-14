using AutoMapper;
using ESShopReact.NetCore.Data;
using ESShopReact.NetCore.Dtos.Category;
using ESShopReact.NetCore.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ESShopReact.NetCore.Repository
{
    public class AppRepository : IAppRepository
    {
        private DataContext _context;
        private readonly IMapper _mapper;
        public AppRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<List<GetCategoryDto>>> GetCategories()
        {
            ServiceResponse<List<GetCategoryDto>> serviceResponse = new ServiceResponse<List<GetCategoryDto>>();
            List<Category> dbCategories = await _context.Categories.ToListAsync();
            serviceResponse.Data = dbCategories.Select(c => _mapper.Map<GetCategoryDto>(c)).ToList();
            return serviceResponse;
                    }
    }
}
