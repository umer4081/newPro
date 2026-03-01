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

  //=========investigation start we do here
  const accounId = 144553; //rendom number
  let accounEmail = 'eemail@gmail.com';
  var accoundPass = '12345',
    accounytCity = 'Kashmir'; //we cnat do this but this is not a good way
  // so make sure never do this
  // accounId = 12 // nnot allowed
  accounEmail = 'chnageema@gmail.com'; // easily chnage
  accoundPass = '3333333'; //also chnage
  accounytCity = 'Delhi'; // chnaged
  // console.log(accounEmail, 'accounEmailaccounEmail');
  // console.log(accoundPass, 'accoundPassaccoundPass');
  // console.log(accounytCity, 'accounytCity'); // it will give us error
  // git push -u origin branch-name
  /*perfer not to use var
  because of issue and block scope and function scope
  */

  // Data types in Java Script
  //use strict : Treate all JS code as newer version
  // code readbility should be high priorty

  //ECMA script

  //Datatype and ECMA Standard
  // "use strict" // treate all js code as newer version
  //Alert

  // ===================================java script operations==========================
  let value = 3;
  let negValue = -value;
  // console.log(negValue, '====='); // -3 result

  // console.log(2 + 2)
  // console.log(2 - 2)
  // console.log(2 * 2)
  // console.log(2 ** 3)
  // console.log(8 / 2) //4
  // console.log(2 % 3) //2

  let str1 = 'helllo';
  let str2 = ' umer';
  let str3 = str1 + str2;
  // console.log(str3, 'str3str3'); // hello Umer

  //===========soem conversions eg here=========
  // console.log('1' + 2 + 2); // 122
  // console.log(1 + 2 + '2'); // 32

  // console.log(+true); //1 not good way to write this type of code
  // console.log(true+) not allowed

  //========prefix and postfix=======
  let x = 3;
  const y = x++;

  // console.log(`x:${x}, y:${y}`);
  // Expected output: "x:4, y:3"

  let a = 3;
  const b = ++a;

  // console.log(`a:${a}, b:${b}`);
  // Expected output: "a:4, b:4"

  //==============comparsions operators=============
  // console.log(2 > 1); // true
  // console.log(2 >= 1); // true

  // console.log(2 < 1); // false
  // console.log(2 <= 1); // false

  // console.log(2 != 2); // false
  // console.log(2 == 2); //true

  //=======================primitive data types============================
  // NN SS BB U  7types of data types ==> thease are basicall call by value

  //========================NON PRIMITIVE or REFERANCE type==================
  // JavaScript is a dynamically typed language.
  // ✅ You can change the type of a variable after it has been declared
  // Arrays ,
  //  OBJECTS ,
  // FUNCTIONS //  it data type is always objet functions

  //==========Stack and Heap memory in java Script===============
  // NON PRIMITIVE  goes inside heap memory ==> provide us Referances
  // PRIMITIVE goes inside Stack => provide us copy

  //=============== DATE and Time in java script==============

  let mydate = new Date(); //it is a object in java script
  console.log(mydate.getDate())
    console.log(mydate.getDay()+1)
  console.log(mydate.getFullYear())
      console.log(mydate.getMonth())


  // console.log(mydate.toDateString(), 'mydatemydate');
  // console.log(mydate.toString(), 'toStringtoString');
  // console.log(mydate.toISOString(), 'toISOStringtoISOString');

  // console.log(mydate.toJSON(), 'toJSONtoJSONtoJSON');

  return 0;
  // <Provider store={store}>
  //   <Routes />
  // </Provider>
};

export default App;
