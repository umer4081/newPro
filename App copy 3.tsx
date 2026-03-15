import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {

  /**
   * --------------------------------
   * DSA ROADMAP
   * --------------------------------
   * 1. Array, String, Sorting, Searching
   * 2. Linked List, Stack, Queue
   * 3. Trees, Binary Search Tree (BST)
   * 4. Heap, HashMaps, Sliding Window
   * 5. Graph, Recursion, Backtracking
   * 6. Practice + Mock Interviews + CP
   */

  /**
   * --------------------------------
   * FIND DUPLICATE NUMBERS IN ARRAY
   * --------------------------------
   */

  let arr = [1, 2, 3, 4, 6, 5, 5]
  let result = []

  for (let i = 0; i < arr.length; i++) {

    for (let j = 1; j < arr.length; j++) {

      if (arr[i] === arr[j]) {
        result.push(i)
        break
      }

    }
  }

  /**
   * --------------------------------
   * TIME COMPLEXITY (WORST CASE)
   * --------------------------------
   * n (n + 1 / 2) + n
   *
   * Example:
   * n = 6
   * n + 1 = 7
   * 6 * 7 = 42 / 2
   * = 21 + 6
   * = 27 operations
   */

  /**
   * --------------------------------
   * USING FOR...OF LOOP
   * --------------------------------
   */

  let forUsing = []

  for (let v of arr) {

    if (arr[v] !== v) {
      forUsing.push(v)
    }

    console.log("forUsing:", forUsing)
  }

  /**
   * --------------------------------
   * REDUCE METHOD EXAMPLE
   * --------------------------------
   * Reduce combines array values into a single value
   */

  const reNum = [1, 2, 3, 4, 5, 6]

  let total = reNum.reduce((sum, num) =>
    sum + num
    , 5)

  console.log("reduceTotal:", total)

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})