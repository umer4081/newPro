import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Image, ScrollView } from 'react-native'

// Full dummy data for courses with lessons
const courses = [
  {
    id: '1',
    title: 'Love & Communication',
    desc: 'Learn to communicate effectively with your partner. Strengthen emotional connection and avoid misunderstandings.',
    lessons: [
      {id:'1', title:'Introduction to Communication', desc:'Understand why communication is the foundation of a strong relationship.', duration:'5 min'},
      {id:'2', title:'Active Listening', desc:'Learn to listen without judgment and understand your partner deeply.', duration:'7 min'},
      {id:'3', title:'Expressing Feelings', desc:'Techniques to express emotions honestly and safely.', duration:'8 min'},
      {id:'4', title:'Non-Verbal Communication', desc:'Recognize body language and tone to improve understanding.', duration:'6 min'}
    ]
  },
  {
    id: '2',
    title: 'Conflict Resolution',
    desc: 'Conflict is natural, but handling it effectively is key. Learn strategies to resolve disagreements respectfully.',
    lessons: [
      {id:'1', title:'Understanding Conflict', desc:'Identify sources of disagreement and patterns in arguments.', duration:'5 min'},
      {id:'2', title:'Managing Emotions', desc:'Techniques to stay calm and avoid escalation.', duration:'7 min'},
      {id:'3', title:'Finding Common Ground', desc:'Work together to reach mutually acceptable solutions.', duration:'8 min'},
      {id:'4', title:'Apologizing and Forgiving', desc:'Learn how to apologize sincerely and let go of resentment.', duration:'6 min'}
    ]
  },
  {
    id: '3',
    title: 'Emotional Bonding',
    desc: 'Deepen your emotional intimacy with exercises that strengthen trust, empathy, and connection.',
    lessons: [
      {id:'1', title:'Emotional Awareness', desc:'Recognize and understand your own and your partner’s emotions.', duration:'5 min'},
      {id:'2', title:'Building Trust', desc:'Strategies to enhance trust and reliability in your relationship.', duration:'7 min'},
      {id:'3', title:'Strengthening Bond', desc:'Activities to connect emotionally and create shared experiences.', duration:'8 min'},
      {id:'4', title:'Daily Couple Exercises', desc:'Simple exercises to practice connection every day.', duration:'6 min'}
    ]
  }
]

// Optional banners for visual enhancement
const banners = [
  {id:'1', image:'https://i.ibb.co/3v7y1Hq/banner1.jpg', title:'Strengthen Your Love'},
  {id:'2', image:'https://i.ibb.co/pzKfYyt/banner2.jpg', title:'Fun & Intimacy Together'}
]

const CourseDetail = () => {
  const { params } = useRoute()
  const courseId = params?.course?.id
  const course = courses.find(c => c.id === courseId)

  if (!course) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Course not found!</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Banners */}
      <FlatList
        data={banners}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginBottom:15}}
        renderItem={({item}) => (
          <View style={styles.bannerCard}>
            <Image source={{uri: item.image}} style={styles.bannerImage} />
            <Text style={styles.bannerText}>{item.title}</Text>
          </View>
        )}
      />

      {/* Course Info */}
      <Text style={styles.header}>{course.title}</Text>
      <Text style={styles.courseDesc}>{course.desc}</Text>

      {/* Lessons */}
      <Text style={styles.subHeader}>Lessons</Text>
      {course.lessons.length === 0 ? (
        <Text style={styles.emptyText}>No lessons available for this course.</Text>
      ) : (
        <FlatList
          data={course.lessons}
          keyExtractor={item => item.id}
          scrollEnabled={false} // ScrollView handles scrolling
          renderItem={({item}) => (
            <TouchableOpacity 
              style={styles.card}
              onPress={() => Alert.alert(item.title, `${item.desc}\nDuration: ${item.duration}`)}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
              <Text style={styles.duration}>Duration: {item.duration}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Fantasy Tips */}
      <Text style={styles.subHeader}>Couple Fantasy Tips</Text>
      <View style={styles.fantasyCard}>
        <Text style={styles.fantasyText}>💋 Try playful games like guessing, intimate dares, or sensual massage sessions.</Text>
        <Text style={styles.fantasyText}>🔥 Explore new positions or share fantasies in a safe, loving way.</Text>
        <Text style={styles.fantasyText}>💖 Build intimacy through trust, touch, and communication.</Text>
      </View>
    </ScrollView>
  )
}

export default CourseDetail

const styles = StyleSheet.create({
  container:{flex:1, padding:15, backgroundColor:'#fdf6f0'},
  header:{fontSize:26, fontWeight:'bold', marginBottom:10, color:'#6200ee'},
  courseDesc:{fontSize:16, color:'#333', marginBottom:15},
  subHeader:{fontSize:20, fontWeight:'bold', marginBottom:10, color:'#333'},
  
  card:{backgroundColor:'#fff', padding:15, marginBottom:12, borderRadius:12, shadowColor:'#000', shadowOpacity:0.1, shadowRadius:5, elevation:3},
  title:{fontSize:18,fontWeight:'bold',color:'#333'},
  desc:{marginTop:5,color:'#666'},
  duration:{marginTop:5,fontSize:14,fontStyle:'italic',color:'#999'},
  emptyText:{fontSize:16,color:'#999',fontStyle:'italic'},
  errorText:{fontSize:18,color:'red',textAlign:'center',marginTop:50},

  bannerCard:{marginRight:15,borderRadius:12,overflow:'hidden', width:300, height:140},
  bannerImage:{width:'100%', height:'100%'},
  bannerText:{position:'absolute', bottom:10, left:10, color:'#fff', fontSize:18, fontWeight:'bold', textShadowColor:'#000', textShadowOffset:{width:1,height:1}, textShadowRadius:5},

  fantasyCard:{backgroundColor:'#fff', padding:15, borderRadius:15, shadowColor:'#000', shadowOpacity:0.1, shadowRadius:5, elevation:3, marginBottom:20},
  fantasyText:{fontSize:16,color:'#555', marginBottom:8}
})
