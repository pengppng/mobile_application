import React, { useReducer } from "react";
import { View, Text , StyleSheet , Button , Alert } from "react-native";


const initialState = { count : 10 } ;

const reducer = (state, action) =>{
    switch (action.type) {
        case "INCREMENT" : 
            return { count : state.count + 1};
        case "DECREMENT" :
            return { count : state.count - 1};;
        case "RESET" :
            return { count : 0};
        default :
            return state;
    }
};
const StateScreen = () =>{
    const [state, dispatch] = useReducer(reducer ,initialState);
    return(
        <View style ={styles.container}>
            <Text style ={styles.text}>{state.count}</Text>
            <View style = {styles.button}>
                <Button 
                    title="Increase"
                    onPress={() => dispatch({type : "INCREMENT"})}
                />
                <Button 
                    title="Decrease" 
                    color="red"
                    onPress={() => dispatch({type : "DECREMENT"})}
                />
                <Button 
                    title="Reset" 
                    color="gray"
                    onPress={() => dispatch({type : "RESET"})}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container :{
        flex : 1, alignItems : "center"
    },
    text : {
        fontSize : 250
    },
    button : {
        width : 250, gap : 5
    }
})

export default StateScreen;