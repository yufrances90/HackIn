import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import CBarcodeScanner from './CBarcodeScanner';

class CCamera extends Component {

    render() {
        return (
            <View>
                <Text style={styleSheet.title}>
                    HackMunnity
                </Text>
                <CBarcodeScanner />
            </View>
        );
    }
}

const styleSheet = StyleSheet.create({
    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 30
    }
});

export default CCamera;