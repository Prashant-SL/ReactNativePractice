import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';

const TouchButton = () => {
    const [count, setCount] = useState("blue");
    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 28 }}>{count}</Text>
            <TouchableOpacity style={{
                backgroundColor: count, justifyContent: "center", alignItems: "center",
                width: 200, margin: "auto", alignContent: "center", padding: 10, marginLeft: 100
            }} onPress={() => {
                setCount(count ? "red" : "blue");
            }}>
                <Text>Submit Now</Text>
                {/* <Image style={{ width: 250, height: 250 }} source={{ uri: "https://reactjs.org/logo-og.png/" }} /> */}
            </TouchableOpacity>
        </View >
    )
}

export default TouchButton