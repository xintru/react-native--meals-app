import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons/index'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../constants/colors'
import { Platform } from 'react-native'

interface CustomHeaderButtonProps {
  title: string
}

const CustomHeaderButton: React.FC<CustomHeaderButtonProps> = ({
  title,
  ...props
}) => {
  return (
    <HeaderButton
      {...props}
      title={title}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : COLORS.primaryColor}
    />
  )
}

export default CustomHeaderButton
