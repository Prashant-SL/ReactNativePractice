import React from 'react';
import { View, Text, Image } from 'react-native';

const Card = () => {
    return (
        <View style={{
            borderWidth: 1, alignItems: "center", width: 300, marginHorizontal: 40,
            justifyContent: "center", margin: "auto"
        }}>
            <Image style={{ width: "100%", height: "50%" }} source={{ uri: "https://reactjs.org/logo-og.png/" }} />
            <View style={{ textAlign: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 20, }}>All Of Us Are Dead</Text>
                <Text>Card</Text>
                <Text>Card</Text>
            </View >
        </View >
    )
}

export default Card;