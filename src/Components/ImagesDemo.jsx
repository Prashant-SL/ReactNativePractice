import React from 'react'
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native'

const ImagesDemo = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageStyle} source={{ uri: "https://reactjs.org/logo-og.png/" }}>
                <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>This is an image</Text>
            </ImageBackground>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "powderblue"
    },
    imageStyle: {
        height: 386,
        width: 386
    }
})

export default ImagesDemo