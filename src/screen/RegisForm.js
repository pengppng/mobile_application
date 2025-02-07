import React,{ useState} from "react";
import {Text, View , TextInput ,StyleSheet , Button, Alert} from "react-native"
import MsgBox from "../component/MsgBox";
import MyButton from "../component/MyButton";


const RegisForm = () =>{
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState("");
    const [confrimpassword, setConfrimpassword] = useState('');
    const [errors, setErrors] = useState ({
        username : '',
        email : '',
        password : '',
        confrimpassword : ''
    });

    const handleCheck = (field, value) =>{
        switch (field) {
            case 'username':
                setUsername(value);
                setErrors((preErrors) => ({...preErrors, username : ""}));
                break;
            case 'email':
                setEmail(value);
                setErrors((preErrors) => ({...preErrors, email : ""}));
                break;           
            case "password" :
                //const numText = value.replace(/[0-9]/g,'');
                setPassword(value);
                setErrors((preErrors) => ({...preErrors, password : ""}));
                break;
            case "confrimpassword" :
                //const numText = value.replace(/[0-9]/g,'');
                setConfrimpassword(value);
                setErrors((preErrors) => ({...preErrors, confrimpassword : ""}));
                break;
            default:
                break;
        }
    }

    const validateField = (field , value) => {
        let error = ""
        if(!value) {
            error = "This field is required"
        } else{
            if(field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
                error = "Ivaild email address";
            }else if(field === 'password' && value.length < 6){
                error = "Password must be 4";
            }   
        }
        setErrors((preErrors) => ({...preErrors, [field] : error}))
        return error;
    };
    const checkAll = () => {
        const usernameCheck = validateField('username' ,username) 
        const emailCheck = validateField('email',email)
        const passwordCheck = validateField('password',password)
        const confrimpasswordCheck = validateField('comfrimpassword',confrimpassword)
        if(!usernameCheck && !emailCheck && !passwordCheck){
            Alert.alert("Register", "SUCKSEED")
            navigation.navigate('Msg')
        }
    };

    return(
        <View>
            <Text style = {styles.title}>Reister From</Text>
            <TextInput
                style = {styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(value) => handleCheck('username',value)}
            />
            {errors.username ?(
                <Text style = {styles.error}>{errors.username}</Text>
                ) : null}
            <TextInput
                style = {styles.input}
                placeholder="email"
                value={email}
                onChangeText={(value) => handleCheck('email',value)}
            />
            {errors.email ?(
                <Text style = {styles.error}>{errors.email}</Text>
                ) : null}
                <TextInput
                style = {styles.input}
                placeholder="password"
                secureTextEntry
                value={password}
                onChangeText={(value) => handleCheck('password',value)}
            />
               <TextInput
                style = {styles.input}
                placeholder="confrim password"
                secureTextEntry
                value={confrimpassword}
                onChangeText={(value) => handleCheck('confrimpassword',value)}
            />
            {errors.password ?(
                <Text style = {styles.error}>{errors.password}</Text>
                ) : null}
            <MyButton  
                title= "Register" 
                backgroundColor="#1e8449"
                onPress={checkAll}
            />
        </View>
    )
}

const styles =StyleSheet.create({
    container :{ flex : 1, padding : 20 },
    title : { fontSize : 24, fontWeight : "bold"},
    input : {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        fontSize: 18,
        color: 'black',
        backgroundColor: '#fff',
    },
    error : { color : 'red' , marginBottom : 8}
})

export default RegisForm;