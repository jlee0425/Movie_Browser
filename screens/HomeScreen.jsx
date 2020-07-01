import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import MovieList from '../components/movieList'
import { getNowPlaying } from '../API'

export default HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      const np = await getNowPlaying()
      setMovies(np)
    }
    fetchMovies()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <MovieList movies={movies} navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  }
})
