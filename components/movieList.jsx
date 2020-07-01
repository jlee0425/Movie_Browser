import React from 'react'
import { FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'
import Movie from './movie'

const MovieList = ({ movies, navigation }) => {
  return (
    <FlatList
      numColumns={3}
      data={movies}
      renderItem={({ item }) => <Movie data={item} navigation={navigation} />}
      keyExtractor={item => item.id}
    />
  )
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList
