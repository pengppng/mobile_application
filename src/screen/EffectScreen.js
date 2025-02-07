import React, { useEffect, useState } from "react";
import {Text,StyleSheet,View, FlatList} from 'react-native'

const EffectScreen = ()=>{
    const [users, setUser] = useState([]);
    useEffect( ()=> {
       const loadUsers = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUser(data);
                console.log(users);
            } catch(error){
                console.log('Error: ',error)
            }
       };
       loadUsers();
       
    },[]);
    return(
       
    <View styles={styles.container}> 
        <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Text style={styles.text}>{item.name}[{item.email}]</Text>}
        />
        
    </View>
    )
 
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 20,
    }
})
export default EffectScreen;