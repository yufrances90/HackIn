import React, { Component } from 'react';
import './App.css';

import * as api from './utils/api';

class App extends Component {

    componentDidMount() {
        api.testConnection();
    }

    render() {
        return (
            <div className="App">
                <h1>
                    Hello World
                </h1>
            </div>
        );
    }
}

export default App;
