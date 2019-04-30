import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

import CBarcodeScanner from '././src/components/CBarcodeScanner';

import * as utils from './src/utils';

export default class App extends React.Component {

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

        const { msg } = this.state;

        return (
            <View style={styles.container}>
                <CBarcodeScanner />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
