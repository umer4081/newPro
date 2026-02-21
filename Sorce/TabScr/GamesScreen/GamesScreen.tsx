import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const allGames = Array.from({ length: 15 }).map((_, i) => ({
  id: i.toString(),
  name: `Game ${i + 1}`,
  desc: `Have fun with game ${i + 1} with your partner!`,
}))

const GamesScreen = ({ navigation }: any) => {
  const [games, setGames] = useState(allGames.slice(0, 5))

  const loadMore = () => {
    const currentLength = games.length
    const more = allGames.slice(currentLength, currentLength + 5)
    setGames([...games, ...more])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Games Pack</Text>
      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('GameDetail', { game: item })}
          >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </TouchableOpacity>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

export default GamesScreen

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f8ff' },
  header: { fontSize: 26, fontWeight: 'bold', color: '#6200ee', marginBottom: 15 },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  desc: { marginTop: 5, color: '#666' }
})
