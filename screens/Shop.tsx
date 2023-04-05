import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TabBarProps, TabBarParamsList } from '../types'
import ShopItem, { Props } from '../components/ShopItem'
import {items} from "../util/Data"
// interface Props{

// }

const Shop: React.FC<TabBarProps<TabBarParamsList, 'Shop'>> = () => {
  const [item, setItem] = useState<Props>();
  useEffect(() => {
   
    setItem(items[0])
  }, [])

  return (
    <View style={styles.container}>
      <ShopItem {...items[0]} />
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

export default Shop