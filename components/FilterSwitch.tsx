import React from 'react'
import TextWrap from './TextWrap'
import { Platform, StyleSheet, Switch, View } from 'react-native'
import COLORS from '../constants/colors'

interface FilterSwitchProps {
  title: string
  value: boolean
  setNewValue(val: boolean): void
}

const FilterSwitch: React.FC<FilterSwitchProps> = ({
  title,
  value,
  setNewValue,
}) => {
  return (
    <View style={styles.filterContainer}>
      <TextWrap>{title}</TextWrap>
      <Switch
        trackColor={{
          true: COLORS.primaryColor,
          false: '#ccc',
        }}
        thumbColor={Platform.OS === 'android' ? COLORS.primaryColor : ''}
        value={value}
        onValueChange={(newVal: boolean) => setNewValue(newVal)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
})

export default FilterSwitch
