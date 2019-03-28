/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Navigation} from 'react-native-navigation';

//추가
import Login from './components/Login';

//화면 등록
Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Login', () => Login);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
       root: {
           component: {
               name: 'App'
           }
       }
   })
});

//AppRegistry.registerComponent(appName, () => App);
