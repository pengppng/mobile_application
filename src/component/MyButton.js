import React from "react";
import { View, Text , StyleSheet, Button, TouchableOpacity} from 'react-native'

const MyButton = ({title,onPress,backgroundColor = '#959d90'}) => {
    return(
        <TouchableOpacity style = {[styles.Button , {backgroundColor}]} onPress={onPress}>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: {
        alignItems : 'center',
        padding : 10,
        borderRadius : 8,
        height : 50,
        width : '100%',
        marginTop : 10
    },
    text : { 
        fontSize : 18,
        color : "#efefe9",
        fontWeight : "bold"
    },
});

export default MyButton;