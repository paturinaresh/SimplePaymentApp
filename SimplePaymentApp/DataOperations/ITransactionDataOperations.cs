using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimplePaymentApp.DataOperations
{
    public interface ITransactionDataOperations
    {
        IEnumerable<Transactions> GetAllTransactions();
        Transactions Insert(Transactions transactions);
    }
}
