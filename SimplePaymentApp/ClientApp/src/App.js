import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FindSite } from './components/FindSite';
import { UnlockPump } from './components/UnlockPump';
import { Receipt } from './components/Receipt';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={FindSite} />
                <Route path='/unlockpump' component={UnlockPump} />
                <Route path='/receipt' component={Receipt} />
            </Layout>
        );
    }
}
