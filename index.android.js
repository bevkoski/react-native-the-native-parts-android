import React from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>
          Hello from the React Native side!
        </Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 26,
    fontFamily: 'sans-serif-condensed',
    color: 'black',
    textAlign: 'center',
    margin: 10,
  }
})

AppRegistry.registerComponent('TheNativeParts', () => Main)