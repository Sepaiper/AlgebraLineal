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
      valueFive: undefined,
      valueSix: undefined,
      valueSeven: undefined,
      valueEigth: undefined,
      valueNine: undefined,
      result: undefined,
      response: false
    }
    this.state = this.initialState
    this.handleOnChangeOne = this.handleOnChangeOne.bind(this)
    this.handleOnChangeTwo = this.handleOnChangeTwo.bind(this)
    this.handleOnChangeThree = this.handleOnChangeThree.bind(this)
    this.handleOnChangeFour = this.handleOnChangeFour.bind(this)
    this.handleOnChangeFive = this.handleOnChangeFive.bind(this)
    this.handleOnChangeSix = this.handleOnChangeSix.bind(this)
    this.handleOnChangeSeven = this.handleOnChangeSeven.bind(this)
    this.handleOnChangeEigth = this.handleOnChangeEigth.bind(this)
    this.handleOnChangeNine = this.handleOnChangeNine.bind(this)
    this.handleOperationCleaner = this.handleOperationCleaner.bind(this)
    this.handleOperationDet = this.handleOperationDet.bind(this)
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
  handleOnChangeFive (value) {
    this.updateState('valueFive', value)
  }
  handleOnChangeSix (value) {
    this.updateState('valueSix', value)
  }
  handleOnChangeSeven (value) {
    this.updateState('valueSeven', value)
  }
  handleOnChangeEigth (value) {
    this.updateState('valueEigth', value)
  }
  handleOnChangeNine (value) {
    this.updateState('valueNine', value)
  }

  handleOperationDet () {
    if (this.state.valueOne && this.state.valueTwo && this.state.valueThree &&
      this.state.valueFour && this.state.valueFive && this.state.valueSix && this.state.valueSeven && this.state.valueEigth &&
      this.state.valueNine) {
      const one = (parseInt(this.state.valueOne) * ((parseInt(this.state.valueFive) * parseInt(this.state.valueNine)) - (parseInt(this.state.valueEigth) * parseInt(this.state.valueSix))))
      const two = (parseInt(this.state.valueTwo) * ((parseInt(this.state.valueFour) * parseInt(this.state.valueNine)) - (parseInt(this.state.valueSeven) * parseInt(this.state.valueSix))))
      const three = (parseInt(this.state.valueThree) * ((parseInt(this.state.valueFour) * parseInt(this.state.valueEigth)) - (parseInt(this.state.valueSeven) * parseInt(this.state.valueFive))))
      const result = one - two + three
      this.updateState('result', result.toString())
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
            <TextInput
              value={this.state.valueThree}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeThree}
              style={styles.input}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              value={this.state.valueFour}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeFour}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueFive}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeFive}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueSix}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeSix}
              style={styles.input}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              value={this.state.valueSeven}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeSeven}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueEigth}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeEigth}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueNine}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeNine}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.botton}>
          <Button
            title='Determinante'
            onPress={this.handleOperationDet}
          />
        </View>
        {this.state.response && (
          <View style={styles.containerMatriz}>
            <Text> Determinante de la matriz A</Text>
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
    width: 40,
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
