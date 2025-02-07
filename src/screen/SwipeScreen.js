import React, { useState } from "react"
import { View, Text, StyleSheet ,TouchableOpacity} from "react-native"
import { SwipeListView } from "react-native-swipe-list-view";

const SwipeScreen = () =>{
    const[listData, setListData] = useState([
        {id : "1" ,text : "รายการที่ 1"},
        {id : "2" ,text : "รายการที่ 2"},
        {id : "3" ,text : "รายการที่ 3"},
        {id : "4" ,text : "รายการที่ 4"},
        {id : "5" ,text : "รายการที่ 5"},
    ]);
    // ฟังก์ชันในการลบรายการ
    const deleteItem = (id) => {
        const newListData = listData.filter(item => item.id !== id);
        setListData(newListData);  // อัพเดทสถานะของ listData
    };
    return(
        <View style = {styles.container}>
            <Text>This is SwipeScreen </Text>
            <SwipeListView
                data={listData}
                keyExtractor = {(item) => item.id}
                renderItem={({item}) => (
                    <View style = {styles.rowFont}>
                        <Text style = {styles.itemText}> {item.id} </Text>
                    </View>
                )}
                renderHiddenItem={({item}) => (
                    <TouchableOpacity 
                        style = {styles.actionButton}
                        onPress={() => deleteItem(item.id)}
                    >
                        <Text style = {styles.actionButton}> ลบทิ้ง </Text>
                    </TouchableOpacity>
                )}
                rightOpenValue={-100}
                //disableRightSwipe = {true}
                onSwipeValueChange={(swipeData) =>{
                    const { key, value} = swipeData;
                    value < -300 ? deleteItem(key) : null;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 15,
    },
    itemText : {
        fontSize : 28,
    },
    listItem :{
        backgroundColor : "#fff",
        padding : 20,
        shadowColor : "#000",
        shadowOffset : {width : 0 , height : 2},
        shadowOpacity : 0.2,
        elevation : 3,
    },
    actionButton : {
        backgroundColor : "#FF5252",
        justifyContent : "center",
        alignItems : "flex-end",
        height : "100%",
        paddingHorizontal : 20
    },
    rowFont : {
        backgroundColor :"#fff",
        borderBottomWidth : 1,
        borderBlockColor : "#ccc",
        padding : 20,
        justifyContent : 'center'

    },
});

export default SwipeScreen;