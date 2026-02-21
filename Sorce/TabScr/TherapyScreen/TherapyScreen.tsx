import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const dummySessions = [
  {id:'1', title:'Communication Skills', desc:'Enhance your daily conversations', detail:'Learn active listening, expressing feelings clearly, and understanding each other’s perspective.'},
  {id:'2', title:'Conflict Resolution', desc:'Handle disagreements gracefully', detail:'Techniques to resolve arguments without resentment and build compromise strategies.'},
  {id:'3', title:'Emotional Bonding', desc:'Strengthen emotional intimacy', detail:'Exercises to increase trust, empathy, and emotional connection.'},
  {id:'4', title:'Quality Time', desc:'Maximize meaningful moments', detail:'Plan activities and routines that make your time together memorable.'},
  {id:'5', title:'Appreciation & Gratitude', desc:'Express positive feelings', detail:'Daily exercises to express gratitude and appreciation to your partner.'}
]

const TherapyScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Text style={styles.header}>Therapy Sessions</Text>
    <FlatList
      data={dummySessions}
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('SessionDetail', { session: item })}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
)

export default TherapyScreen

const styles = StyleSheet.create({
  container:{flex:1,padding:20,backgroundColor:'#fff0f5'},
  header:{fontSize:24,fontWeight:'bold',marginBottom:20,color:'#6200ee'},
  card:{backgroundColor:'#fff',padding:20,marginBottom:15,borderRadius:15,shadowColor:'#000',shadowOpacity:0.1,shadowRadius:5,elevation:3},
  title:{fontSize:18,fontWeight:'bold',color:'#333'},
  desc:{marginTop:5,color:'#666'}
})
