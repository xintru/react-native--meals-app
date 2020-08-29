import React from 'react'
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import Category from '../models/Category'
import TextWrap from './TextWrap'

interface CategoryGridTileProps {
  item: Category
  onSelect(): void
}

const CategoryGridTile: React.FC<CategoryGridTileProps> = ({
  item,
  onSelect,
}) => {
  const TouchableComponent =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity

  return (
    <View style={styles.gridItem}>
      {/* @ts-ignore */}
      <TouchableComponent style={{ flex: 1 }} onPress={onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: item.color } }}
        >
          <TextWrap style={styles.title} numberOfLines={2}>
            {item.title}
          </TextWrap>
        </View>
      </TouchableComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 4,
  },
  container: {
    flex: 1,
    opacity: 0.95,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    paddingVertical: 18,
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'right',
    textShadowColor: 'black',
    textShadowRadius: 4,
  },
})

export default CategoryGridTile
