import { StyleSheet, Text, View } from 'react-native'
import React, { use, useEffect, useState, useSyncExternalStore } from 'react'

const App = () => {
  // prinf number 1 to 10nusing loops/
  let numberss = 10
  let evnNumber = 100
  useEffect(() => {
    // prindNum() /
    // findEvenNumber()
    // findEvenNumberSecond()
    // seprateStr()
    // fontindex()
    // tableTOW()
    // sunofNeturan()
    // fiftyNUm()
    // revFun()

  })

  // PRINT NUMBERD
  const prindNum = () => {
    for (let i = 1; i < numberss; i++) {
      console.log(i, 'Oupt put of numbers')
    }
  }
  // const find even number in this 1 to 100
  const findEvenNumber = () => {
    for (let i = 1; i < evnNumber; i++) {
      if (i % 2 == 0) {
        console.log(i, 'thes even number')

      }
    }
  }

  // second methos print even numbers from 1 to 100
  const findEvenNumberSecond = () => {
    for (let i = 2; i < evnNumber; i = i + 2) {
      console.log(i, 'Using second  method even number')

    }
  }

  //seorate sting eg umer using for off loop it will always use for values 
  let str = 'umer'
  // it always read data from left side  of sequances

  const seprateStr = () => {
    let result = ''
    for (let value of str) {
      result += value
      console.log(result, 'result') // out u m e r

    }
  }
  // for in loop it will always provide us kyes in object and index in arrays
  let arrr = [23, 44, 55, 66]
  const fontindex = () => {
    for (let value in arrr) {
      console.log(value) // out put is 0,1,2,3
    }
  }



  // print table of Two 2
  const tableTOW = () => {
    let result = ''
    for (let i = 1; i <= 10; i++) {
      // result = i * 2

      console.log(i, ' * 2 = ', i * 2, 'resultresult')
    }
  }

  // find the sum of netural number from 1 to 10
  const sunofNeturan = () => {
    let sum = 0
    for (let i = 1; i <= 10; i++) {

      sum = sum + i
      console.log(sum, '=inside loop=')
    }
    console.log(sum, '======')
  }

  //print even number from 1 t0 50
  let fidtyNumber = 50
  const fiftyNUm = () => {
    for (let i = 0; i <= fidtyNumber; i++) {
      if (i % 2 == 0) {
        console.log(i, 'even number one to fifty')
      }
    }
  }


  //print reverse number from one to 20


  const revFun = () => {
    let all = ' '
    for (let s = 20; s >= 1; s--) {
      // console.log(s, 'reverse numbers');
      all += s + ' , ';

    }
    // console.log(all, 'allall')
  };

  // revFun();
  // QQ prime number always multiple by 1 or ItSelf
  // eg
  let numberrr = 30
  const primeNumber = () => {
    let midvaleu = numberrr / 2
    for (let i = 2; i <= midvaleu; i++) {
      // console.log(i, 'primne number')
      if (numberrr % i == 0) {
        // console.log(i, 'Not a Primne number')
        break
      } else {
        // console.log(i, 'this is prime number')
      }
    }
  }

  // primeNumber()/
  const [daata, setdaata] = useState([
    {
      title: 'nameee',
      price: 200,
      amount: 300,
      totaOnrent: 110
    }, {
      title: 'nameee',
      price: 230,
      amount: 400,
      totaOnrent: 200
    }, {
      title: 'nameee',
      price: 230,
      amount: 300,
      totaOnrent: 120
    }
  ])

  let suum = 0
  let total = 0
  for (let v of daata) {
    // console.log(v.totaOnrent, 'll')
    total += v.totaOnrent

    // console.log(total, 'total')
    suum += v.amount
    // console.log(suum, 'suumsuumsuum::::')
    let minuse = suum - total
    // console.log(minuse, 'minuseminuseminuse')
  }
  // console.log(total, 'totaltotal')

  // console.log(suum, 'suumsuumsuumsuum')

  let nummmm = [10, 20, 23, 55, 99, 77, 66, 44, 56, 21]
  for (let v of nummmm) {
    // console.log(v, 'kkkkkkkk')
    if (v % 2 == 0) {
      // console.log(v, 'even numberssss')
    }

  }

  // let l = [1, 2, 3, 4]
  // // console.log(l, 'dddddddd')
  // for (let vv of l) {
  //   console.log(vv, 'vvvvvvvv')
  //   vv.push(30)
  // }

  // find common elenet id two array this incluse will not chnage an original array it will return a new array
  let l11 = [1, 2, 3, 4]
  let l22 = [3, 4, 5, 6]

  for (let v of l11) {
    if (l22.includes(v)) {
      // console.log(v), 'nnnnnnn'; // 3,4
    }
  }


  let arr1 = [1, 2, 3, 4];
  let arr2 = [3, 4, 5, 6];


  function commonElements() {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          result.push(arr1[i]);
          break; // stop checking once found
        }
      }
    }

    return result;
  }

  // console.log(commonElements()); // [3,4]

  // slice method this will also returne a new array
  const slicarr = ['apple', 'banana', 'mango']
  // slicarr.slice(1,2) note first position will always less then 2 postonon or start to end
  let finall = slicarr.slice(1, 2) //mangoo out put 
  let joinarr = slicarr.join(' , ') // apple , banana , mango joinarrjoinarr
  // console.log(joinarr, 'joinarrjoinarr')
  // console.log(finall, 'finallfinallfinall')
  //joinmethod it will conver array in to string. we can also seprate 
  let onearr = [1, 2, 3, 4, 2, 22, 33, 4, 1];
  let fiinalarr: any = []
  for (let v of onearr) {
    if (!fiinalarr.includes(v)) {
      fiinalarr.push(v)
    }
  }
  // console.log(fiinalarr, 'fiinalarrfiinalarr')
  //clallback function is a function when we call a function as a argument is call as callback functions ge

  const addNum = (num1: any, num2: any) => {
    return num1 + num2
  }
  const minnNum = (num1: any, num2: any) => {
    return num1 - num2
  }

  const callBaaack = (num1: any, num2: any, callback) => {
    // console.log(num1, 'num1num1')
    // console.log(num2, 'num2num2')
    // console.log(callback(num1, num2), 'callbackcallback')



  }
  // console.log()
  // callBaaack(10, 20, addNum)
  // callBaaack(50, 25, minnNum)

  //Arrow function offers a short syntex than regukar function  it will always by defaukt return if we dont use curly braces


  // i wan to get the conunt of words uding for of loop
  const countword = (str: any) => {
    // method one 
    // console.log(str.split(' ').length)
    // let wordCount = 1
    // for (let v of str) {
    //   if (v === ' ') {
    //     wordCount++
    //   }
    // }


    // console.log(wordCount, 'wordCountwordCount')
    // return


    // let wordCount = 0;
    // let inWord = false;

    // for (let i = 0; i < str.length; i++) {
    //   if (str[i] !== ' ' && !inWord) {
    //     wordCount++;
    //     inWord = true;
    //   } else if (str[i] === ' ') {
    //     inWord = false;
    //   }
    // }

    // return wordCount;

  }
  console.log(countword('welcom to umer from learning react Native'))

  // MAP always take a extesting elementes and make it chnages and return a new array
  // eg
  let aa = [1, 2, 3, 4, 6]
  let squara = (v) => v ** 2
  let squarArray = aa.map(squara) //squara we pass as a refrances and it will return a square of each element
  // console.log(squarArray, 'squarArraysquarArray')
  // filter=========
  let fil = [10, 12, 13, 16, 19, 20]
  let resultfil = fil.filter((v) => {
    if (v % 6 !== 0) {
      // console.log(v, 'nnnnnnnnnn')
      return true
    }
  })
  // console.log(resultfil)

  // find() it will give a first resukt always not a return array eg
  let findData = fil.find((v) => v >= 12)

  // console.log(findData, 'findDatafindDatafindData')

  //reduce is alos a higher order function it adds or combined all the values in an array into ne single value.
  // it will not return a array
  let reduceNumber = [1, 2, 3, 4, 5, 6, 7, 8]
  let totla = reduceNumber.reduce((sum, num) =>
    // first parameter is s sume it will always a accumalatore it calcuates the vale and hold it
    // second param is number which is our array 
    // thirs param is a 0 whic is sum params innitial value 
    sum + num, 0

  )
  // console.log(totla, 'totlatotla')

  //for each is also a higher order function
  // forEach runs a function once for every element in an array   but does not return any thing
  // it will always use to display the element of the array we are not goint to change in to array using a forEach

  // Asysynchronous task examples
  // console.log('Asy test')
  useEffect(() => {
    setTimeout(() => {
      // console.log('Asy t22222')

    }, 2000);
  }, [])
  // console.log('Asy test33333')

  let lonig = false
  let mypromise = new Promise<void>((resolve, reject) => {
    // resolve and reject is a callback thease two param are handel success or reject
    let obj = {
      status: 1,
      message: 'success promise resolved'
    }
    let ob2 = {
      status: 0,
      message: 'success promise faileeedd'
    }

    if (lonig) {
      resolve(obj) // alsoe set obj , string , array etc but it will always success of our promise

    } else {
      reject(ob2) // it will give a 0 or failed 
    }
  })
  //then will always recives sur=ccess 
  // then takes call back function
  // we can also use multiple then
  mypromise.then((res) => {

    // console.log(res, 'resresresres')/
  })
    .catch((e) => {
      // console.log(e, 'fsileeeddddd')
    })

  // console.log(mypromise, 'mypromise')

  //NOW ARE A TEst on promise chnanning
  const promiseChaning = (task, time) => {
// why do we use this return keyword() ===> it mean when ever functions call I will to return it un-till i gett success

    return new Promise<void>((resolve, reject) => {

      setTimeout(() => {

        console.log(task, 'tassk Number')
        resolve()
      }, time);
    })
  }
  promiseChaning(1, 1000)
    .then((res) => (promiseChaning(2, 2000)))
    .then((res) => promiseChaning(3, 3000))

  // Promise All if one function goes reject rest of other funcion will througherror

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})