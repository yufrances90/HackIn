import React, { Component } from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import CHome from '../components/CHome';

class PHome extends Component {

    componentDidMount() {
        
        const that = this;

        setTimeout(() => {
            that.props.navigation.navigate('Camera');
        }, 2500);
    }

    render() {
        return (
            <View style={styleSheet.appContainer}>
                <CHome />
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

export default PHome;