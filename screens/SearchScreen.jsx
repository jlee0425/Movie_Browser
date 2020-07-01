import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import MovieList from '../components/movieList'
import { getSearchedList } from '../API'

export default ({ navigation }) => {
  const [query, setQuery] = useState('')
  const [total, setTotal] = useState(0)
  const [movies, setMovies] = useState([])

  const handleTextInput = input => {
    if (input.length > 3) {
      setQuery(input.trim().toLowerCase())
    } else {
      setQuery('')
      setMovies([])
      setTotal(0)
    }
  }
  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getSearchedList(query)
      setMovies(result)
      setTotal(result.length)
    }
    if (query.length > 0) fetchMovies()
    return () => {
      setQuery('')
      setMovies([])
      setTotal(0)
    }
  }, [query])
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleTextInput}
        placeholder='Movie title to search...'
        style={styles.input}
      />
      <Text style={styles.total}>Total result: {total}</Text>
      {movies && <MovieList movies={movies} navigation={navigation} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    borderTopWidth: 5,
    borderColor: 'transparent',
    fontSize: 20,
    marginLeft: 15
  },
  total: {
    marginLeft: 15
  }
})
