import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * --------------------------------
 * REVERSE STRING AND COUNT CHARACTERS
 * --------------------------------
 */

const textValue = 'umer majeed';

function reverseAndCountChars() {

  let reversed = '';
  let charCount = {};

  for (let i = textValue.length - 1; i >= 0; i--) {

    const char = textValue[i];

    reversed += char;

    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }

  }

  console.log('reverseAndCountChars_reversed:', reversed);
  console.log('reverseAndCountChars_counts:', charCount);

  return { reversed, charCount };
}


/**
 * --------------------------------
 * REVERSE ARRAY
 * --------------------------------
 */

const numbersArray = [1, 2, 3, 4];

function reverseArray() {

  reverseAndCountChars();

  const result = [];

  for (let i = numbersArray.length - 1; i >= 0; i--) {
    result.push(numbersArray[i]);
  }

  console.log('reverseArray_result:', result);

  return result;
}


/**
 * --------------------------------
 * FIND MAX AND MIN VALUE IN ARRAY
 * --------------------------------
 */

function findMaxMin() {

  const arrayValues = [10, 45, 2, 99, 23];

  let max = arrayValues[0];
  let min = arrayValues[0];

  for (let i = 1; i < arrayValues.length; i++) {

    if (arrayValues[i] > max) {
      max = arrayValues[i];
    }

    if (arrayValues[i] < min) {
      min = arrayValues[i];
    }

  }

  console.log('findMaxMin_max:', max);
  console.log('findMaxMin_min:', min);
}



/**
 * --------------------------------
 * FIND COMMON ELEMENTS BETWEEN TWO ARRAYS
 * --------------------------------
 */

const arrayOne = [1, 2, 3, 4];
const arrayTwo = [3, 4, 5, 6];

function findCommonElements() {

  const result = [];

  for (let i = 0; i < arrayOne.length; i++) {

    for (let j = 0; j < arrayTwo.length; j++) {

      if (arrayOne[i] === arrayTwo[j]) {

        result.push(arrayOne[i]);
        break;

      }

    }

  }

  console.log('findCommonElements:', result);

  return result;
}



/**
 * --------------------------------
 * FIND DUPLICATE ELEMENTS IN ONE ARRAY
 * --------------------------------
 */

const duplicateArray = [1, 2, 3, 4, 2, 22, 33, 4, 1];

function findDuplicateElements() {

  const result = [];

  for (let i = 0; i < duplicateArray.length; i++) {

    for (let j = i + 1; j < duplicateArray.length; j++) {

      if (duplicateArray[i] === duplicateArray[j]) {

        result.push(duplicateArray[i]);

      }

    }

  }

  console.log('findDuplicateElements:', result);

}



/**
 * --------------------------------
 * MULTIPLY ARRAY NUMBERS
 * --------------------------------
 */

const simpleNumbers = [1, 2, 3, 4, 5];

const multiplyNumbers = () => {

  for (let i = 0; i < simpleNumbers.length; i++) {

    console.log('multiplyNumbers:', simpleNumbers[i] * 2);

  }

};



/**
 * --------------------------------
 * MULTIPLY NUMBERS GREATER THAN 4
 * --------------------------------
 */

const checkArray = [2, 3, 4, 5, 6, 7, 8, 9];

const multiplyGreaterThanFour = () => {

  const result = [];

  for (let i = 0; i < checkArray.length; i++) {

    if (checkArray[i] > 4) {

      result.push(checkArray[i] * 2);

    }

  }

  console.log('multiplyGreaterThanFour:', result);

};



/**
 * --------------------------------
 * STAR PATTERN
 * --------------------------------
 */

const printStarPattern = () => {

  const n = 5;

  for (let i = 1; i <= n; i++) {

    let row = '';

    for (let s = 1; s <= n - i; s++) {
      row += ' ';
    }

    for (let j = 1; j <= i; j++) {
      row += '*';
    }

    console.log(row);

  }

};



/**
 * --------------------------------
 * BUTTON ACTION
 * --------------------------------
 */

const handlePress = () => {

  reverseArray();
  findMaxMin();
  findCommonElements();
  findDuplicateElements();
  multiplyNumbers();
  multiplyGreaterThanFour();
  printStarPattern();

};



/**
 * --------------------------------
 * APP COMPONENT
 * --------------------------------
 */

const App = () => {

  return (

    <View style={styles.container}>

      <TouchableOpacity
        onPress={handlePress}
        style={styles.button}
      >

        <Text>Run Algorithms</Text>

      </TouchableOpacity>

    </View>

  );

};

export default App;



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'red',
  },

  button: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    padding: 12,
  },

});