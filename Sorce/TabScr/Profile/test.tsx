import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const test = () => {
    //=========investigation start we do here
    const accounId = 144553 //rendom number
    let accounEmail = 'eemail@gmail.com'
    var accoundPass = '12345',
        accounytCity = 'Kashmir'
    accounId = 12 // now node js will anylasie this and give us output
    console.log(accounId, 'accounIdaccounId')
    // console.log('2' > 1) // Operator '>' cannot be applied to type/s 'string' and 'number'.ts(2365)
  return (
    <View>
          <Text>{ 'Test is my code upload on git or not '}</Text>
    </View>
  )
}

export default test

const styles = StyleSheet.create({})