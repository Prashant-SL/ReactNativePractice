import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <View>

            <Text>Counter : {count}</Text>

            <TouchableOpacity onPress={() => {
                setCount(count + 1);
            }} style={styles.button}>
                <Text>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.button}>
                <Text>-1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCount(0)} style={styles.button}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "powderblue",
        color: "white",
        width: 50,
        padding: 10,
        margin: 2,
        borderWidth: 1
    }
})

export default Counter;