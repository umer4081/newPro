import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'

const dummyCourses = [
  {id:'1', title:'Love & Communication', desc:'Improve your communication skills as a couple'},
  {id:'2', title:'Conflict Resolution', desc:'Learn to resolve disagreements positively'},
  {id:'3', title:'Emotional Bonding', desc:'Deepen your emotional connection'},
  {id:'4', title:'Fantasy Exploration', desc:'Discover playful ways to connect intimately'},
  {id:'5', title:'Sensual Touch', desc:'Learn touch techniques for intimacy'}
]

const banners = [
  {id:'1', image: 'https://i.ibb.co/3v7y1Hq/banner1.jpg', title:'Discover New Ways to Connect'},
  {id:'2', image: 'https://i.ibb.co/pzKfYyt/banner2.jpg', title:'Fun Couple Activities'},
]

const testimonials = [
  {id:'1', name:'Alice & John', feedback:'These exercises brought us closer than ever!'},
  {id:'2', name:'Mia & Leo', feedback:'Love the playful games and bonding sessions!'},
  {id:'3', name:'Sara & Mark', feedback:'Highly recommend for every couple!'}
]

const Dashboard = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Banner Slider */}
      <FlatList
        data={banners}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical:10}}
        renderItem={({item}) => (
          <View style={styles.bannerCard}>
            <Image source={{uri: item.image}} style={styles.bannerImage} />
            <Text style={styles.bannerText}>{item.title}</Text>
          </View>
        )}
      />

      {/* Courses */}
      <Text style={styles.sectionHeader}>Couple Courses</Text>
      <FlatList
        data={dummyCourses}
        keyExtractor={item => item.id}
        scrollEnabled={false} // Allow ScrollView to handle scrolling
        renderItem={({item}) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('CourseDetail', { course: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Testimonials */}
      <Text style={styles.sectionHeader}>Testimonials</Text>
      <FlatList
        data={testimonials}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical:10}}
        renderItem={({item}) => (
          <View style={styles.testimonialCard}>
            <Text style={styles.feedback}>"{item.feedback}"</Text>
            <Text style={styles.user}>- {item.name}</Text>
          </View>
        )}
      />

      {/* Fantasy Tips */}
      <Text style={styles.sectionHeader}>Couple Fantasy Tips</Text>
      <View style={styles.fantasyContainer}>
        <Text style={styles.fantasyText}>💋 Try playful games like guessing, intimate dares, or sensual massage sessions.</Text>
        <Text style={styles.fantasyText}>🔥 Explore new positions or share your fantasies in a safe and loving way.</Text>
      </View>

    </ScrollView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container:{flex:1, backgroundColor:'#f2f2f2', padding:10},
  sectionHeader:{fontSize:22,fontWeight:'bold',color:'#6200ee',marginVertical:10},
  
  card:{
    backgroundColor:'#fff',
    padding:20,
    marginBottom:15,
    borderRadius:15,
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowRadius:5,
    elevation:3
  },
  title:{fontSize:18,fontWeight:'bold',color:'#333'},
  desc:{marginTop:5,color:'#666'},

  bannerCard:{
    marginRight:15,
    borderRadius:15,
    overflow:'hidden',
    width:300,
    height:150,
  },
  bannerImage:{width:'100%', height:'100%'},
  bannerText:{
    position:'absolute',
    bottom:10,
    left:10,
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
    textShadowColor:'#000',
    textShadowOffset:{width:1,height:1},
    textShadowRadius:5
  },

  testimonialCard:{
    backgroundColor:'#fff',
    padding:15,
    marginRight:15,
    borderRadius:12,
    width:250,
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowRadius:5,
    elevation:3
  },
  feedback:{fontSize:16,color:'#333',marginBottom:8,fontStyle:'italic'},
  user:{fontSize:14,color:'#6200ee',fontWeight:'bold'},

  fantasyContainer:{backgroundColor:'#fff',padding:15,borderRadius:15,shadowColor:'#000',shadowOpacity:0.1,shadowRadius:5,elevation:3},
  fantasyText:{fontSize:16,color:'#555',marginBottom:8}
})
