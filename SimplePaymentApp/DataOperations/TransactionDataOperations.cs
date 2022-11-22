using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimplePaymentApp.DataOperations
{
    public class TransactionDataOperations : ITransactionDataOperations
    {
        private readonly List<Transactions> _transactions;
        public TransactionDataOperations()
        {
            _transactions = new List<Transactions>();
        }

        public IEnumerable<Transactions> GetAllTransactions()
        {
            return _transactions;
        }

        public Transactions Insert(Transactions transactions)
        {
            _transactions.Add(transactions);
            return transactions;
        }
    }
}
