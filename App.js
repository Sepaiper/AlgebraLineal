import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Button
} from 'react-native'
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import Menu from './src/components/Menu'
import Matriz2x2 from './src/components/Matriz2x2'
import Matriz3x3 from './src/components/Matriz3x3'
import Determinantes from './src/components/Determinantes'
import Ecuaciones from './src/components/Ecuaciones'
import DetMatriz2x2 from './src/components/Matriz2x2Det'
import DetMatriz3x3 from './src/components/Matriz3x3Det'

class App extends Component {
  constructor (props) {
    super(props)
    this.handleOnPress = this.handleOnPress.bind(this)
  }
  handleOnPress () {
    this.props.navigation.navigate('Menu')
  }
  render () {
    return (
      <ImageBackground
        source={require('./image/fondo.jpg')}
        resizeMode='cover'
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Image
          source={require('./image/algebralineal.png')}
          style={[styles.image]}
        />
        <Text />
        <Text />
        <Text style={styles.welcome}>Bienvenido Profesor Leonardo Fabio Medina</Text>
        <Button
          onPress={this.handleOnPress}
          title='Ingresar'
        />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  image: {
    width: 200,
    height: 100
  }
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    path: 'Home/',
    navigationOptions: {
      title: 'Inicio'
    }
  },
  Menu: {
    screen: Menu,
    path: 'Menu/',
    navigationOptions: {
      title: 'Menu de opciones',
      gesturesEnabled: true
    }
  },
  Matriz2x2: {
    screen: Matriz2x2,
    path: 'Matriz2x2',
    navigationOptions: {
      title: 'Matriz 2x2',
      gesturesEnabled: true
    }
  },
  Matriz3x3: {
    screen: Matriz3x3,
    path: 'Matriz3x3',
    navigationOptions: {
      title: 'Matriz 3x3',
      gesturesEnabled: true
    }
  },
  Determinantes: {
    screen: Determinantes,
    path: 'Determinantes',
    navigationOptions: {
      title: 'Determinantes',
      gesturesEnabled: true
    }
  },
  Ecuaciones: {
    screen: Ecuaciones,
    path: 'Ecuaciones',
    navigationOptions: {
      title: 'Metodo cramer',
      gesturesEnabled: true
    }
  },
  DetMatriz2x2: {
    screen: DetMatriz2x2,
    path: 'DetMatriz2x2',
    navigationOptions: {
      title: 'Det. Matriz2x2',
      gesturesEnabled: true
    }
  },
  DetMatriz3x3: {
    screen: DetMatriz3x3,
    path: 'DetMatriz3x3',
    navigationOptions: {
      title: 'Det. Matriz3x3',
      gesturesEnabled: true
    }
  }
}, {
  initialRouteName: 'Home',
  cardStyle: 4
})

const DefaultApp = createAppContainer(AppNavigator)
export default DefaultApp
