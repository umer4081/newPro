import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';

import { store } from './Sorce/Redux';
import Routes from './Sorce/routes';

const App = () => {

  /**
   * --------------------------------
   * HIDE WARNINGS
   * --------------------------------
   */

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);


  /**
   * --------------------------------
   * VARIABLES EXAMPLE
   * --------------------------------
   */

  const accountId = 144553; // constant value

  let accountEmail = 'email@gmail.com';
  let accountPassword = '12345';
  let accountCity = 'Kashmir';

  // updating values
  accountEmail = 'changeemail@gmail.com';
  accountPassword = '3333333';
  accountCity = 'Delhi';

  console.log('accountEmail:', accountEmail);
  console.log('accountPassword:', accountPassword);
  console.log('accountCity:', accountCity);


  /**
   * --------------------------------
   * JAVASCRIPT OPERATORS
   * --------------------------------
   */

  let value = 3;
  let negativeValue = -value;

  console.log('negativeValue:', negativeValue);

  console.log('addition:', 2 + 2);
  console.log('subtraction:', 2 - 2);
  console.log('multiplication:', 2 * 2);
  console.log('power:', 2 ** 3);
  console.log('division:', 8 / 2);
  console.log('modulus:', 2 % 3);


  /**
   * --------------------------------
   * STRING CONCATENATION
   * --------------------------------
   */

  let firstName = 'hello';
  let lastName = ' umer';

  let fullName = firstName + lastName;

  console.log('fullName:', fullName);


  /**
   * --------------------------------
   * TYPE CONVERSIONS
   * --------------------------------
   */

  console.log('stringNumberExample1:', '1' + 2 + 2);
  console.log('stringNumberExample2:', 1 + 2 + '2');


  /**
   * --------------------------------
   * PREFIX AND POSTFIX OPERATORS
   * --------------------------------
   */

  let x = 3;
  const y = x++;

  console.log(`postfixExample x:${x}, y:${y}`);

  let a = 3;
  const b = ++a;

  console.log(`prefixExample a:${a}, b:${b}`);


  /**
   * --------------------------------
   * COMPARISON OPERATORS
   * --------------------------------
   */

  console.log('greaterThan:', 2 > 1);
  console.log('greaterEqual:', 2 >= 1);

  console.log('lessThan:', 2 < 1);
  console.log('lessEqual:', 2 <= 1);

  console.log('notEqual:', 2 != 2);
  console.log('equal:', 2 == 2);


  /**
   * --------------------------------
   * DATA TYPES
   * --------------------------------
   * Primitive Types:
   * Number
   * String
   * Boolean
   * Null
   * Undefined
   * Symbol
   * BigInt
   *
   * Non Primitive Types:
   * Array
   * Object
   * Function
   */


  /**
   * --------------------------------
   * MEMORY TYPES
   * --------------------------------
   *
   * Stack Memory
   * Used for primitive data types
   * Stores copy of the value
   *
   * Heap Memory
   * Used for non-primitive data types
   * Stores reference
   */


  /**
   * --------------------------------
   * DATE AND TIME
   * --------------------------------
   */

  const currentDate = new Date();

  console.log('currentDate:', currentDate);
  console.log('dayOfMonth:', currentDate.getDate());
  console.log('dayOfWeek:', currentDate.getDay() + 1);
  console.log('year:', currentDate.getFullYear());
  console.log('month:', currentDate.getMonth());



  /**
   * --------------------------------
   * UI
   * --------------------------------
   */

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );

};

export default App;