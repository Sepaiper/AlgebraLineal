import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Button,
  Image
} from 'react-native'

class Determinantes extends Component {
  constructor (props) {
    super(props)
    this.state = this.initialState
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnChangeOther = this.handleOnChangeOther.bind(this)
  }
  updateState (key, value) {
    this.setState({
      [key]: value
    })
  }
  handleOnChange () {
    this.props.navigation.navigate('DetMatriz2x2')
  }
  handleOnChangeOther () {
    this.props.navigation.navigate('DetMatriz3x3')
  }
  render () {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.cover} source={require('../../image/determinantes.png')} />
        </View>
        <View style={[styles.containerButton]}>
          <View style={styles.botton}>
            <Button
              title='Matriz 2 x 2'
              onPress={this.handleOnChange}
            />
          </View>
          <View style={styles.botton}>
            <Button
              title='Matriz 3 x 3'
              onPress={this.handleOnChangeOther}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerButton: {
    flexDirection: 'row'
  },
  botton: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  cover: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    margin: 10
  }
})

export default Determinantes
