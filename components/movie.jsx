import React from 'react'
import {
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'

import FavoriteButton from './favButton'

const Movie = ({ data: { id, poster }, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Movie Detail', { id: id })
      }}
    >
      <View style={styles.imageContainer}>
        <FavoriteButton id={id} size={20} />
        <Image source={{ uri: poster }} style={styles.image} />
      </View>
    </TouchableOpacity>
  )
}

const { width, height } = Dimensions.get('window')
const [rows, cols] = [3, 3]
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20) / rows - 10,
    width: (width - 10) / cols - 10
  },
  imageContainer: {
    flex: 1
  },
  image: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject
  },
  title: {
    fontSize: 14,
    marginTop: 2,
    alignSelf: 'flex-start'
  }
})
export default Movie
