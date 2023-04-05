import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TabBarProps, TabBarParamsList } from '../types'
import Match from '../components/Match'

// interface Props{

// }

const Matches:React.FC<TabBarProps<TabBarParamsList,'Matches'>> = () => {
  
  return (
    <View style={styles.container}>
      <Match/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // height:"100%",
    justifyContent:'center',
    alignItems:'center',
  }
})

export default Matches