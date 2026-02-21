import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from '../TabScr/BottomTab'
import CourseDetail from '../TabScr/Dashboard/CourseDetail'
import GameDetail from '../TabScr/GamesScreen/GameDetail'
import SessionDetail from '../TabScr/TherapyScreen/SessionDetail'

const Stack = createNativeStackNavigator()

const HomeScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="BottomTab"
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen 
        name="CourseDetail" 
        component={CourseDetail} 
              options={{ headerShown: true, title: 'Course Details' }} 
              
          />
          
            <Stack.Screen 
        name="GameDetail" 
        component={GameDetail} 
              options={{ headerShown: true, title: 'Game Details' }} 
              
          />
            
            <Stack.Screen 
        name="SessionDetail" 
        component={SessionDetail} 
              options={{ headerShown: true, title: 'Session Details' }} 
              
          />

          

    </Stack.Navigator>
  )
}

export default HomeScreens
