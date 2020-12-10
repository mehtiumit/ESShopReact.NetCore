using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ESShopReact.NetCore.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ESShopReact.NetCore.Controllers
{
    [Route("api/category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IAppRepository _repository;

        public CategoryController(IAppRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            return Ok(await _repository.GetCategories());
        }
    }
}
