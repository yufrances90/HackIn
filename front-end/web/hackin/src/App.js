import React, { Component } from 'react';
import './App.css';

import * as utils from './utils';

class App extends Component {

    state = {
        msg: ''
    }

    async componentDidMount() {

        const apiClient = utils.getClient();
        
        const response = await apiClient.get("/");

        console.log(response);

        this.setState({
            msg: response.data
        });
    }

    render() {

        const { msg } = this.state;

        return (
            <div className="App">
                <h1>
                    { msg }
                </h1>
            </div>
        );
    }
}

export default App;
