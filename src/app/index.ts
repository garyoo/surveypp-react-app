import {Layout, LayoutComponent, LayoutRoot, Navigation} from 'react-native-navigation'
import {registerScreens} from '../../screens'
const {name} = require('../../app.json');

registerScreens();
console.log('register End');
Navigation.events().registerAppLaunchedListener(async () => {
    console.log('launched');

    let loginLayout: LayoutRoot = {
        root: {
            stack: {
                id: 'loginStack',
                children: [
                    {component: {name: 'drivers'}},
                    {component: {name: 'login'}}
                ]
            }
        }
    };
    await Navigation.setRoot(loginLayout);
});