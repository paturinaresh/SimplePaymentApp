using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SimplePaymentApp.DataOperations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimplePaymentApp.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ReceiptController : Controller
    {
        private readonly ILogger<ReceiptController> _logger;
        private readonly ITransactionDataOperations _transactionDataOperations;
        public ReceiptController(ILogger<ReceiptController> logger,  ITransactionDataOperations transactionDataOperations)
        {
            _logger = logger;
            _transactionDataOperations = transactionDataOperations;
        }

        [HttpGet]
        public IEnumerable<Transactions> Get()
        {
            return _transactionDataOperations.GetAllTransactions();
        }
    }
}
