import { View, Text, ImageBackground, StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'
import Card from './Card'
import { LinearGradient } from 'expo-linear-gradient';

interface Props{
            id: number; 
            title: string;
            detail: string;
            newsImages: ImageSourcePropType[]
}

const New: React.FC<Props> = (props) => {

const {title, newsImages} = props;

  return (
    <Card>
    {
    (style)=>(
    <View style={{...style,...styles.container}}>
    
      <ImageBackground style={{...styles.backgroundImage}} source={newsImages[0]}>
      <LinearGradient colors={["rgba(53, 51, 51, 0)", "rgba(10, 10, 10, 0.5358)", "rgba(0, 0, 0, 0.5643)"]}
      locations={[0.15,0.8032, 1]}style = {styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          </LinearGradient>
        </ImageBackground>
        
    </View>
    )
  }
  </Card>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden' ,
        width:300,
        height:176,
        flexDirection:"row",
      },
      backgroundImage:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        resizeMode:"stretch"
      },
      text:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding:7,
      },
      textContainer:{
        textAlign: 'center',
        justifyContent:"flex-end",
        alignItems: "center",
        width:"100%",
        height:"100%",
    
    
      }
})
export default New