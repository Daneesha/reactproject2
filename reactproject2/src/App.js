import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from './layout/Layout';
import { Home } from './home/Home';
import { FetchData } from './fetchdata/FetchData';
import { Counter } from './counter/Counter';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/counter' element={<Counter />} />
                    <Route path='/fetch-data' element={<FetchData />} />
                </Routes>
            </Layout>
        );
    }
}
