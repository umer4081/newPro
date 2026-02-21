import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/authSlice'
import { getToken } from '../utils/AuthStorage' // <-- Import secure storage function

const SplashScreen = ({ navigation }:any) => {
  const dispatch = useDispatch()

  useEffect(() => {
    checkLogin()
  }, [])

  const checkLogin = async () => {
    try {
      // Retrieve token securely
      const token = await getToken()

      if (token) {
        // ✅ Token exists → Update Redux
        dispatch(login())

        // Navigate to Home
        navigation.replace('Home')
      } else {
        // No token → Navigate to Login
        navigation.replace('Login')
      }

    } catch (error) {
      console.log('Error checking login:', error)
      navigation.replace('Login')
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  )
}

export default SplashScreen
