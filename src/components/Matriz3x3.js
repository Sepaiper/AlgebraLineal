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
      valueTen: undefined,
      valueEleven: undefined,
      valueTwelve: undefined,
      valueThirteen: undefined,
      valueFourteen: undefined,
      valueFiveteen: undefined,
      valueSixteen: undefined,
      valueEigthtenn: undefined,
      valueNineteen: undefined,
      resultOne: undefined,
      resultTwo: undefined,
      resultThree: undefined,
      resultFour: undefined,
      resultFive: undefined,
      resultSix: undefined,
      resultSeven: undefined,
      resultEigth: undefined,
      resultNine: undefined,
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
    this.handleOnChangeTen = this.handleOnChangeTen.bind(this)
    this.handleOnChangeEleven = this.handleOnChangeEleven.bind(this)
    this.handleOnChangeTwelve = this.handleOnChangeTwelve.bind(this)
    this.handleOnChangeThirteen = this.handleOnChangeThirteen.bind(this)
    this.handleOnChangeFourteen = this.handleOnChangeFourteen.bind(this)
    this.handleOnChangeFiveteen = this.handleOnChangeFiveteen.bind(this)
    this.handleOnChangeSixteen = this.handleOnChangeSixteen.bind(this)
    this.handleOnChangeEigthtenn = this.handleOnChangeEigthtenn.bind(this)
    this.handleOnChangeNineteen = this.handleOnChangeNineteen.bind(this)
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
  handleOnChangeNine (value) {
    this.updateState('valueNine', value)
  }
  handleOnChangeTen (value) {
    this.updateState('valueTen', value)
  }
  handleOnChangeEleven (value) {
    this.updateState('valueEleven', value)
  }
  handleOnChangeTwelve (value) {
    this.updateState('valueTwelve', value)
  }
  handleOnChangeThirteen (value) {
    this.updateState('valueThirteen', value)
  }
  handleOnChangeFourteen (value) {
    this.updateState('valueFourteen', value)
  }
  handleOnChangeFiveteen (value) {
    this.updateState('valueFiveteen', value)
  }
  handleOnChangeSixteen (value) {
    this.updateState('valueSixteen', value)
  }
  handleOnChangeSeventeen (value) {
    this.updateState('valueSeventeen', value)
  }
  handleOnChangeEigthtenn (value) {
    this.updateState('valueEigthtenn', value)
  }
  handleOnChangeNineteen (value) {
    this.updateState('valueNineteen', value)
  }

  handleOperationSuma () {
    if (this.state.valueOne && this.state.valueTwo && this.state.valueThree &&
      this.state.valueFour && this.state.valueFive && this.state.valueSix && this.state.valueSeven && this.state.valueEigth &&
      this.state.valueNine && this.state.valueTen && this.state.valueEleven && this.state.valueTwelve && this.state.valueThirteen &&
      this.state.valueFourteen && this.state.valueFiveteen && this.state.valueSixteen && this.state.valueEigthtenn && this.state.valueNineteen) {
      const one = parseInt(this.state.valueOne) + parseInt(this.state.valueTen)
      const two = parseInt(this.state.valueTwo) + parseInt(this.state.valueEleven)
      const three = parseInt(this.state.valueThree) + parseInt(this.state.valueTwelve)
      const four = parseInt(this.state.valueFour) + parseInt(this.state.valueThirteen)
      const five = parseInt(this.state.valueFive) + parseInt(this.state.valueFourteen)
      const six = parseInt(this.state.valueSix) + parseInt(this.state.valueFiveteen)
      const seven = parseInt(this.state.valueSeven) + parseInt(this.state.valueSixteen)
      const eigth = parseInt(this.state.valueEigth) + parseInt(this.state.valueEigthtenn)
      const nine = parseInt(this.state.valueNine) + parseInt(this.state.valueNineteen)
      this.updateState('resultOne', one.toString())
      this.updateState('resultTwo', two.toString())
      this.updateState('resultThree', three.toString())
      this.updateState('resultFour', four.toString())
      this.updateState('resultFive', five.toString())
      this.updateState('resultSix', six.toString())
      this.updateState('resultSeven', seven.toString())
      this.updateState('resultEigth', eigth.toString())
      this.updateState('resultNine', nine.toString())
      this.updateState('response', true)
    } else {
      Alert.alert('Ingrese todo los campos de las matrices para la suma')
    }
  }
  handleOperationResta () {
    if (this.state.valueOne && this.state.valueTwo && this.state.valueThree &&
      this.state.valueFour && this.state.valueFive && this.state.valueSix && this.state.valueSeven && this.state.valueEigth &&
      this.state.valueNine && this.state.valueTen && this.state.valueEleven && this.state.valueTwelve && this.state.valueThirteen &&
      this.state.valueFourteen && this.state.valueFiveteen && this.state.valueSixteen && this.state.valueEigthtenn && this.state.valueNineteen) {
      const one = parseInt(this.state.valueOne) - parseInt(this.state.valueTen)
      const two = parseInt(this.state.valueTwo) - parseInt(this.state.valueEleven)
      const three = parseInt(this.state.valueThree) - parseInt(this.state.valueTwelve)
      const four = parseInt(this.state.valueFour) - parseInt(this.state.valueThirteen)
      const five = parseInt(this.state.valueFive) - parseInt(this.state.valueFourteen)
      const six = parseInt(this.state.valueSix) - parseInt(this.state.valueFiveteen)
      const seven = parseInt(this.state.valueSeven) - parseInt(this.state.valueSixteen)
      const eigth = parseInt(this.state.valueEigth) - parseInt(this.state.valueEigthtenn)
      const nine = parseInt(this.state.valueNine) - parseInt(this.state.valueNineteen)
      this.updateState('resultOne', one.toString())
      this.updateState('resultTwo', two.toString())
      this.updateState('resultThree', three.toString())
      this.updateState('resultFour', four.toString())
      this.updateState('resultFive', five.toString())
      this.updateState('resultSix', six.toString())
      this.updateState('resultSeven', seven.toString())
      this.updateState('resultEigth', eigth.toString())
      this.updateState('resultNine', nine.toString())
      this.updateState('response', true)
    } else {
      Alert.alert('Ingrese todo los campos de las matrices para la resta')
    }
  }
  handleOperationMultiplicacion () {
    if (this.state.valueOne && this.state.valueTwo && this.state.valueThree &&
      this.state.valueFour && this.state.valueFive && this.state.valueSix && this.state.valueSeven && this.state.valueEigth &&
      this.state.valueNine && this.state.valueTen && this.state.valueEleven && this.state.valueTwelve && this.state.valueThirteen &&
      this.state.valueFourteen && this.state.valueFiveteen && this.state.valueSixteen && this.state.valueEigthtenn && this.state.valueNineteen) {
      const one = (parseInt(this.state.valueOne) * parseInt(this.state.valueTen)) + (parseInt(this.state.valueTwo) * parseInt(this.state.valueThirteen)) + (parseInt(this.state.valueThree) * parseInt(this.state.valueSixteen))
      const two = (parseInt(this.state.valueOne) * parseInt(this.state.valueEleven)) + (parseInt(this.state.valueTwo) * parseInt(this.state.valueFourteen)) + (parseInt(this.state.valueThree) * parseInt(this.state.valueEigthtenn))
      const three = (parseInt(this.state.valueOne) * parseInt(this.state.valueTwelve)) + (parseInt(this.state.valueTwo) * parseInt(this.state.valueFiveteen)) + (parseInt(this.state.valueThree) * parseInt(this.state.valueNineteen))
      const four = (parseInt(this.state.valueFour) * parseInt(this.state.valueTen)) + (parseInt(this.state.valueFive) * parseInt(this.state.valueThirteen)) + (parseInt(this.state.valueSix) * parseInt(this.state.valueSixteen))
      const five = (parseInt(this.state.valueFour) * parseInt(this.state.valueEleven)) + (parseInt(this.state.valueFive) * parseInt(this.state.valueFourteen)) + (parseInt(this.state.valueSix) * parseInt(this.state.valueEigthtenn))
      const six = (parseInt(this.state.valueFour) * parseInt(this.state.valueTwelve)) + (parseInt(this.state.valueFive) * parseInt(this.state.valueFiveteen)) + (parseInt(this.state.valueSix) * parseInt(this.state.valueNineteen))
      const seven = (parseInt(this.state.valueSeven) * parseInt(this.state.valueTen)) + (parseInt(this.state.valueEigth) * parseInt(this.state.valueThirteen)) + (parseInt(this.state.valueNine) * parseInt(this.state.valueSixteen))
      const eigth = (parseInt(this.state.valueSeven) * parseInt(this.state.valueEleven)) + (parseInt(this.state.valueEigth) * parseInt(this.state.valueFourteen)) + (parseInt(this.state.valueNine) * parseInt(this.state.valueEigthtenn))
      const nine = (parseInt(this.state.valueSeven) * parseInt(this.state.valueTwelve)) + (parseInt(this.state.valueEigth) * parseInt(this.state.valueFiveteen)) + (parseInt(this.state.valueNine) * parseInt(this.state.valueNineteen))
      this.updateState('resultOne', one.toString())
      this.updateState('resultTwo', two.toString())
      this.updateState('resultThree', three.toString())
      this.updateState('resultFour', four.toString())
      this.updateState('resultFive', five.toString())
      this.updateState('resultSix', six.toString())
      this.updateState('resultSeven', seven.toString())
      this.updateState('resultEigth', eigth.toString())
      this.updateState('resultNine', nine.toString())
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
        <View style={styles.containerMatriz}>
          <Text> Matriz B </Text>
          <View style={styles.containerInput}>
            <TextInput
              value={this.state.valueTen}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeTen}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueEleven}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeEleven}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueTwelve}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeTwelve}
              style={styles.input}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              value={this.state.valueThirteen}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeThirteen}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueFourteen}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeFourteen}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueFiveteen}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeFiveteen}
              style={styles.input}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              value={this.state.valueSixteen}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeSixteen}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueEigthtenn}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeEigthtenn}
              style={styles.input}
            />
            <TextInput
              value={this.state.valueNineteen}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeNineteen}
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
              <TextInput
                value={this.state.resultThree}
                keyboardType='numeric'
                style={styles.input}
                editable={false}
              />
            </View>
            <View style={styles.containerInput}>
              <TextInput
                value={this.state.resultFour}
                keyboardType='numeric'
                style={styles.input}
                editable={false}
              />
              <TextInput
                value={this.state.resultFive}
                keyboardType='numeric'
                style={styles.input}
                editable={false}
              />
              <TextInput
                value={this.state.resultSix}
                keyboardType='numeric'
                style={styles.input}
                editable={false}
              />
            </View>
            <View style={styles.containerInput}>
              <TextInput
                value={this.state.resultSeven}
                keyboardType='numeric'
                style={styles.input}
                editable={false}
              />
              <TextInput
                value={this.state.resultEigth}
                keyboardType='numeric'
                style={styles.input}
                editable={false}
              />
              <TextInput
                value={this.state.resultNine}
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
