import React, { Component } from 'react';

export class FindSite extends Component {
    static displayName = FindSite.name;

    constructor(props) {
        super(props);
        this.state = { findsite: [], loading: true };
    }

    componentDidMount() {
        this.populateFindSite();
    }

    render() {
        return (
            <div>
                <h1>Looking for Business Solutions? Whether you are freelancer or a business, we are here to support you.</h1>
                <p>Welcome to Simple Payments application</p>
                <h2>charge your business with the all‑powerful Payment Gateway:</h2>
                <ul>
                    <li><strong>{this.state.findsite.payMethodsCount} Payment Methods</strong></li>
                    <li><strong>Join the {this.state.findsite.payfirmsCount}+ businesses using SimplePay</strong></li>
                    <li><strong>Industry Leading Success Rate</strong></li>
                    <li><strong>Easy to Integrate</strong></li>
                </ul>
                <br />
                <br />
                <p>Empower your business with all the right tools to accept online payments and provide the best customer experience</p>
            </div>
        );
    }

    async populateFindSite() {
        const response = await fetch('FindSite');
        const data = await response.json();
        this.setState({ findsite: data, loading: false });
    }
}
