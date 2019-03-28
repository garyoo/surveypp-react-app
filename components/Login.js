import React, {Component} from 'react';
import {View} from 'react-native';
import {Navigation} from "react-native-navigation";
type Props = {};
export default class Login extends Component<Props> {
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }
    render() {
        return (
            <View style={[{width: '100%'}]}>
                쨔쓰!
            </View>
        );
    }
}