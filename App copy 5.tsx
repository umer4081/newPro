import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './Sorce/Redux';
import Routes from './Sorce/routes';
import { LogBox } from 'react-native';
import { retry } from '@reduxjs/toolkit/query';

const App = () => {
  useEffect(() => {
    // Hide all warnings
    LogBox.ignoreAllLogs(true);
  }, []);

  //=================Arrays in javaScript================
  // Java Script Arrays created Shallow copy , rather then deep copy
  // slice and splice
  const myarr = [0, 1, 2, 3, 4, 5]
  const newarrr = myarr.splice(1, 3) //splice methos will chnage our orginal array and returnes new array
  // console.log(newarrr, 'newarrr222')//123
  //   console.log(myarr, 'myarr111')//045

  // const myarr2 =  [0, 1, 2, 3, 4, 5]
  //  kdfjew keoert oeot
  // const newarslice = myarr2.slice(1, 3)
  // console.log(newarslice, 'newarslice33')
  // console.log(myarr, 'myarr44')


  //========java scripts objects==================
  //singleton ======>   obj.create is a singleton or constructor

  //object literals ==> we have keyes and values
  let mysymbol = Symbol('ima symbol')
  const jsusers = {
    name: 'umer',
    age: 20,
    [mysymbol]: 'dddddd', // this is real syntex actually in js for symbol
    "fullname": 'Umer Majeed',
    location: 'Kupwara',
    email: 'umer.google.com',
    islogedIn: false,
    lastLoginDaya: ['Monday', 'Saturday']
  }

  // console.log(jsusers[mysymbol], 'jsusersjsusers')
  // console.log(jsusers.hasOwnProperty('islogedIn')) // true
  // console.log(jsusers.hasOwnProperty('isloged')) // false


  //now we cane access obj values like this
  // console.log(jsusers.email) //umer.google.com
  // console.log(jsusers['email']) //umer.google.com
  // console.log(jsusers.fullname)
  // console.log(jsusers['fullname'])


  //========functions
  const functiocart = (...num) => {
    // let result = num.map((item) => item )
    // console.log(result, 'resultresult')
    const result = num.reduce((total, item) => total + item, 0); //650


    // console.log(result,'resultsresults')//650
    return num
  }
  // console.log(functiocart(200, 300, 4000, 2000))

  //================best example of closers=========
  const functioncloser = () => {
    // this is a parent functioncloser 
    let myName = 'umer'
    console.log(myName, 'myNamemyName')
    const functionTwo = () => {
      // this is a child functionTwo child access Parents value but parent does not access child value jut eg
      let website = 'youtube'
      console.log(myName);   // ✅ Can access parent variable
      console.log(website);  // ✅ Own variable
    }
    // console.log(website,'websitewebsite')  not aloowed
    // console.log(functionTwo())
  }

  functioncloser()


////===============Private Variable closers Example========
  // const bankAccount = () => {
  //   let balance = 1000;

  //   return {
  //     deposit: (amount) => {
  //       balance += amount;
  //       console.log("Balance2222:", balance);
  //     },
  //     withdraw: (amount) => {
  //       balance -= amount;
  //       console.log("Balance:", balance);
  //     }
  //   };
  // };

  // const account = bankAccount();

  // account.deposit(500);  // 1500
  // account.withdraw(200); // 1300

  //==========js HOISTING CONCEPT=========
  // console.log(addone(5),'addoneaddone')git add .

  function addone(num)  {
    return num + 1
    

  }
    // console.log(addTwo(5),'addTwoaddTwoaddTwo') //not allowed here when we assigne a function in to a varivale

  // addTwo(5),
  const addTwo = (num) => {
    return num + 1
  }
    console.log(addTwo(5),'addTwoaddTwoaddTwo') //allowed

  //======THIS KEyword refers to a current context
  return 0;
  // <Provider store={store}>
  //   <Routes />
  // </Provider>
};

export default App;
