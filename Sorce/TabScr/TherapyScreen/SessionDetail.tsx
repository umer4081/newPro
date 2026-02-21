import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const SessionDetail = ({ route }: any) => {
  const { session } = route.params || {}

  if (!session) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Session not found!</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{session.title}</Text>
      <Text style={styles.desc}>{session.desc}</Text>
      <Text style={styles.detail}>{session.detail}</Text>
      <Text style={styles.tip}>Tip: Practice this activity together daily for best results.</Text>
    </ScrollView>
  )
}

export default SessionDetail

const styles = StyleSheet.create({
  container:{flex:1,padding:20,backgroundColor:'#fff0f5'},
  header:{fontSize:26,fontWeight:'bold',color:'#6200ee',marginBottom:15},
  desc:{fontSize:16,color:'#333',marginBottom:10},
  detail:{fontSize:16,color:'#555',marginBottom:15},
  tip:{fontSize:14,color:'#555',fontStyle:'italic',marginTop:10},
  error:{fontSize:18,color:'red',textAlign:'center',marginTop:50}
})
