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
      resultOne: undefined,
      resultTwo: undefined,
      resultThree: undefined,
      resultFour: undefined,
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
    this.handleOperationSuma = this.handleOperationSuma.bind(this)
    this.handleOperationResta = this.handleOperationResta.bind(this)
    this.handleOperationMultiplicacion = this.handleOperationMultiplicacion.bind(this)
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
  handleOperationSuma () {
    if (this.state.valueOne && this.state.valueTwo && this.state.valueThree &&
      this.state.valueFour && this.state.valueFive && this.state.valueSix && this.state.valueSeven && this.state.valueEigth) {
      const one = parseInt(this.state.valueOne) + parseInt(this.state.valueFive)
      const two = parseInt(this.state.valueTwo) + parseInt(this.state.valueSix)
      const three = parseInt(this.state.valueThree) + parseInt(this.state.valueSeven)
      const four = parseInt(this.state.valueFour) + parseInt(this.state.valueEigth)
      this.updateState('resultOne', one.toString())
      this.updateState('resultTwo', two.toString())
      this.updateState('resultThree', three.toString())
      this.updateState('resultFour', four.toString())
      this.updateState('response', true)
    } else {
      Alert.alert('Ingrese todo los campos de las matrices para la suma')
    }
  }
  handleOperationResta () {
    if (this.state.valueOne && this.state.valueTwo && this.state.valueThree &&
      this.state.valueFour && this.state.valueFive && this.state.valueSix && this.state.valueSeven && this.state.valueEigth) {
      const one = parseInt(this.state.valueOne) - parseInt(this.state.valueFive)
      const two = parseInt(this.state.valueTwo) - parseInt(this.state.valueSix)
      const three = parseInt(this.state.valueThree) - parseInt(this.state.valueSeven)
      const four = parseInt(this.state.valueFour) - parseInt(this.state.valueEigth)
      this.updateState('resultOne', one.toString())
      this.updateState('resultTwo', two.toString())
      this.updateState('resultThree', three.toString())
      this.updateState('resultFour', four.toString())
      this.updateState('response', true)
    } else {
      Alert.alert('Ingrese todo los campos de las matrices para la resta')
    }
  }
  handleOperationMultiplicacion () {
    if (this.state.valueOne && this.state.valueTwo && this.state.valueThree &&
      this.state.valueFour && this.state.valueFive && this.state.valueSix && this.state.valueSeven && this.state.valueEigth) {
      const one = (parseInt(this.state.valueOne) * parseInt(this.state.valueFive)) + (parseInt(this.state.valueTwo) * parseInt(this.state.valueSeven))
      const two = (parseInt(this.state.valueOne) * parseInt(this.state.valueSix)) + (parseInt(this.state.valueTwo) * parseInt(this.state.valueEigth))
      const three = (parseInt(this.state.valueThree) * parseInt(this.state.valueFive)) + (parseInt(this.state.valueFour) * parseInt(this.state.valueSeven))
      const four = (parseInt(this.state.valueThree) * parseInt(this.state.valueSix)) + (parseInt(this.state.valueFour) * parseInt(this.state.valueEigth))
      this.updateState('resultOne', one.toString())
      this.updateState('resultTwo', two.toString())
      this.updateState('resultThree', three.toString())
      this.updateState('resultFour', four.toString())
      this.updateState('response', true)
    } else {
      Alert.alert('Ingrese todo los campos de las matrices para la multiplicación')
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
        <View style={styles.containerMatriz}>
          <Text> Matriz B </Text>
          <View style={styles.containerInput}>
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
          </View>
        </View>
        <View style={styles.containerInput}>
          <View style={styles.botton}>
            <Button
              title='Suma'
              onPress={this.handleOperationSuma}
            />
          </View>
          <View style={styles.botton}>
            <Button
              title='Resta'
              onPress={this.handleOperationResta}
            />
          </View>
          <View style={styles.botton}>
            <Button
              title='Multiplicación'
              onPress={this.handleOperationMultiplicacion}
            />
          </View>
        </View>
        {this.state.response && (
          <View style={styles.containerMatriz}>
            <Text> Resultado </Text>
            <View style={styles.containerInput}>
              <TextInput
                value={this.state.resultOne}
                keyboardType='numeric'
                style={styles.input}
                editable={false}
              />
              <TextInput
                value={this.state.resultTwo}
                keyboardType='numeric'
                style={styles.input}
                editable={false}
              />
            </View>
            <View style={styles.containerInput}>
              <TextInput
                value={this.state.resultThree}
                keyboardType='numeric'
                style={styles.input}
                editable={false}
              />
              <TextInput
                value={this.state.resultFour}
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
