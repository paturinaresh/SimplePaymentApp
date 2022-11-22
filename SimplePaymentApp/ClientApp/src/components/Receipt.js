import React, { Component } from 'react';

export class Receipt extends Component {
    static displayName = Receipt.name;

    constructor(props) {
        super(props);
        this.state = { receipts: [], loading: true };
    }

    componentDidMount() {
        this.populateTransactionData();
    }

    static renderTransactionTable(receipts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Transaction Reference Number</th>
                    </tr>
                </thead>
                <tbody>
                    {receipts.map(receipt =>
                        <tr key={receipt.date}>
                            <td>{receipt.date}</td>
                            <td>{receipt.name}</td>
                            <td>{receipt.transactionAmount}</td>
                            <td>{receipt.transactionReferenceNumber}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Receipt.renderTransactionTable(this.state.receipts);

        return (
            <div>
                <h1 id="tabelLabel" >Transaction Data</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateTransactionData() {
        const response = await fetch('/Receipt/Get');
        const data = await response.json();
        console.log(data);
        this.setState({ receipts: data, loading: false });
    }
}
