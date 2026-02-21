import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
// import { RootState } from ''
import Authcreens from './Authcreens/Index'
import HomeScreens from './HomeScreens/index'



const Routes = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeScreens /> : <Authcreens />}
    </NavigationContainer>
  )
}

export default Routes
