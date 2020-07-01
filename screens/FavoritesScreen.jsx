import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import MovieList from '../components/movieList'

const mapStateToProps = state => ({
  favorites: state.favorites
})

const FavoritesScreen = ({ favorites }) => {
  return (
    <View style={{ flex: 1 }}>
      <MovieList movies={favorites} />
    </View>
  )
}

export default connect(mapStateToProps)(FavoritesScreen)
