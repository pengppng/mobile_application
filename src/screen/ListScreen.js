import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { SwipeListView } from "react-native-swipe-list-view";

const ListScreen = () => {

    const [history, setHistory] = useState([
        { id: "1", name: "Piya", status: "Phone", time: "Yesterday" },
        { id: "2", name: "Somchai", status: "Mobile", time: "Yesterday" },
        { id: "3", name: "Piya", status: "Phone", time: "Sunday" },
        { id: "4", name: "Mom", status: "Phone", time: "Sunday" },
        { id: "5", name: "Somchai", status: "Mobile", time: "Sunday" },
        { id: "6", name: "Piya", status: "Phone", time: "Saturday" },
        { id: "7", name: "Mom", status: "Phone", time: "Saturday" },
        { id: "8", name: "Somchai", status: "Mobile", time: "Friday" },
        { id: "9", name: "Somchai", status: "Mobile", time: "Thursday" },
        { id: "10", name: "JohnSomchai", status: "Phone", time: "Thursday" },
        { id: "11", name: "Piya", status: "Phone", time: "Thursday" },
        { id: "12", name: "Mom", status: "Phone", time: "Thursday" },
    ]);

    const [isVisible, setIsVisible] = useState(false);
    const [isName, setname] = useState(null);

    // Function to delete an item
    const deleteItem = (id) => {
        const newListData = history.filter(item => item.id !== id);
        setHistory(newListData);  // Update the list
    };

    return (
        <View style={styles.Background}>
            <Text style={{ fontSize: 28, color: 'white', alignSelf: "flex-start", margin: 10 }}>Recent</Text>
            <SwipeListView
                keyExtractor={(item) => item.id}
                data={history}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => [setIsVisible(true), setname(item.name)]}>
                        <View style={styles.RecordView}>
                            <View style={styles.LPart}>
                                <Image
                                    style={styles.ImageStyle}
                                    source={{
                                        uri: "https://render.albiononline.com/v1/spell/VANITY_WARBANNER_PRESENT_FW_FORTSTERLING"
                                    }}
                                />
                            </View>
                            <View style={styles.MPart}>
                                <Text style={styles.titleText}> {item.name}</Text>
                                <Text style={styles.subtitleText}> {item.status}</Text>
                            </View>
                            <View style={styles.RPart}>
                                <Text style={styles.DayText}>{item.time}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                renderHiddenItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => deleteItem(item.id)}
                    >
                        <Text style={{alignSelf: "flex-end", fontSize : 25}}> ลบทิ้ง </Text>
                    </TouchableOpacity>
                )}
                rightOpenValue={-100}
                onSwipeValueChange={(swipeData) =>{
                    const { key, value} = swipeData;
                    value < -300 ? deleteItem(key) : null;
                }}
            />
            <Modal
                transparent={true}
                animationType="fade"
                visible={isVisible}
                onRequestClose={() => setIsVisible(false)}>
                <View style={styles.ModalView}>
                    <View style={styles.ModalContainer}>
                        <Text style={styles.msg}>กำลังโทรหา...</Text>
                        <Image
                            style={styles.ImageStyle}
                            source={{
                                uri: "https://render.albiononline.com/v1/spell/VANITY_WARBANNER_PRESENT_FW_FORTSTERLING"
                            }}
                        />
                        <Text style={styles.msg}>{isName}</Text>
                        <TouchableOpacity
                            style={styles.IconButton}
                            onPress={() => setIsVisible(false)}
                        >
                            <Icon name="call-end" size={34} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    LPart: {
        flex: 0.2,
    },
    RPart: {
        direction: "rtl",
        justifyContent: "center",
        flex: 0.4,
    },
    MPart: {
        flex: 0.6,
        
    },
    Background: {
        flex: 1,
        backgroundColor: "black",
    },
    RecordView: {
        flex: 1,
        flexDirection: "row",
        height: 100,
        padding: 10,
        borderColor: "white",
        borderBottomWidth: 1,
        borderRightWidth: 0,
        borderStyle: "dotted",
        backgroundColor: "black",
    },
    titleText: {
        fontSize: 30,
        alignSelf: "flex-start",
        fontWeight: "bold",
        color: "white"
    },
    subtitleText: {
        alignSelf: "flex-start",
        fontSize: 18,
        color: "gray",
    },
    DayText: {
        color: 'white',
        fontSize: 18
    },
    ImageStyle: {
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    ModalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",

    },
    ModalContainer: {
        width: 300,
        backgroundColor: "#f7ede2",
        borderRadius: 20,
        alignItems: "center",
        elevation: 5
    },
    IconButton: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    msg: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20,
    },
    actionButton: {
        backgroundColor: "#FF5252",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100%",
        paddingHorizontal: 20
    },
})

export default ListScreen;
