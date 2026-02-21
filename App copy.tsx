import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { getOwnerDocument } from 'react-native/types_generated/src/private/webapis/dom/nodes/internals/NodeInternals';
// import { Value } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

//-========reverse Arrays


let arrw = 'umer majeed';


function reverseAndCountChars() {
  let result = '';
  let charCount: any = {}; // object to store character counts

  // Loop from the last character to the first
  for (let i = arrw.length - 1; i >= 0; i--) {
    const char = arrw[i];
    result += char;

    if (charCount[char]) {
      charCount[char] += 1;

    } else {
      charCount[char] = 1;


    }
  }

  console.log(result, 'Reversed string');
  console.log(charCount, 'Character counts');

  return { reversed: result, counts: charCount };
}



let arr = [1, 2, 3, 4];
function reverseArray() {
  reverseAndCountChars()
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  // console.log(result, 'resultresult')

  // return result;
}


// reverseArray();
// Output: [4, 3, 2, 1]

// Q) find largest number in the array



function findMaxMin() {
  let largArr = [10, 45, 2, 99, 23];
  let max = largArr[0];
  let min = largArr[0];

  for (let i = 1; i < largArr.length; i++) {

    //     Iteration 1
    //        i = 1
    //        largArr[i] = 45

    // max Value===========================
    // 45 > 10  ✅
    // max = 45

    // max Value==============================
    // 45 > 10  ✅
    // max = 45

    // Iteration 222222222222222222222222
    //     Iteration 2
    // /i = 2
    // largArr[i] = 2

    // maxx valueeee==================
    // 2 > 45 ❌
    // max stays 45



    // Iteration 333333333===================
    //     Iteration 33333333
    // i = 3
    // largArr[i] = 99


    // maxx valueeee==================
    // 99 > 45 ✅
    // max = 99



    // Iteration 44444444444===================
    //     Iteration 444444444444
    // i = 4
    // largArr[i] = 23
    //


    // maxx valueeee==================
    //     23 > 99 ❌
    // max stays 99






    if (largArr[i] > max) {

      max = largArr[i]
    };
    if (largArr[i] < min) {
      // iteratinn 111111111

      //  Min check
      // 45 < 10 ❌
      // min stays 10

      // iteratinn 22222222
      // 2 < 10 ✅
      // min = 2
      //

      // iteratinn 2333333333333
      //       99 < 2 ❌
      // min stays 2


      // iteratinn 444444444
      // 23 < 2 ❌
      // min stays 2


      min = largArr[i];

    }
    // final resultt
    //     max = 99
    // min = 2
  }

  // itteration 1 current values 
  // max = 45
  // min = 10
  // itteration 222222 current values
  //   max = 45
  // min = 2

  console.log(max, 'maxmaxmaxmaxmaxmaxmax')
  console.log(min, 'minminminminminminminmi')
}





// 6. Find common elements between two arrays (using for loop)
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

function commonElements() {
  // oneElement
  let result = [];
  for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr2.length; j++) {

      if (arr1[i] !== arr2[j]) {
        result.push(arr1[i]);
        console.log(result, 'resultresultresult')
        break; // avoid duplicates
      }
    }
  }
  return result;
}
// 6. Find common elements between Onee arrays (using for loop)
let onearr = [1, 2, 3, 4, 2, 22, 33, 4, 1];


function oneElement() {
  let result: any = [];
  for (let i = 0; i < onearr.length; i++) {
    for (let j = i + 1; j < onearr.length; j++) {

      if (onearr[i] === onearr[j]) {
        result.push(onearr[i]);
      }

    }
  }

  console.log(result, 'repeated elements');
}


// fint common elemeni in array


// console.log(commonElements(arr1, arr2)); // [3, 4]

const numbers = [1, 2, 3, 4, 5];

const callNUm = () => {
  for (let i = 0; i < numbers.length; i++) {

    console.log(numbers[i] * 2, 'ooooooo')
  }

}
console.log('jj')


// i wan to multiple those number whome grater then 4
const checkarr = [2, 3, 4, 5, 6, 7, 8, 9]
const multiple: any = []

const checkKK = () => {
  for (let i = 0; i < checkarr.length; i++) {
    if (checkarr[i] > 4) {
      multiple.push(checkarr[i] * 2)
      console.log(multiple, 'multiplemultiple')
    }
  }
  const start = 5
  for (let i = 0; i <= start; i++) {
    let reslt = ''
    for (let j = 1; j <= i; j++) {
      reslt += '*'
    }
    console.log(reslt)
  }

  let n = 5;

  for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let s = 1; s <= n - i; s++) {
      row += " ";
    }

    // stars
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

  console.log(row);
}


}




const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <TouchableOpacity
        // onPress={reverseArray}
        // onPress={findMaxMin}
        // onPress={commonElements}
        // onPress={oneElement}
        // onPress={getArray}
        // onPress={callNUm}
        onPress={checkKK}
        style={{
          flex: 1,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 3,
          padding: 12,
        }}
      >
        <Text>App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
