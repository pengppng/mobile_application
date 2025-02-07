import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, FlatList } from 'react-native';
import MyButton from "../component/MyButton";
import MsgBox from "../component/MsgBox";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = '@cards_data';

const MsgScreen = () => {
    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const addMsg = async () => {
        const newMsg = { id: Date.now().toString(), title, content };
        const updatedCards = [newMsg, ...cards]; // Use 'cards' here, not 'pCards'
        setCards(updatedCards);
        setTitle('');
        setContent('');

        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCards));
        } catch (error) {
            console.log('Error', error);
        }
    };

    const loadCards = async () => {
        try {
            const initCards = await AsyncStorage.getItem(STORAGE_KEY);
            if (initCards) {
                setCards(JSON.parse(initCards));
            }
            console.log(initCards);
        } catch (error) {
            console.error('Failed to load data', error);
        }
    };
    const clearCards = async () => {
        try {
            await AsyncStorage.clear();
            setCards([])
        } catch (error) {
            console.error('Error',error);
        }
    }

    useEffect(() => {
        loadCards();
    }, []); // This will only run once when the component mounts

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder="ใส่หัวข้อ"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={[styles.input, { height: 100 }]}
                    placeholder="ใส่เนื้อหา"
                    multiline={true}
                    numberOfLines={5}
                    textAlignVertical="top"
                    value={content}
                    onChangeText={setContent}
                />
                <MyButton
                    title='Submit'
                    backgroundColor="green"
                    onPress={addMsg}
                />
                <MyButton
                    title='Clear'
                    backgroundColor="red"
                    onPress={clearCards}
                />
                <Text>
                    {title}, {content}
                </Text>
            </View>
            <FlatList
                data={cards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <MsgBox title={item.title} component={item.content} />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    input: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        fontSize: 18,
        color: 'black',
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: 'gray',
        padding: 5
    }
});

export default MsgScreen;
