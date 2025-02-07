import React from "react";
import {View,StyleSheet,Text} from "react-native"

const MsgBox = ({title,component}) => {
    return(
        <View>
            <View style = {styles.Box}>
                <Text style = {styles.Title}>{title}</Text>
                <Text>{component}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Box : {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,  // ระยะห่างจากขอบของ container
        borderRadius: 8,
        
    },
    Title : {
        fontSize : 18,
        fontWeight : "bold"
    },
})

export default MsgBox;