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
   * ARRAYS IN JAVASCRIPT
   * --------------------------------
   * JavaScript arrays create shallow copies
   * slice() → does NOT modify original array
   * splice() → modifies original array
   */

  const myArray = [0, 1, 2, 3, 4, 5];

  const newArray = myArray.splice(1, 3);

  console.log('spliceResult:', newArray);
  console.log('originalArrayAfterSplice:', myArray);



  /**
   * --------------------------------
   * OBJECTS IN JAVASCRIPT
   * --------------------------------
   * Object Literal with keys and values
   */

  const mySymbol = Symbol('mySymbol');

  const jsUser = {
    name: 'umer',
    age: 20,
    [mySymbol]: 'symbolValue',
    fullName: 'Umer Majeed',
    location: 'Kupwara',
    email: 'umer.google.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
  };

  console.log('userSymbol:', jsUser[mySymbol]);
  console.log('hasProperty_isLoggedIn:', jsUser.hasOwnProperty('isLoggedIn'));



  /**
   * --------------------------------
   * FUNCTION WITH REST PARAMETERS
   * --------------------------------
   */

  const calculateCartTotal = (...numbers) => {

    const result = numbers.reduce((total, item) => total + item, 0);

    console.log('calculateCartTotal:', result);

    return result;
  };

  calculateCartTotal(200, 300, 4000, 2000);



  /**
   * --------------------------------
   * CLOSURE EXAMPLE
   * --------------------------------
   * Child function can access parent variables
   */

  const closureExample = () => {

    let myName = 'umer';

    const innerFunction = () => {

      let website = 'youtube';

      console.log('closure_myName:', myName);
      console.log('closure_website:', website);
    };

    innerFunction();
  };

  closureExample();



  /**
   * --------------------------------
   * HOISTING IN JAVASCRIPT
   * --------------------------------
   */

  console.log('addOneResult:', addOne(5));

  function addOne(num) {
    return num + 1;
  }


  const addTwo = (num) => {
    return num + 1;
  };

  console.log('addTwoResult:', addTwo(5));



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