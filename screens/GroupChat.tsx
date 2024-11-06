import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TabBarProps, TabBarParamsList } from '../types'
// interface Props{

// }

const GroupChat: React.FC<TabBarProps<TabBarParamsList, 'GroupChat'>> = () => {

  return (
    <View style={styles.container}>
      <Text>group chat</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default GroupChat
