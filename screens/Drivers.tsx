import React, {Component} from 'react';
import {GestureResponderEvent, View} from 'react-native';
import {Navigation} from "react-native-navigation";
import {Button, Text} from "react-native-elements";

interface Props {
    componentId: string
}


export default class Drivers extends React.Component {

    constructor(props: Props) {
        super(props);
        this.state = {
            componentId: props.componentId
        }
    }

    componentDidAppear() {
        this.setState({ text: 'componentDidAppear' });
    }

    componentDidDisappear() {
        alert('componentDidDisappear');
    }


    componentWillUnmount() {
        alert('componentWillUnmount');
    }

    _push (): void {

    }

    render() {
        return (
            <View style={[{width: '100%'}]}>
                <Button onPress={() => {this._push()}}/>
            </View>
        );
    }
}