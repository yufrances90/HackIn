import React, { Component } from 'react';

import {
    View,
    Text
} from 'react-native';

import * as utils from '../utils';

class PHome extends Component {

    state = {
        msg: ''
    }

    async componentDidMount() {

        const apiClient = utils.getClient();
        
        const response = await apiClient.get("/");

        this.setState({
            msg: response.data
        });
    }

    render() {
        return (
            <View>
                <Text>
                    Hello from PHome
                </Text>
            </View>
        )
    }
}

export default PHome;