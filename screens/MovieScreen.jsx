import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native'

import FavoriteButton from '../components/favButton'
import { getMovieDetail } from '../API'

export default MovieScreen = ({ navigation, route }) => {
  const id = route.params.id
  const [detail, setDetail] = useState({})
  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getMovieDetail(id)
      setDetail(result)
    }
    fetchMovies()
    return () => {
      setDetail({})
    }
  }, [])
  useEffect(() => {
    navigation.setOptions({ title: detail.title })
  }, [detail])
  if (Object.keys(detail).length > 0)
    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: detail.poster }} style={styles.poster}>
          <FavoriteButton size={30} id={id} />
          <View style={styles.desc}>
            <Text style={styles.subHead}>
              {detail.year} {detail.language.toUpperCase()} {detail.runtime}min
            </Text>
            <Text>{detail.plot}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  else return null
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  desc: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  poster: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.7
  },
  subHead: {
    fontWeight: 'bold',
    fontSize: 18
  }
})
