import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

function FlatListDemo() {
    const names = [
        { index: "1", name: "Prashant SL" },
        { index: "2", name: "Yash" },
        { index: "3", name: "Puneeth Rajkumar" },
        { index: "4", name: "Mahendra Singh Dhoni" },
        { index: "5", name: "Prashant SL" },
        { index: "6", name: "Yash" },
        { index: "7", name: "Puneeth Rajkumar" },
        { index: "8", name: "Mahendra Singh Dhoni" },
        { index: "9", name: "Prashant SL" },
        { index: "10", name: "Yash" }
    ]
    return (
        <View>
            <FlatList showsHorizontalScrollIndicator={false} keyExtractor={(key) => {
                return key.index;
            }} data={names} renderItem={(e) => {
                return (
                    <Text style={styles.text}>{e.item.name}</Text>
                )
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        backgroundColor: "blue",
        margin: 9,
        padding: 10,
        color: "white",
    },
    list: {
        // border: "4px solid red"
        // width: 360,
        // height: 10
    }
})
export default FlatListDemo;