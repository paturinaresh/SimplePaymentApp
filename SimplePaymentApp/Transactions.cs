using System;

namespace SimplePaymentApp
{
    public class Transactions
    {
        public DateTime Date { get; set; }

        public string TransactionReferenceNumber { get; set; }

        public string Name { get; set; }
        public decimal TransactionAmount { get; set; }
    }
}
