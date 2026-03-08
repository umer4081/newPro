import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './Sorce/Redux';
import Routes from './Sorce/routes';
import { LogBox } from 'react-native';

const App = () => {
  useEffect(() => {
    // Hide all warnings
    LogBox.ignoreAllLogs(true);
  }, []);
  //======THIS KEyword refers to a current context
  const user = {
    name: 'umer',
    price: 123,
    userAmount: function () {
      console.log(this.name)
      console.log(this)

    }
  }

  // /===============ARROW FUNCTIONS===========
  const userAmount = () => {
    let name = 'umerr'
    // console.log(this.name) //undefunes
    // console.log(this) // procide us windeoes obj

  }

  // userAmount()


  //=============================IIFI function=================================
  // named iffi/
  (function umer() {
    // console.log('check iffi function ') // first paran() is a where we write function defination.
    // the second is function execution
  })();
  // we are using to remove  global scope and globale execution using iffi function()/

  //==un name ifffi
  ((name) => {
    // console.log(name, '-----------')
  })('umer');


  for (let i = 0; i < 10; i++) {
    let element = i
    // console.log(element,'velementelement')
  }


  for (let i = 2; i <= 10; i++) {
    // console.log(`outer loopp ${i}`)
    for (let j = 1; j <= 10; j++) {
      // console.log(`innerrr loopp value ${j} and inloop value of${i}`)
      // console.log(i + '*' + j + ' = ' + i * j) // print table from 2 to 10

    }
  }


  // user()
  // console.log(this,'chevck ')
  return 0;
  // <Provider store={store}>
  //   <Routes />
  // </Provider>
};

export default App;
