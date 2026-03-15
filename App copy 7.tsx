import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {

  /**
   * -----------------------------
   * BASIC VARIABLES
   * -----------------------------
   */

  const numberLimit = 10;
  const evenLimit = 100;
  const stringValue = "umer";
  const arrayExample = [23, 44, 55, 66];
  const fiftyLimit = 50;

  /**
   * -----------------------------
   * PRINT NUMBERS 1 TO 10
   * -----------------------------
   */

  const printNumbers = () => {
    for (let i = 1; i <= numberLimit; i++) {
      console.log("printNumbers:", i);
    }
  };


    /**
   * -----------------------------
   * CHECK PRIME NUMBER
   * -----------------------------
   */

  const checkPrimeNumber = (number) => {
    let isPrime = true;

    for (let i = 2; i <= number / 2; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    console.log("checkPrimeNumber:", isPrime ? "Prime Number" : "Not Prime Number");
  };

  /**
   * -----------------------------
   * FIND EVEN NUMBERS (METHOD 1)
   * -----------------------------
   */

  const findEvenNumbers = () => {
    for (let i = 1; i <= evenLimit; i++) {
      if (i % 2 === 0) {
        console.log("findEvenNumbers:", i);
      }
    }
  };

  /**
   * -----------------------------
   * FIND EVEN NUMBERS (METHOD 2)
   * -----------------------------
   */

  const findEvenNumbersSecondMethod = () => {
    for (let i = 2; i <= evenLimit; i += 2) {
      console.log("findEvenNumbersSecondMethod:", i);
    }
  };




  /**
   * -----------------------------
   * SUM OF NATURAL NUMBERS 1 TO 10
   * -----------------------------
   */

  const sumOfNaturalNumbers = () => {
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
      sum += i;
    }

    console.log("sumOfNaturalNumbers:", sum);
  };

  /**
   * -----------------------------
   * EVEN NUMBERS FROM 1 TO 50
   * -----------------------------
   */

  const printEvenNumbersToFifty = () => {
    for (let i = 1; i <= fiftyLimit; i++) {
      if (i % 2 === 0) {
        console.log("printEvenNumbersToFifty:", i);
      }
    }
  };

   /**
   * -----------------------------
   * PRINT TABLE OF 2
   * -----------------------------
   */

  const printTableOfTwo = () => {
    for (let i = 1; i <= 10; i++) {
      console.log("printTableOfTwo:", `${i} * 2 = ${i * 2}`);
    }
  };

  /**
   * -----------------------------
   * REMOVE DUPLICATES FROM ARRAY
   * -----------------------------
   */

  const removeDuplicates = () => {
    const numbers = [1, 2, 3, 4, 2, 22, 33, 4, 1];
    const uniqueArray:any = [];

    for (const value of numbers) {
      if (!uniqueArray.includes(value)) {
        uniqueArray.push(value);
      }
    }

    console.log("removeDuplicates:", uniqueArray);
  };
  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})