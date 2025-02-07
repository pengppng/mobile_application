import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import MyButton from '../component/MyButton';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>List of Screens</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("List")}
            >
                <Text style={styles.buttonText}>Go to List Demo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Component")}
            >
                <Text style={styles.buttonText}>Go to Component Demo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Modal")}
            >
                <Text style={styles.buttonText}>Go to Modal Demo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Swipe")}
            >
                <Text style={styles.buttonText}>Go to Swipe Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Newlist")}
            >
                <Text style={styles.buttonText}>Go to Newlist Demo</Text>
            </TouchableOpacity>

            {/* <Button
                title='ปุ่ม1'
                onPress={() => navigation.navigate("CardScreen")}
            >  
            </Button> */}
            <MyButton backgroundColor="red" title = "ปุ่ม2" onPress={() => navigation.navigate("CardScreen")}/>
            
            <Button title='Effect' onPress={()=> navigation.navigate('Effect')}></Button>
            <Button title='Msg' onPress={() => navigation.navigate('Msg')}></Button>
            <Button title='State' onPress={() => navigation.navigate('State')}></Button>
            <Button title='Regis' onPress={() => navigation.navigate('Regis')}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
    },
    title: {
        fontSize: 28,
        marginBottom: 30,
        color: 'white',
    },
    button: {
        width: '80%',                // Make button width 80% of the screen width
        paddingVertical: 15,         // Adds padding to make the buttons taller (adjustable)
        borderRadius: 5,
        marginVertical: 10,          // Space between each button
        alignItems: 'center',        // Centers text inside the button
        justifyContent: 'center',    // Vertically center the text
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default HomeScreen;
