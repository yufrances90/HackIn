import React, { Component } from 'react';

import {
    View,
    Text, 
    StyleSheet,
    Vibration
} from 'react-native';

import {
    Camera,
    BarCodeScanner,
    Permissions
} from 'expo';

class CBarcodeScanner extends Component {

    state = {
        data: null
    }

    async onBarcodeScanned({ type, data }) {

        if (!type.startsWith('org.iso.Code128')) {
            return;
        }

        Vibration.vibrate();

        alert(`Bar code with type ${type} and data ${data} has been scanned!`);

        await this.setState({
            data
        });

        alert(data);
    }


    render() {

        return (
            <View>
                <BarCodeScanner 
                    onBarCodeScanned={this.onBarcodeScanned.bind(this)}
                    style={{ height: 400, width: 400 }}
                />
            </View>
        );
    }
}

export default CBarcodeScanner;