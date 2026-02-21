import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteToken } from '../../utils/AuthStorage'
import { logout } from '../../Redux/authSlice'
// import { logout } from '../redux/authSlice'
// import { deleteToken } from '../utils/AuthStorage'

const ProfileScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()
    
    const [count, setCounter] = useState(15)

  const handleLogout = async () => {
    await deleteToken()
    dispatch(logout())
    navigation.replace('Login')
  }
    
    const adddddd = () => {
               setCounter(count + 1)
    }

    const remvoooo = () => {
        if (count > 0) {
   setCounter(count - 1)
        
        }

    }
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://i.pravatar.cc/150'}} style={styles.avatar}/>
      <Text style={styles.name}>John & Jane</Text>
          <Text style={styles.email}>Couple ID: 12345</Text>
          <Text>{`I will update here after each click ${count}`}</Text>
          <TouchableOpacity onPress={adddddd}>
              <Text>{'Adddd number'}</Text>
          </TouchableOpacity>

             <TouchableOpacity onPress={remvoooo}>
              <Text>{'Remove number'}</Text>
          </TouchableOpacity>
      <Button title="Logout" onPress={handleLogout} color="#6200ee"/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#e6f0ff'},
  avatar:{width:100,height:100,borderRadius:50,marginBottom:15},
  name:{fontSize:22,fontWeight:'bold',color:'#333'},
  email:{fontSize:16,color:'#666',marginBottom:20}
})
