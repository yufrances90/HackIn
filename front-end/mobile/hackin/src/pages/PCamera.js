import React, { Component } from 'react';

import {
    View,
    Text
} from 'react-native';

import CBarcodeScanner from '../components/CBarcodeScanner';

class PCamera extends Component {
    render() {
        return (
            <View>
                <Text>
                    <CBarcodeScanner />
                </Text>
            </View>
        );
    }
}

export default PCamera;