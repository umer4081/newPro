import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/authSlice'
import { setToken } from '../utils/AuthStorage'  // <-- import our secure storage function

const LoginScreen = () => {
  const dispatch = useDispatch()

  const handleLogin = async () => {
    try {
      // Example user data
      const userData = {
        token: '123456', // This should be your real JWT token
        name: 'John',
      }

      // Save token securely
      await setToken(userData.token)

      // Dispatch Redux login action
      dispatch(login())

      console.log('Login successful! Token saved securely.')

    } catch (error) {
      console.log('Login error:', error)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

export default LoginScreen
