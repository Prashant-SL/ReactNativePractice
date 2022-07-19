import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

const ImagesDemo = () => {
    return (
        <View style={styles.container}>
            <Text>This is an image</Text>
            <Image style={styles.imageStyle} source={require("../../assets/pexels.jpg")} />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        height: 386,
        width: 386
    }
})

export default ImagesDemo