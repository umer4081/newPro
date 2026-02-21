import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
// import { setTab } from '../redux/authSlice'
import Dashboard from './Dashboard/Dashboard'
import GamesScreen from './GamesScreen/GamesScreen'
import TherapyScreen from './TherapyScreen/TherapyScreen'
import ProfileScreen from './Profile/Profile'
import { compatibilityFlags } from 'react-native-screens'
import { setTab } from '../Redux/authSlice'

 
const BottomTab = ({navigation}:any) => {
  const dispatch = useDispatch()
  const activeTab = useSelector((state: any) => state.auth?.activeTab )

    console.log(activeTab,'activeTabactiveTab')
  const renderScreen = () => {
    switch(activeTab){
      case 0: return <Dashboard navigation={navigation}  />
      case 1: return <GamesScreen  navigation={navigation} />
      case 2: return <TherapyScreen  navigation={navigation} />
      case 3: return <ProfileScreen  navigation={navigation} />
      default: return <Dashboard  navigation={navigation} />
    }
  }

  const tabs = [
    {label:'Dashboard', icon:'home-outline'},
    {label:'Games', icon:'game-controller-outline'},
    {label:'Therapy', icon:'medkit-outline'},
    {label:'Profile', icon:'person-outline'}
  ]

  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>{renderScreen()}</View>
      <View style={styles.tabBar}>
        {tabs.map((tab, i) => (
          <TouchableOpacity key={i} onPress={() => dispatch(setTab(i))} style={styles.tabItem}>
            {/* <Icon 
              name={tab.icon} 
              size={24} 
              color={activeTab === i ? '#fff' : '#aaa'} 
            /> */}
            <Text style={activeTab === i ? styles.active : styles.inactive}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  tabBar:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingVertical:10,
    backgroundColor:'#6200ee',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  tabItem:{
    justifyContent:'center',
    alignItems:'center'
  },
  active:{color:'#fff', fontWeight:'bold', marginTop:5},
  inactive:{color:'#ccc', marginTop:5}
})
