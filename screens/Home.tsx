import { View, StyleSheet, FlatList} from 'react-native'
import React from 'react'
import {TabBarParamsList, TabBarProps} from '../types'
import New from '../components/New'
import Match from '../components/Match'
import ShopCatelog from '../components/ShopCatelog'
import {news} from '../util/Data'

//we don't need the Props interface because it is a navigation screen
// interface Props{

// }
type HomeScreenNavigationProp = TabBarProps<TabBarParamsList,'Home'>['navigation']
type HomeScreenRouteProp = TabBarProps<TabBarParamsList, 'Home'>['route']

const Home:React.FC<TabBarProps<TabBarParamsList,'Home'>> = () => {

  const comp = [
    {key: 1,Component: New, props: news[0]},
    {key: 2,Component: Match, props: news[0]},
    {key: 3,Component: ShopCatelog, props: news[0]},
    {key: 4,Component: New, props: news[1]},
    {key: 5,Component: Match, props: news[0]},
    {key: 6,Component: New, props: news[2]},
    {key: 7,Component: Match, props: news[0]},
    {key: 8,Component: New, props: news[0]},
    {key: 9,Component: Match, props: news[0]},
    {key: 10,Component: ShopCatelog, props: news[0]},

]

  return (
    <View style={styles.mainContainer}>

      <FlatList
                contentContainerStyle={{
                  justifyContent: "center",
                  overflow: "visible",
                  width:"100%",
                  alignItems: "center"
                }}
                data={comp}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={()=>(
                  <View style={{height:20}}/> 
                  )}
                ListHeaderComponent={()=>(
                  <View style={{height:110}}/>
                )}
                renderItem = {({item})=>{
                  if(item.Component.name !== "New"){
                    
                    return(
                      <item.Component id={1} title={item.props.title} detail={""} newsImages={item.props.newsImages}/>
                    );
                    
                  }
                  else{
                    
                    return(
                      <item.Component id={1} title={item.props.title} detail={""} newsImages={item.props.newsImages}/>
                    );
              
                  }
                }}
              />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    justifyContent:'center',
    alignItems:'center',
    // width: "100%",
    flex: 1,
    flexDirection: 'row',
    overflow: "visible",
    height:  "100%",
  }
})

export default Home