import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Card from './Card'

interface Props{

}

const Match:React.FC<Props> = () => {
  return (
    
        <Card>
            {
                (style)=>(
                    <View style={{...style,...styles.container}}>

                        <View style={styles.matchContainer}>
                            <View style={styles.match}>
                                <Image source={require("../assets/DireDawaKenema.png")} style={styles.image}/>
                                <Text style={styles.text}>Dire Dawa Kenema FC</Text>
                            </View>
                            <View style={{alignItems: "center",flex: 1}}>
                                <Text>1 - 2</Text>
                            </View>
                            <View style={styles.match}>
                                <Image source={require("../assets/Logo.png")} style={styles.image}/>
                                <Text style={styles.text}>Ethiopia Buna SC</Text>
                            </View>
                        </View>
                        <Card>
                            {
                                (style)=>(
                                    <View style={{...style, ...styles.header}}>
                                        <Text style={{color:"#9D9EA0"}}>Ethiopian premier League</Text>
                                    </View>
                                )
                            }
                        </Card>
                    </View>
                )
                }
  
        </Card>
  )
}

const styles= StyleSheet.create({
   container:{
        justifyContent:'space-between',
        alignItems:'center',
        overflow:'hidden',
        width:300,
        height:130,
   },
   header:{
    backgroundColor:"#F2F3F5",
    width:295,
    height: 33,
    marginBottom: 5
   },
   image: {
    width: 60,
    height: 60, 
   },
   match:{
    justifyContent: "center",
    alignItems: "center",
    width:"40%"
   },
   matchContainer:{
    flexDirection: "row",
    width:"100%",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop:8


},
   text: {
    alignItems: "center",
    justifycontent: "center",
    textAlign: "center",
    fontSize:10
   }
})

export default Match