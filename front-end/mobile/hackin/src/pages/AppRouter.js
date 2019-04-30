import { 
    createStackNavigator, 
    createAppContainer 
} from "react-navigation";

import PHome from './PHome';
import PCamera from './PCamera';

const AppNavigator = createStackNavigator({
    Home: {
        screen: PHome
    },
    Camera: {
        screen: PCamera
    }
}, {
    initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);