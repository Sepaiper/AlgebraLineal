import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

function VerticalSeparator (props) {
  return (
    <View style={[styles.separator, { borderTopColor: '#A44747' }]}>
      <Text>
        {}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1
  }
})

export default VerticalSeparator
