import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { 
    MaterialCommunityIcons
} from '@expo/vector-icons';

class CHome extends Component {

    render() {
        return (
            <View style={styleSheet.appContainer}>
                <MaterialCommunityIcons 
                    name="arch"
                    size={40} 
                    color="red"
                />
                <Text style={styleSheet.title}>
                    HackMMunity
                </Text>
                <Text style={styleSheet.subTitle}>
                    By Frances Yu
                </Text>
            </View>
        )
    }
}

const styleSheet = StyleSheet.create({
    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: "800"
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "400"
    }
});

export default CHome;