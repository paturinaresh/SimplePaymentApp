using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimplePaymentApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FindSiteController : ControllerBase
    {
        private readonly ILogger<FindSiteController> _logger;

        public FindSiteController(ILogger<FindSiteController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public FindSite Get()
        {
            return new FindSite
            {
                PayMethodsCount = 10,
                PayfirmsCount = 10000,
            };
        }
    }
}
