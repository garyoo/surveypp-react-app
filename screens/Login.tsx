import React, {Component} from 'react';
import {View} from 'react-native';
import {Navigation} from "react-native-navigation";
import {Text} from "react-native-elements";

interface Props {
    componentId: string
}


export default class Login extends Component {

    constructor (props: Props) {
        super(props);
    }

    componentDidAppear() {
        this.setState({ text: 'componentDidAppear' });
    }

    componentDidDisappear() {
        //alert('componentDidDisappear');
    }


    componentWillUnmount() {
        //alert('componentWillUnmount');
    }

    render() {
        return (
            <View style={[{width: '100%'}]}>
                <Text>쨔쓰!</Text>
            </View>
        );
    }
}