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
   * THIS KEYWORD (CURRENT CONTEXT)
   * --------------------------------
   */

  const user = {
    name: 'umer',
    price: 123,

    userAmount: function () {
      console.log('userName:', this.name);
      console.log('userContext:', this);
    }
  };

  user.userAmount();



  /**
   * --------------------------------
   * ARROW FUNCTION EXAMPLE
   * --------------------------------
   * Arrow functions do not have their own "this"
   */

  const arrowFunctionExample = () => {

    let name = 'umerr';

    console.log('arrowFunctionName:', name);
    console.log('arrowFunctionThis:', this);
  };

  arrowFunctionExample();



  /**
   * --------------------------------
   * IIFE (IMMEDIATELY INVOKED FUNCTION)
   * --------------------------------
   * Used to avoid global scope pollution
   */

  (function namedIIFE() {
    console.log('namedIIFE: executed');
  })();

  ((name) => {
    console.log('arrowIIFE:', name);
  })('umer');



  /**
   * --------------------------------
   * SIMPLE FOR LOOP
   * --------------------------------
   */

  for (let i = 0; i < 10; i++) {
    console.log('loopValue:', i);
  }



  /**
   * --------------------------------
   * NESTED LOOP (MULTIPLICATION TABLE)
   * --------------------------------
   */

  for (let i = 2; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {

      console.log(`table: ${i} * ${j} = ${i * j}`);

    }

  }



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