import React, { Component } from 'react';

export class UnlockPump extends Component {

    static displayName = UnlockPump.name;
    constructor(props) {
        super(props);
        this.state = { transactions: [], loading: true };

        this.completeTransaction = this.completeTransaction.bind(this);
    }

    //validateForm(ev) {
    //    if ((ev.target.cardName.value == '' || ev.target.cardName.value == undefined)
    //        || (ev.target.cardNumber.value == '' || ev.target.cardNumber.value == undefined)
    //        || (ev.target.cardCvv.value == '' || ev.target.cardCvv.value == undefined)
    //        || (ev.target.cardAmount.value == '' || ev.target.cardAmount.value == undefined)) {
    //        alert("Can not proceed, Please fill all the fields");
    //        return false;
    //    }
    //    if (ev.target.cardNumber.value.length != 11) {
    //        alert("Can not proceed, Card number should be exactly 11 integers");
    //        return false;
    //    }
    //    if (ev.target.cardCvv.value.length != 3) {
    //        alert("Can not proceed, Card cvv should be exactly 3 integers");
    //        return false;
    //    }
    //}

    completeTransaction(ev) {
        ev.preventDefault();
        //if (!this.validateForm(ev)) {
        //    return;
        //}
        let transactionData = { name: ev.target.cardName.value, transactionAmount: ev.target.cardAmount.value };
        this.insertTransaction(transactionData);
        console.log("Name:" + this.state.transactions.name);
    }

    static renderPayFormTable() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <tbody>
                    <tr>
                        <th>Name as on card</th>
                        <td><input type="text" title="Enter card holder name" id="cardName" name="cardName" placeholder="Enter card holder name" required="'required'" className="required placeholder" autoComplete="off" /></td>
                    </tr>
                    <tr>
                        <th>Card Number</th>
                        <td><input type="text" title="Enter 11 digit card number" pattern="[\d]{11}" id="cardNumber" name="cardNumber" placeholder="Enter Card Number" required="'required'" className="required placeholder" autoComplete="off" /></td>
                    </tr>
                    <tr>
                        <th>Card cvv</th>
                        <td><input type="password" title="Enter 3 digit cvv" pattern="[\d]{3}" id="cardCvv" name="cardCvv" placeholder="Enter Card Cvv" required="'required'" className="required placeholder" autoComplete="off" /></td>
                    </tr>
                    <tr>
                        <th>Amount</th>
                        <td><input title="Enter amount" pattern="^[1-9]\d*(\.\d+)?$" id="cardAmount" name="cardAmount" placeholder="Enter amount" required="'required'" className="required placeholder" autoComplete="off" /></td>
                    </tr>
                    <tr>
                        <th colSpan='2'><button type="submit" className="btn btn-primary">Pay</button></th>
                    </tr>
                </tbody>
            </table>
        );
    }

    render() {
        let contents = UnlockPump.renderPayFormTable();

        return (
            <form id="paymentForm" onSubmit={this.completeTransaction}>
                <div>
                    <h1>Complete Transaction</h1>

                    <p>Please provide all information below to complete the transaction</p>

                    {contents}
                </div>
            </form>
        );
    }

    clearPaymentForm = () => {
        document.getElementById("paymentForm").reset();
    }

    async insertTransaction(transactionData) {
        let formData = new FormData();
        formData.append("Name", transactionData.name);
        formData.append("TransactionAmount", transactionData.transactionAmount);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        //await fetch('/UnlockPump/Insert', requestOptions)
        //    .then(response => response.json())
        //    .then(data => console.log(data));

        const response = await fetch('/UnlockPump/Insert', requestOptions);
        const data = await response.json();
        console.log("Application Data:" + data);
        if (data != null && data != undefined) {
            alert("Transaction completed successfully; Please note reference number: " + data.transactionReferenceNumber);
            this.clearPaymentForm();
        }
        
        this.setState({ transactions: data, loading: false });
    }
}
