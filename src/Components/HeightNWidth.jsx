import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeightNWidth = () => {
    return (
        <View style={{ height: "100%" }}>
            <View style={{
                height: "15%",
                flex: 1,
                backgroundColor: "powderblue"
            }}></View>
            <View style={{
                height: "33%",
                flex: 2,
                backgroundColor: "skyblue"
            }}></View>
            <View style={{
                height: "66%",
                flex: 3,
                backgroundColor: "blue"
            }}>
                <View style={{
                    height: "33%",
                    flex: 1,
                    backgroundColor: "orange"
                }}></View>
                <View style={{
                    height: "33%",
                    flex: 1,
                    backgroundColor: "white"
                }}></View>
                <View style={{
                    height: "33%",
                    flex: 1,
                    backgroundColor: "green"
                }}></View>
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({
//     length: 
// })

export default HeightNWidth