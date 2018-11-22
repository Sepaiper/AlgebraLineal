import React, { Component } from 'react'
import {
  Text,
  ImageBackground,
  Button,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.handleOnPressBack = this.handleOnPressBack.bind(this)
    this.handleOnPressMatrices2por2 = this.handleOnPressMatrices2por2.bind(this)
    this.handleOnPressMatrices3por3 = this.handleOnPressMatrices3por3.bind(this)
    this.handleOnPressDeterminantes = this.handleOnPressDeterminantes.bind(this)
    this.handleOnPressEcuaciones = this.handleOnPressEcuaciones.bind(this)
  }
  handleOnPressBack () {
    this.props.navigation.navigate('Home')
  }
  handleOnPressMatrices2por2 () {
    this.props.navigation.navigate('Matriz2x2')
  }
  handleOnPressMatrices3por3 () {
    this.props.navigation.navigate('Matriz3x3')
  }
  handleOnPressDeterminantes () {
    this.props.navigation.navigate('Determinantes')
  }
  handleOnPressEcuaciones () {
    this.props.navigation.navigate('Ecuaciones')
  }
  render () {
    return (
      <ImageBackground
        source={require('../../image/fondo.jpg')}
        resizeMode='cover'
        style={{
          width: '100%',
          height: '100%'
        }}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Matrices 2 X 2</Text>
            <TouchableOpacity
              onPress={this.handleOnPressMatrices2por2}
            >
              <Image style={styles.cover} source={require('../../image/2X2.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Matrices 3 X 3</Text>
            <TouchableOpacity
              onPress={this.handleOnPressMatrices3por3}
            >
              <Image style={styles.cover} source={require('../../image/3X3.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Determinantes</Text>
            <TouchableOpacity
              onPress={this.handleOnPressDeterminantes}
            >
              <Image style={styles.cover} source={require('../../image/determinantes.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Sistema de ecuaciones</Text>
            <TouchableOpacity
              onPress={this.handleOnPressEcuaciones}
            >
              <Image style={styles.cover} source={require('../../image/ecuaciones.png')} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Button
          onPress={this.handleOnPressBack}
          title='Regresar'
        />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#44546b'
  },
  cover: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    margin: 10
  },
  rigth: {
    paddingLeft: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    color: '#44546b',
    fontWeight: 'bold'
  },
  button: {
  }
})

export default Menu
