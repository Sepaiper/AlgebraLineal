import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Alert
} from 'react-native'

class Matriz2x2 extends Component {
  constructor (props) {
    super(props)
    this.initialState = {
      valueOne: undefined,
      valueTwo: undefined,
      valueThree: undefined,
      valueFour: undefined,
      result: undefined,
      response: false
    }
    this.state = this.initialState
    this.handleOnChangeOne = this.handleOnChangeOne.bind(this)
    this.handleOnChangeTwo = this.handleOnChangeTwo.bind(this)
    this.handleOnChangeThree = this.handleOnChangeThree.bind(this)
    this.handleOnChangeFour = this.handleOnChangeFour.bind(this)
    this.handleOperationDet = this.handleOperationDet.bind(this)
    this.handleOperationCleaner = this.handleOperationCleaner.bind(this)
  }
  updateState (key, value) {
    this.setState({
      [key]: value
    })
  }
  handleOnChangeOne (value) {
    this.updateState('valueOne', value)
  }
  handleOnChangeTwo (value) {
    this.updateState('valueTwo', value)
  }
  handleOnChangeThree (value) {
    this.updateState('valueThree', value)
  }
  handleOnChangeFour (value) {
    this.updateState('valueFour', value)
  }

  handleOperationDet () {
    if (this.state.valueOne && this.state.valueTwo && this.state.valueThree && this.state.valueFour) {
      const one = (parseInt(this.state.valueOne) * parseInt(this.state.valueFour)) - (parseInt(this.state.valueThree) * parseInt(this.state.valueTwo))
      this.updateState('result', one.toString())
      this.updateState('response', true)
    } else {
      Alert.alert('Ingrese todo los campos de las matrices para hallar el determinante')
    }
  }
  handleOperationCleaner () {
    this.updateState('response', false)
  }
  render () {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerScroll}
      >
        <View style={styles.containerMatriz}>
          <Text> Matriz A </Text>
          <View style={styles.containerInput}>
            <TextInput
              value={this.state.valueOne}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeOne}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueTwo}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeTwo}
              style={styles.input}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              value={this.state.valueThree}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeThree}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueFour}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeFour}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <View style={styles.botton}>
            <Button
              title='Determinante'
              onPress={this.handleOperationDet}
            />
          </View>
        </View>
        {this.state.response && (
          <View style={styles.containerMatriz}>
            <Text> Determinante de la matriz A </Text>
            <View style={styles.containerInput}>
              <TextInput
                value={this.state.result}
                keyboardType='numeric'
                style={styles.input}
                editable={false}
              />
            </View>
            <View>
              <Button
                title='Limpiar'
                onPress={this.handleOperationCleaner}
              />
            </View>
          </View>
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerScroll: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInput: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  input: {
    width: 140,
    height: 40,
    borderWidth: 1,
    marginVertical: 10,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 7
  },
  containerMatriz: {
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingVertical: 10,
    alignItems: 'center'
  },
  botton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10
  }
})

export default Matriz2x2
