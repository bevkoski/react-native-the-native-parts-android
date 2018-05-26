import { requireNativeComponent, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

const CustomCounter = requireNativeComponent('RCTCounterView', {
  name: 'CustomCounter',
  propTypes: {
    numberColor: PropTypes.string,
    ...ViewPropTypes,
  },
})

export default CustomCounter
