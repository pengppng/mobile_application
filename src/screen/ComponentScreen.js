import React from "react"
import {View,Text,StyleSheet} from 'react-native'

const ComponentScreen = () =>{
    //const msg = ["Bye Bye!" , "Sad" , "123"];
    const msg = <Text> Bye again</Text>;
    return(
        <View style = {styles.container}>
            <Text style = {styles.TextStyle}> this is ComponentScreen  </Text>
            <Text style = {styles.TextStyle}> {msg} </Text>
            {msg}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent : "center",
        alignItems : "center"
    },
    TextStyle:{
        fontSize:28
    },
})
export default ComponentScreen;