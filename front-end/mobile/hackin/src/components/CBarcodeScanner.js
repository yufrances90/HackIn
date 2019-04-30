import React, { Component } from 'react';

import {
    View,
    Vibration,
    StyleSheet,
    Text
} from 'react-native';

import {
    BarCodeScanner,
    Permissions
} from 'expo';

import * as utils from '../utils';

class CBarcodeScanner extends Component {

    state = {
        hasCameraPermission: null
    }

    async componentDidMount() {

        const { status } = await Permissions.askAsync(Permissions.CAMERA);

        this.setState({
            hasCameraPermission: status === 'granted'
        })
    }

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

        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return (
                <Text>
                    Requesting for camera permission.
                </Text>
            );
        }

        if (hasCameraPermission === false) {
            return (
                <Text>
                    No access to camera.
                </Text>
            );
        }

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