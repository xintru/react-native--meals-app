import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import Meal from '../models/Meal'
import TextWrap from './TextWrap'

interface MealItemProps {
  item: Meal
  onSelect(): void
}

const MealItem: React.FC<MealItemProps> = ({ item, onSelect }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.bgImage}
            >
              <TextWrap numberOfLines={1} style={styles.title}>
                {item.title}
              </TextWrap>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <TextWrap>{item.duration} minutes</TextWrap>
            <TextWrap>{item.complexity.toUpperCase()}</TextWrap>
            <TextWrap>{item.affordability.toUpperCase()}</TextWrap>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
})

export default MealItem
