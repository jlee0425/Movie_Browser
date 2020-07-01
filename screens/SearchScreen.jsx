import React, { useState, useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'

import MovieList from '../components/movieList'
import { getSearchedList } from '../API'

export default SearchScreen = () => {
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
  }, [query])
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        onChangeText={handleTextInput}
        placeholder='Movie title to search...'
        style={{
          borderTopWidth: 10,
          borderBottomWidth: 10,
          borderColor: 'transparent',
          fontSize: 20
        }}
      />
      <Text>Total result: {total}</Text>
      {movies && <MovieList movies={movies} />}
    </View>
  )
}
