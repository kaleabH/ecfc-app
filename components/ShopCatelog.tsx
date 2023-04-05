import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopItem from './ShopItem'
import {items} from '../util/Data'

interface Props{

}

const ShopCatelog:React.FC<Props> = () => {
  return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={{color: "#693214", fontWeight: "bold"}}>shop</Text>
            <Text style={{color: "#F25523", fontWeight: "bold"}}>See all</Text>
        </View>
        <View style={{width:360, alignItems: 'center', justifyContent:'center'}}>
         <FlatList
            contentContainerStyle={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                justifyContent: "space-between",
                paddingBottom:10,
              
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={items}
            ItemSeparatorComponent={
                ()=>{
                    return <View style={{width:20}}></View>
                }
            }
            ListHeaderComponent={()=>(
                <View style={{width:30}}/>
              )}
              ListFooterComponent={()=>(
                <View style={{width:30}}/>
              )}
            renderItem = {({item})=>{

              return(
                 <ShopItem {...item}/>
              )
            }}
          />
        </View>
    </View>
  )
}

export default ShopCatelog

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:300,
        height:190,
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    }
})