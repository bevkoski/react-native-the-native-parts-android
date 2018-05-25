import React from 'react'
import { requireNativeComponent } from 'react-native'

const RCTCounterView = requireNativeComponent('RCTCounterView', null)

export default class extends React.Component {
  render() {
    return <RCTCounterView {...this.props} />
  }
}
