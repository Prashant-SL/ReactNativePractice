import React from 'react';
import { View, Text, Image } from 'react-native';

const Card = () => {
    return (
        <View style={{
            borderWidth: 1, alignItems: "center", width: 250, marginHorizontal: 55,
            justifyContent: "flex-start"
        }}>
            <Image style={{ width: "100%", height: "50%", marginBottom: 30, }} source={{ uri: "https://reactjs.org/logo-og.png/" }} />
            <View style={{ textAlign: "center", }}>
                <Text style={{ fontWeight: "bold", fontSize: 18, color: "skyblue", textAlign: "left" }}>All Of Us Are Dead</Text>
                <Text style={{ paddingLeft: 10 }}>Card Title </Text>
                <Text style={{ paddingLeft: 2 }}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
            </View>
        </View>
    );
};

export default Card;