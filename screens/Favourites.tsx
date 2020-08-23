import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const FavouritesScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>Favourites screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default FavouritesScreen
