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
      valueOne: '1',
      valueTwo: '1',
      valueThree: '1',
      valueFour: '0',
      valueFive: '1',
      valueSix: '1',
      valueSeven: '1',
      valueEigth: '0',
      valueNine: '1',
      valueTen: '1',
      valueEleven: '1',
      valueTwelve: '0',
      resultOne: '1',
      resultTwo: '1',
      resultThree: '1',
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
    this.handleOperationCleaner = this.handleOperationCleaner.bind(this)
    this.handleOperationCal = this.handleOperationCal.bind(this)
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

  handleOperationCal () {
    if (this.state.valueOne && this.state.valueTwo && this.state.valueThree &&
      this.state.valueFour && this.state.valueFive && this.state.valueSix && this.state.valueSeven && this.state.valueEigth &&
      this.state.valueNine && this.state.valueTen && this.state.valueEleven && this.state.valueTwelve) {
      const one = (parseInt(this.state.valueOne) * ((parseInt(this.state.valueSix) * parseInt(this.state.valueEleven)) - (parseInt(this.state.valueTen) * parseInt(this.state.valueSeven))))
      const two = (parseInt(this.state.valueTwo) * ((parseInt(this.state.valueFive) * parseInt(this.state.valueEleven)) - (parseInt(this.state.valueNine) * parseInt(this.state.valueSeven))))
      const three = (parseInt(this.state.valueThree) * ((parseInt(this.state.valueFive) * parseInt(this.state.valueTen)) - (parseInt(this.state.valueNine) * parseInt(this.state.valueSix))))
      const DetA = one - two + three
      const four = (parseInt(this.state.valueFour) * ((parseInt(this.state.valueSix) * parseInt(this.state.valueEleven)) - (parseInt(this.state.valueTen) * parseInt(this.state.valueSeven))))
      const five = (parseInt(this.state.valueTwo) * ((parseInt(this.state.valueEigth) * parseInt(this.state.valueEleven)) - (parseInt(this.state.valueTwelve) * parseInt(this.state.valueSeven))))
      const six = (parseInt(this.state.valueThree) * ((parseInt(this.state.valueEigth) * parseInt(this.state.valueTen)) - (parseInt(this.state.valueTwelve) * parseInt(this.state.valueSix))))
      const DetB = four - five + six
      const seven = (parseInt(this.state.valueOne) * ((parseInt(this.state.valueEigth) * parseInt(this.state.valueEleven)) - (parseInt(this.state.valueTwelve) * parseInt(this.state.valueSeven))))
      const eight = (parseInt(this.state.valueFour) * ((parseInt(this.state.valueFive) * parseInt(this.state.valueEleven)) - (parseInt(this.state.valueNine) * parseInt(this.state.valueSeven))))
      const nine = (parseInt(this.state.valueThree) * ((parseInt(this.state.valueFive) * parseInt(this.state.valueTwelve)) - (parseInt(this.state.valueNine) * parseInt(this.state.valueEigth))))
      const DetC = seven - eight + nine
      const ten = (parseInt(this.state.valueOne) * ((parseInt(this.state.valueSix) * parseInt(this.state.valueTwelve)) - (parseInt(this.state.valueTen) * parseInt(this.state.valueEigth))))
      const eleven = (parseInt(this.state.valueTwo) * ((parseInt(this.state.valueFive) * parseInt(this.state.valueTwelve)) - (parseInt(this.state.valueNine) * parseInt(this.state.valueEigth))))
      const twelve = (parseInt(this.state.valueFour) * ((parseInt(this.state.valueFive) * parseInt(this.state.valueTen)) - (parseInt(this.state.valueNine) * parseInt(this.state.valueSix))))
      const DetD = ten - eleven + twelve
      console.log(DetA)
      console.log(DetB)
      console.log(DetC)
      console.log(DetD)
      const x = DetB / DetA
      const y = DetC / DetA
      const z = DetD / DetA
      this.updateState('resultOne', x.toString())
      this.updateState('resultTwo', y.toString())
      this.updateState('resultThree', z.toString())
      this.updateState('response', true)
    } else {
      Alert.alert('Ingrese todo los campos para hallar las incognitas')
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
            <Text>X</Text>
            <TextInput
              value={this.state.valueTwo}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeTwo}
              style={styles.input}
            />
            <Text>Y</Text>
            <TextInput
              value={this.state.valueThree}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeThree}
              style={styles.input}
            />
            <Text>Z</Text>
            <Text>{' '}</Text>
            <Text>=</Text>
            <TextInput
              value={this.state.valueFour}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeFour}
              style={styles.input}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              value={this.state.valueFive}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeFive}
              style={styles.input}
            />
            <Text>X</Text>
            <TextInput
              value={this.state.valueSix}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeSix}
              style={styles.input}
            />
            <Text>Y</Text>
            <TextInput
              value={this.state.valueSeven}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeSeven}
              style={styles.input}
            />
            <Text>Z</Text>
            <Text>{' '}</Text>
            <Text>=</Text>
            <TextInput
              value={this.state.valueEigth}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeEigth}
              style={styles.input}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              value={this.state.valueNine}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeNine}
              style={styles.input}
            />
            <Text>X</Text>
            <TextInput
              value={this.state.valueTen}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeTen}
              style={styles.input}
            />
            <Text>Y</Text>
            <TextInput
              value={this.state.valueEleven}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeEleven}
              style={styles.input}
            />
            <Text>Z</Text>
            <Text>{' '}</Text>
            <Text>=</Text>
            <TextInput
              value={this.state.valueTwelve}
              keyboardType='numeric'
              onChangeText={this.handleOnChangeTwelve}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.botton}>
          <Button
            title='Calular'
            onPress={this.handleOperationCal}
          />
        </View>
        {this.state.response && (
          <View {...styles.containerMatriz}>
            <Text> Resultado</Text>
            <View style={styles.containerResultado}>
              <View style={styles.containerInput}>
                <Text>X = </Text>
                <TextInput
                  value={this.state.resultOne}
                  keyboardType='numeric'
                  style={styles.input}
                  editable={false}
                />
                <Text>Y = </Text>
                <TextInput
                  value={this.state.resultTwo}
                  keyboardType='numeric'
                  style={styles.input}
                  editable={false}
                />
                <Text>Z = </Text>
                <TextInput
                  value={this.state.resultThree}
                  keyboardType='numeric'
                  style={styles.input}
                  editable={false}
                />
              </View>
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
  },
  containerResultado: {
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default Matriz2x2
