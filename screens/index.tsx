
//import React, {Component, ComponentClass} from 'react';
import {Navigation} from "react-native-navigation";
import {AppRegistry} from 'react-native';
import Drivers from '../screens/Drivers'
import Login from '../screens/Login'


export function registerScreens () {
    //AppRegistry.registerComponent('drivers', () => Drivers);
    //AppRegistry.registerComponent('login', () => Login);

    Navigation.registerComponent('drivers', () => Drivers);
    Navigation.registerComponent('login', () => Login);
}