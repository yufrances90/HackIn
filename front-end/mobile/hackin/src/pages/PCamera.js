import React, { Component } from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import CCamera from '../components/CCamera';

class PCamera extends Component {
    render() {
        return (
            <View  style={styleSheet.appContainer}>
                <CCamera />
            </View>
        );
    }
}

const styleSheet = StyleSheet.create({
    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default PCamera;