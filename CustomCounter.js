import React from 'react'
import { requireNativeComponent, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

const RCTCounterView = requireNativeComponent('RCTCounterView', {
  name: 'CustomCounter',
  propTypes: {
    numberColor: PropTypes.string,
    ...ViewPropTypes,
  },
})

export default RCTCounterView
