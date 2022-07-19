import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

function FlatListDemo() {
    const names = [
        { index: "1", name: "Prashant SL" },
        { index: "2", name: "Yash" },
        { index: "3", name: "Puneeth Rajkumar" },
        { index: "4", name: "Mahendra Singh Dhoni" },
    ]
    return (
        <View>
            <FlatList keyExtractor={(key) => {
                return key.index;
            }}
                data={names} renderItem={(e) => {
                    return (
                        <Text style={styles.text}>{e.item.name}</Text>
                    )
                }} />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        backgroundColor: "black",
        color: "#fffaaa",
    }
})
export default FlatListDemo;