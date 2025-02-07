import React from "react";
import { View, StyleSheet , Image,Text} from "react-native"

const MyCard = ({title,textimg,img}) =>{
    return(
        <View>
            <View style = {styles.Card}>
                <Image style = {styles.ImageStyle} source={{uri: img }}/>
                <Text style = {styles.Title}>{title}</Text>
                <Text>{textimg}</Text>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    Card : {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,  // ระยะห่างจากขอบของ container
        borderRadius: 8,
    },
    Title : {
        fontSize : 18,
        fontWeight : "bold"
    },

    ImageStyle: {
        width: 380,
        height: 350,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default MyCard;