import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {



  /**
   * 
   * -----------------------------
   * REVERSE NUMBERS FROM 20 TO 1
   * -----------------------------
   */

  const reverseNumbers = () => {
    let result = "";

    for (let i = 20; i >= 1; i--) {
      result += i + ", ";
    }

    console.log("reverseNumbers:", result);
  };
  /**
 * -----------------------------
 * SEPARATE STRING USING FOR...OF
 * -----------------------------
 */

  const separateString = () => {
    let result = "";
    for (const char of stringValue) {
      result += char + " ";
    }
    console.log("separateString:", result);
  };

  /**
   * -----------------------------
   * WORD COUNT FUNCTION
   * -----------------------------
   */

  const countWords = (text) => {
    const count = text.split(" ").length;
    console.log("countWords:", count);
    return count;
  };

  countWords("welcome to umer learning react native");



  /**
   * -----------------------------
   * STATE DATA EXAMPLE
   * -----------------------------
   */

  const [data] = useState([
    { title: "item1", price: 200, amount: 300, totalOnRent: 110 },
    { title: "item2", price: 230, amount: 400, totalOnRent: 200 },
    { title: "item3", price: 230, amount: 300, totalOnRent: 120 },
  ]);

  /**
   * CALCULATE TOTAL AMOUNT AND RENT
   */

  const calculateTotals = () => {
    let totalRent = 0;
    let totalAmount = 0;

    for (const item of data) {
      totalRent += item.totalOnRent;
      totalAmount += item.amount;
    }

    console.log("calculateTotals: Total Rent:", totalRent);
    console.log("calculateTotals: Total Amount:", totalAmount);
    console.log("calculateTotals: Balance:", totalAmount - totalRent);
  };

  /**
   * -----------------------------
   * FIND COMMON ELEMENTS BETWEEN TWO ARRAYS
   * -----------------------------
   */

  const arrayOne = [1, 2, 3, 4];
  const arrayTwo = [3, 4, 5, 6];

  const getCommonElements = () => {
    const result = [];

    for (const value of arrayOne) {
      if (arrayTwo.includes(value)) {
        result.push(value);
      }
    }

    console.log("getCommonElements:", result);
  };





  /**
   * -----------------------------
   * CALLBACK FUNCTION EXAMPLE
   * -----------------------------
   */

  const addNumbers = (a, b) => a + b;
  const subtractNumbers = (a, b) => a - b;

  const calculate = (num1, num2, callback) => {
    console.log("calculate:", callback(num1, num2));
  };


  /**
   * -----------------------------
   * MAP EXAMPLE (SQUARE NUMBERS)
   * -----------------------------
   */

  const numbers = [1, 2, 3, 4, 6];
  const squareNumbers = numbers.map((num) => num ** 2);
  console.log("mapSquareNumbers:", squareNumbers);

  /**
   * -----------------------------
   * FILTER EXAMPLE
   * -----------------------------
   */

  const filterArray = [10, 12, 13, 16, 19, 20];
  const filteredNumbers = filterArray.filter((num) => num % 6 !== 0);
  console.log("filterNumbers:", filteredNumbers);

  /**
   * -----------------------------
   * FIND EXAMPLE
   * -----------------------------
   */

  const foundNumber = filterArray.find((num) => num >= 12);
  console.log("findNumber:", foundNumber);

  /**
   * -----------------------------
   * REDUCE EXAMPLE (SUM)
   * -----------------------------
   */

  const reduceNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const total = reduceNumbers.reduce((sum, num) => sum + num, 0);
  console.log("reduceTotal:", total);

  /**
   * -----------------------------
   * PROMISE EXAMPLE
   * -----------------------------
   */

  const isLoggedIn = false;

  const myPromise = new Promise((resolve, reject) => {

    if (isLoggedIn) {
      resolve({ status: 1, message: "Promise Resolved" });
    } else {
      reject({ status: 0, message: "Promise Rejected" });
    }

  });

  myPromise
    .then((res) => console.log("myPromise Success:", res))
    .catch((err) => console.log("myPromise Error:", err));

  /**
   * -----------------------------
   * PROMISE CHAINING
   * -----------------------------
   */

  const promiseChaining = (task, time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("promiseChaining Task:", task);
        resolve();
      }, time);
    });
  };

  useEffect(() => {
    promiseChaining(1, 1000)
      .then(() => promiseChaining(2, 2000))
      .then(() => promiseChaining(3, 3000));
  }, []);

  /**
   * -----------------------------
   * UI
   * -----------------------------
   */

  return (
    <View style={styles.container}>
      <Text>React Native Practice</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});