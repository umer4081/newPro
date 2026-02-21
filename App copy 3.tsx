import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {

  // Road map of DSA
  // 1) Array,String ,Sort and Search
  // 2) Linked List , Stack, Ques
  // 3) Trees , BST
  // 4) Heap, HashMaps,Sliding Windo
  // 5) Graph, Recurion, Backtracking
  // 4) Practice + Mock Interview + CP


  // Find dublicat number in a array
  let arr = [1, 2, 3, 4, 6, 5, 5]
  let result = []
  for (let i = 0; i < arr.length; i++) {
    // console.log(i, '1iiiiii')
    for (let j = 1; j < arr.length; j++) {
      // console.log(j, 'ttttttt')
      if (arr[i] === arr[j]) { // also use this && !result.includes(arr[i])
        // console.log(i, 'iii')
        result.push(i)
        break // remove break if you wan to use this ======= && !result.includes(arr[i])
      }
      // return

    }
  }
  // worst case======================
  // n (n+1/2) + n
  // n = 6
  // n + 1 = 7
  // n * 6 =  42 / 2
  // => 21 + n = 6
  // => 27 the number of operation = 27
  // ============================

  // console.log(result, 'resultresultresult')
  let forUsing = []
  for (let v of arr) {
    // console.log(v, 'vvvvvv')
    if (arr[v] !== v) {
      // console.log(v, 'jjjjjjjjj')
      forUsing.push(v)
    }
    console.log(forUsing, 'forUsingforUsingforUsing')
  }


  const reNUm = [1, 2, 3, 4, 5, 6]

  let totla = reNUm.reduce((sum, num) =>
    // first parameter is s sume it will always a accumalatore it calcuates the vale and hold it
    // second param is number which is our array 
    // thirs param is a 0 whic is sum params innitial value 
    sum + num, 5

  )

  console.log(totla, 'finalReeefinalReeefinalReee')
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})