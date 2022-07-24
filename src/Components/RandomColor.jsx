import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'

const RandomColor = () => {

    const [color, setColor] = useState([]);
    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    }
    console.log('randomColor:', randomColor())
    return (
        <TouchableOpacity onPress={() => {
            setColor([randomColor()]);
        }}>
            <View style={{ backgroundColor: `${color}`, height: 100 }}>
                <Text>RandomColor</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    div: {
        width: 100,
        height: 100,
        textAlign: "center",
        alignSelf: "center",
        color: "white",
        justifyContent: "center",
    }
})

export default RandomColor