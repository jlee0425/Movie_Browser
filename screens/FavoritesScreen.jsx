import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import MovieList from '../components/movieList'

const mapStateToProps = state => ({
  favorites: state.favorites
})

const FavoritesScreen = ({ favorites, navigation }) => {
  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <MovieList movies={favorites} navigation={navigation} />
    </View>
  )
}

export default connect(mapStateToProps)(FavoritesScreen)
