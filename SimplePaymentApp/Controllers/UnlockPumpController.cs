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
    public class UnlockPumpController : Controller
    {
        private readonly ILogger<UnlockPumpController> _logger;
        private readonly ITransactionDataOperations _transactionDataOperations;

        public UnlockPumpController(ILogger<UnlockPumpController> logger, ITransactionDataOperations transactionDataOperations)
        {
            _logger = logger;
            _transactionDataOperations = transactionDataOperations;
        }

        [HttpPost]
        public Transactions Insert([FromForm] Transactions transactions)
        {
            Transactions response = new Transactions();
            if(transactions != null)
            {
                transactions.Date = DateTime.Now;
                transactions.TransactionReferenceNumber = Guid.NewGuid().ToString("N");
                response = _transactionDataOperations.Insert(transactions);
            }
            return response;
        }
    }
}
