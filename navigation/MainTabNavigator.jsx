import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import {
  HomeScreen,
  FavoritesScreen,
  MovieScreen,
  SearchScreen
} from '../screens'

const Tab = createMaterialBottomTabNavigator()
const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const FavoriteStack = createStackNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Box Office' component={HomeScreen} />
    <HomeStack.Screen name='Movie Detail' component={MovieScreen} />
  </HomeStack.Navigator>
)

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name='Search' component={SearchScreen} />
    <SearchStack.Screen name='Movie Detail' component={MovieScreen} />
  </SearchStack.Navigator>
)

const FavoriteStackScreen = () => (
  <FavoriteStack.Navigator>
    <FavoriteStack.Screen name='Favorites' component={FavoritesScreen} />
    <FavoriteStack.Screen name='Movie Detail' component={MovieScreen} />
  </FavoriteStack.Navigator>
)

export default () => {
  return (
    <Tab.Navigator initialRouteName='Home' activeColor='#3C3C3C' shifting>
      <Tab.Screen
        name='Home'
        component={HomeStackScreen}
        options={{
          tabBarColor: '#9FC2A8',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='library-movie'
              color={color}
              size={26}
            />
          )
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchStackScreen}
        options={{
          tabBarColor: '#9EDEDB',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='image-search'
              color={color}
              size={26}
            />
          )
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoriteStackScreen}
        options={{
          tabBarColor: '#F9C242',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='star' color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
