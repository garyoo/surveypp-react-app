/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import BackgroundGeolocation from "react-native-background-geolocation";
import {Navigation} from 'react-native-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    _PushLogin() {
        /*
        let push = this.props.navigator.push({
            screen: 'Login'
        });
        */
    }
    render() {
        return (
          <View style={styles.container}>
              <View style={[{width: '50%', textAlign: 'center'}]}>
              <Text></Text>
              <Button
                  title="로그인"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                  containerViewStyle={{width: "100%"}}
                  onPress={this._PushLogin.bind(this)}
              />
              </View>
          </View>
              /*
            <Input
                placeholder='BASIC INPUT'
            />

            <Input
                placeholder='INPUT WITH ICON'
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            />

            <Input
                placeholder='INPUT WITH CUSTOM ICON'
                leftIcon={
                  <Icon
                      name='user'
                      size={24}
                      color='black'
                  />
                }
            />

            <Input
                placeholder='INPUT WITH SHAKING EFFECT'
                shake={true}
            />

            <Input
                placeholder='INPUT WITH ERROR MESSAGE'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
            />
            */
        );
      }

    /*
    componentWillMount() {
        ////
        // 1.  Wire up event-listeners
        //

        // This handler fires whenever bgGeo receives a location update.
        BackgroundGeolocation.onLocation(this.onLocation, this.onError);

        // This handler fires when movement states changes (stationary->moving; moving->stationary)
        BackgroundGeolocation.onMotionChange(this.onMotionChange);

        // This event fires when a change in motion activity is detected
        BackgroundGeolocation.onActivityChange(this.onActivityChange);

        // This event fires when the user toggles location-services authorization
        BackgroundGeolocation.onProviderChange(this.onProviderChange);

        ////
        // 2.  Execute #ready method (required)
        //
        BackgroundGeolocation.ready({
            // Geolocation Config
            desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
            distanceFilter: 10,
            // Activity Recognition
            stopTimeout: 1,
            // Application config
            debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
            logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
            stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
            startOnBoot: true,        // <-- Auto start tracking when device is powered-up.
            // HTTP / SQLite config
            url: 'http://yourserver.com/locations',
            batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
            autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
            headers: {              // <-- Optional HTTP headers
                "X-FOO": "bar"
            },
            params: {               // <-- Optional HTTP params
                "auth_token": "maybe_your_server_authenticates_via_token_YES?"
            }
        }, (state) => {
            console.log("- BackgroundGeolocation is configured and ready: ", state.enabled);

            if (!state.enabled) {
                ////
                // 3. Start tracking!
                //
                BackgroundGeolocation.start(function() {
                    console.log("- Start success");
                });
            }
        });
    }

    componentWillUnmount() {
        BackgroundGeolocation.removeListeners();
    }
    onLocation(location) {
        console.log('[location] -', location);
    }
    onError(error) {
        console.warn('[location] ERROR -', error);
    }
    onActivityChange(event) {
        console.log('[activitychange] -', event);  // eg: 'on_foot', 'still', 'in_vehicle'
    }
    onProviderChange(provider) {
        console.log('[providerchange] -', provider.enabled, provider.status);
    }
    onMotionChange(event) {
        console.log('[motionchange] -', event.isMoving, event.location);
    }
    */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
