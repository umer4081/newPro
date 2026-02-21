import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native'

const GameDetail = ({ route }: any) => {
  const { game } = route.params || {}
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState('')
  const [showCards, setShowCards] = useState(false)
  const [randomNumber] = useState(Math.floor(Math.random() * 5) + 1) // number 1-5

 const actionCards = [
  { id: '1', title: 'Foreplay', desc: 'Spend intimate time teasing and touching.' },
  { id: '2', title: 'Kissing', desc: 'Exchange playful or romantic kisses.' },
  { id: '3', title: 'Cuddle', desc: 'Enjoy a warm cuddle session together.' },
  { id: '4', title: 'Massage', desc: 'Give each other a relaxing massage.' },
  { id: '5', title: 'Dance Together', desc: 'Slow dance or fun moves with your partner.' },
  { id: '6', title: 'Romantic Dinner', desc: 'Cook or order a special meal together.' },
  { id: '7', title: 'Whisper Secrets', desc: 'Share dreams and fun secrets.' },
  { id: '8', title: 'Compliment Game', desc: 'Give each other compliments.' },
  { id: '9', title: 'Playful Chase', desc: 'Run around and tickle each other.' },
  { id: '10', title: 'Photo Fun', desc: 'Take cute or funny photos together.' },
  { id: '11', title: 'Story Time', desc: 'Tell fun or imaginative stories.' },
  { id: '12', title: 'Puzzle Game', desc: 'Solve a puzzle or quiz together.' },
  { id: '13', title: 'Relaxing Bath', desc: 'Take a warm, candlelit bath together.' },
  { id: '14', title: 'Board Game', desc: 'Play your favorite board game as a couple.' },
  { id: '15', title: 'Creative Drawing', desc: 'Draw or paint something for each other.' },
  // Continue adding up to 50 with similar playful or romantic items
]

  if (!game) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Game not found!</Text>
      </View>
    )
  }

  const handleGuess = () => {
    const userGuess = parseInt(guess)
    if (!userGuess || userGuess < 1 || userGuess > 5) {
      Alert.alert('Invalid', 'Please enter a number between 1 and 5')
      return
    }

    console.log('User Guess:', userGuess)
    console.log('Random Number:', randomNumber)

    if (userGuess === randomNumber) {
      setMessage('🎉 Correct! You guessed the number!')
      setShowCards(true) // Show action cards
    } else {
      setMessage(`❌ Wrong! The number was ${randomNumber}`)
      setShowCards(false)
    }

    setGuess('')
  }

  const handleCardPress = (card: any) => {
    Alert.alert('Action', `Start: ${card.title}\n${card.desc}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{game.name}</Text>
      <Text style={styles.desc}>{game.desc}</Text>

      {/* Guess Game */}
      <View style={styles.gameContainer}>
        <Text style={styles.subHeader}>🎲 Guess a Number Game</Text>
        <Text style={styles.instructions}>Pick a number between 1 and 5</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={guess}
          onChangeText={setGuess}
          placeholder="Enter your guess"
        />

        <TouchableOpacity style={styles.button} onPress={handleGuess}>
          <Text style={styles.buttonText}>Check</Text>
        </TouchableOpacity>

        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>

      {/* Action Cards (only show on correct guess) */}
      {showCards && (
        <View style={styles.cardsContainer}>
          <Text style={styles.subHeader}>💖 Action Cards</Text>
          <FlatList
            data={actionCards}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}

      <Text style={styles.tip}>Tip: Play this together with your partner!</Text>
    </View>
  )
}

export default GameDetail

const styles = StyleSheet.create({
  container: { flex:1, padding:20, backgroundColor:'#f0f8ff' },
  header: { fontSize:26, fontWeight:'bold', color:'#6200ee', marginBottom:15 },
  desc: { fontSize:16, color:'#333', marginBottom:20 },
  gameContainer: { backgroundColor:'#fff', padding:20, borderRadius:15, shadowColor:'#000', shadowOpacity:0.1, shadowRadius:5, elevation:3, marginBottom:20 },
  subHeader: { fontSize:20, fontWeight:'bold', marginBottom:10, color:'#6200ee' },
  instructions: { fontSize:16, marginBottom:10, color:'#555' },
  input: { borderWidth:1, borderColor:'#ccc', borderRadius:10, padding:10, marginBottom:10, fontSize:16 },
  button: { backgroundColor:'#6200ee', padding:12, borderRadius:10, alignItems:'center' },
  buttonText: { color:'#fff', fontWeight:'bold', fontSize:16 },
  message: { marginTop:15, fontSize:16, fontWeight:'bold', color:'#333' },
  cardsContainer: { marginTop:20 },
  card: { backgroundColor:'#fff', padding:20, marginRight:15, borderRadius:15, shadowColor:'#000', shadowOpacity:0.1, shadowRadius:5, elevation:3, width:200 },
  cardTitle: { fontSize:18, fontWeight:'bold', color:'#6200ee' },
  cardDesc: { marginTop:5, fontSize:14, color:'#555' },
  tip: { fontSize:14, color:'#555', fontStyle:'italic', marginTop:20 },
  error: { fontSize:18, color:'red', textAlign:'center', marginTop:50 }
})
