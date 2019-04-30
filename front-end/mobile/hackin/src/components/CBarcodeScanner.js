import React, { Component } from 'react';

import {
    View,
    Vibration
} from 'react-native';

import {
    BarCodeScanner
} from 'expo';

import * as utils from '../utils';

class CBarcodeScanner extends Component {

    async onBarcodeScanned({ type, data }) {

        if (!type.startsWith('org.iso.Code128')) {
            return;
        }

        Vibration.vibrate();

        const [hackathonId, userId] = data.split("-");

        const { status } = await utils.getClient().put(
            `/checkInHacker?userId=${userId}&hackathonId=${hackathonId}`
        );

        if (status === 204) {
            alert("Successfully checked in!");
        }
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