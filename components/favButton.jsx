import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { getMovieDetail } from '../API'

const mapDispatchToProps = dispatch => ({
  onPress: action => dispatch(action)
})
const mapStateToProps = state => {
  return {
    favorites: state.favorites
  }
}

const FavoriteButton = ({ size, id, ...props }) => {
  const [detail, setDetail] = useState(null)
  useEffect(() => {
    const fetchDetail = async () => {
      const result = await getMovieDetail(id)
      setDetail(result)
    }
    fetchDetail()
    return () => setDetail(null)
  }, [id])
  const isFavorite = props.favorites.some(movie => movie.id === id)
  const action = isFavorite
    ? { type: 'DEL_FAV', payload: id }
    : { type: 'ADD_FAV', payload: detail }
  const icon = isFavorite ? 'star' : 'staro'
  return (
    <View style={{ zIndex: 1 }}>
      <TouchableOpacity onPress={() => props.onPress(action)}>
        <AntDesign name={icon} size={size} color='orange' />
      </TouchableOpacity>
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton)
