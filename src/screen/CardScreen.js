import React, { useEffect, useState } from "react";
import { ScrollView , Text , StyleSheet ,View, Image, FlatList ,TextInput} from 'react-native'
import MyCard from "../component/MyCard";

const CardScreen = () => {
//ข้างล่างคือ array
    const heroes = [
        // ข้อมูลที่ใช้
        {
            id : '1',
            title : 'SUNSPOT',
            content : 'Sunspot channels solar energy to become a powerhouse of unbelievable strength, helps the X-Men, and runs a multi-billion dollar company.',
            image : 'https://cdn.marvel.com/content/1x/306ssp_com_crd_01.jpg'
        },
            {
            id : '2',
            title : 'ABOMINATION',
            content : 'Savage and full of a blind rage, Abomination is the Hulk’s foremost foe and while able to crush him, he often faces defeat himself.',
            image : 'https://cdn.marvel.com/content/1x/348abm_com_crd_01.jpg'
           },
           {
            id : '3',
            title : 'Aero',
            content : 'With the power of the wind at her command, Lei Ling is the master of the sky and the protector of Shanghai!',
            image : 'https://cdn.marvel.com/content/1x/428all_com_crd_01.jpg'
           },
    ];

    const [searchKey, setsearchKey] = useState('');
    const [currrentHeroes,setCurrrentHeroes] = useState(heroes);

    useEffect(()=> {
        const interval = setInterval(()=>{
            console.log('currentHeroes is changed')    
        },2000)//ถูกกระตุ้นทุกๆ 2 วินาที

        return() => {
            clearInterval(interval);
            console.log('Interval Stopped')
        };
    },[]);
    // [] Initial loading

    const handleSearch = (key) => {
        setsearchKey(key);
        if (key.trim() === ""){
            setCurrrentHeroes(heroes);
        } else {
            const results = heroes.filter((hero) => 
                hero.title.toLowerCase().includes(key.toLowerCase())
            );
            setCurrrentHeroes(results);
        }
    }

    return(
        <View style = {styles.container}>
            {
            /* แบบปกติ
            <View style = {styles.Card}>
                <Image
                    style={styles.ImageStyle}
                    source={{ uri: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Wolverine.webp"}}/>
                <Text style = {styles.Title}>Wolverine</Text>
                <Text>From the northern wilderness of Canada hails one of the gruffest, most irascible, totally cynical and brooding member of the X-Men ever to grace the team with his presence.</Text>
            </View>
            <View style = {styles.Card}>
                <Image
                    style={styles.ImageStyle}
                    source={{ uri: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_02.webp"}}/>
                <Text style = {styles.Title}>Deadpool</Text>
                <Text>Ever-quipping mercenary Wade Wilson’s healing factor—and big mouth—make him one of the most relentlessly wisecracking heroes in the universe.</Text>
            </View> */}
            
            {/* <MyCard 
                img = "https://snapjson.untapped.gg/art/render/framebreak/common/512/Wolverine.webp" 
                title = "Wolverine" 
                textimg = "From the northern wilderness of Canada hails one of the gruffest, most irascible, totally cynical and brooding member of the X-Men ever to grace the team with his presence."
            />
            
            <MyCard
                img = 'https://cdn.marvel.com/content/1x/306ssp_com_crd_01.jpg'
                title='SUNSPOT'
                textimg='Sunspot channels solar energy to become a powerhouse of unbelievable strength, helps the X-Men, and runs a multi-billion dollar company.'
            />
            <MyCard
                img = 'https://cdn.marvel.com/content/1x/348abm_com_crd_01.jpg'
                title='ABOMINATION'
                textimg='Savage and full of a blind rage, Abomination is the Hulk’s foremost foe and while able to crush him, he often faces defeat himself.'
            />
            <MyCard
                img = 'https://cdn.marvel.com/content/1x/428all_com_crd_01.jpg'
                title='Aero'
                textimg='With the power of the wind at her command, Lei Ling is the master of the sky and the protector of Shanghai!'
            />  */}
            <TextInput 
                style ={styles.input} 
                value={searchKey} 
                onChangeText={handleSearch}
            />
            <Text style ={{ color : "pink", fontSize : 30}}>{searchKey}</Text>
            <FlatList
                keyExtractor={(heroes) => heroes.id}
                data={currrentHeroes}
                renderItem={({item}) => {
                return(
                    <MyCard
                        img = {item.image}
                        title = {item.title}
                        textimg = {item.content}
                    />
                )
                }}
                ListEmptyComponent={<Text style ={styles.noHero}>No hero found</Text>}
            />
        
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor : "gray",
        flex: 1,
    },
    input : {
        marginTop : 10,
        borderWidth : 1,
        borderColor : "#ccc",
        borderRadius : 5,
        marginBottom : 10,
        padding : 10,
        fontSize : 18,
        color : 'black',
        backgroundColor : '#fff',
    },
    noHero : {
        textAlign : "center",
        fontSize : 24,
        color : "black"
    },
});

export default CardScreen;