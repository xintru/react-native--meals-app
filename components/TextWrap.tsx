import React, { ReactNode, ReactNodeArray } from 'react'
import { StyleSheet, Text } from 'react-native'

interface TextWrapProps {
  children: ReactNode | ReactNodeArray
  [x: string]: any // workaround for spread operator
}

const TextWrap: React.FC<TextWrapProps> = ({ children, ...other }) => {
  return (
    <Text style={styles.text} {...other}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
})

export default TextWrap
