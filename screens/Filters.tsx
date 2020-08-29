import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FiltersScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>Filters screen!</Text>
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

export default FiltersScreen
