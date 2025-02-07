import React, { useState } from "react";
import { View, Text, StyleSheet, Modal ,TouchableOpacity,Button} from 'react-native';
import  Icon  from "react-native-vector-icons/MaterialIcons";


const ModalScreen = () =>{
    const [isVisible, setIsVisible] = useState(false);
    return( 
        <View style = {styles.Viewstyle}>
            <Text style = {styles.TextStlye}>This is Modal</Text>

            {/*<Button title="ลองโทร" onPress={()=> setIsVisible(true)}/> */}
            <TouchableOpacity style = {styles.IconButton} onPress={()=> setIsVisible(true)}>
                <Icon name='call' size={34} color="green"/>
            </TouchableOpacity>
            <Modal 
                transparent={true}
                animationType="fade"
                visible={isVisible}
                onRequestClose={() => setIsVisible(false)}>
                    <View style = {styles.ModalView}>
                        <View style = {styles.ModalContainer}>
                            <Text style = {styles.title}>กำลังโทรหา...</Text>
                            <Text style = {styles.msg}>อ. ฮาแลน์</Text>
                            <TouchableOpacity 
                                style = {styles.IconButton} 
                                onPress={() => setIsVisible(false)}
                            >
                                <Icon name="call-end" size={34} color="red"/>
                            </TouchableOpacity>
                        </View>
                    </View>
            </Modal>
        </View>
    );
};

const styles =StyleSheet.create({
    Viewstyle:{
        flex : 1,
        justifyContent :"center",
        alignItems : "center",
    },
    TextStlye :{
        fontSize : 28
    },
    ModalContainer :{
        width : 300,
        backgroundColor: "#f7ede2",
        borderRadius : 20,
        alignItems : "center",
        elevation : 5
    },
    title:{
        fontSize : 28,
        fontWeight : "bold",
        marginBottom : 10,
    },
    msg : {
        fontSize : 20,
        textAlign: "center",
        marginBottom : 20,
    },
    modalBotton:{
        backgroundColor : "red",
        paddingVertical : 10,
        paddingHorizontal: 20,
        borderRadius : 5
    },
    modalButtonText:{
        color : "white",
        fontSize : 18,
        fontWeight : "bold"
    },
    ModalView:{
        flex : 1,
        justifyContent :"center",
        alignItems : "center",
        backgroundColor : "rgba(0,0,0,0.5)"
    },
    IconButton:{
        backgroundColor : 'black',
        paddingVertical : 10,
        paddingHorizontal : 20,
        borderRadius : 10,
    }
});

export default ModalScreen;