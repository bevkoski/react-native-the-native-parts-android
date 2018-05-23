import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Alert,
  NativeModules,
  DeviceEventEmitter,
} from 'react-native'

class Main extends React.Component {

  _showToast = () => NativeModules.Toast.show(
    'Here is a native toast!',
    NativeModules.Toast.LENGTH_SHORT
  )

  _triggerAlert = () => NativeModules.Alert.trigger()

  _showAlert = message => Alert.alert(message)

  componentWillMount() {
    DeviceEventEmitter.addListener(NativeModules.Alert.EVENT_SHOW, this._showAlert)
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener(NativeModules.Alert.EVENT_SHOW, this._showAlert)
  }

  render() {
    return (
      <View style={styles.container} background={TouchableNativeFeedback.SelectableBackground()}>
        <Text style={styles.hello}>
          Hello from the React Native side!
        </Text>
        <TouchableNativeFeedback onPress={this._showToast}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>SHOW NATIVE TOAST FROM REACT</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this._triggerAlert}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TRIGGER REACT ALERT FROM NATIVE</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    fontSize: 26,
    fontFamily: 'sans-serif-condensed',
    color: 'black',
    textAlign: 'center',
    margin: 15,
  },
  button: {
    padding: 20,
    margin: 15,
    backgroundColor: 'lightgray',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
    color: 'black',
  }
})

AppRegistry.registerComponent('TheNativeParts', () => Main)