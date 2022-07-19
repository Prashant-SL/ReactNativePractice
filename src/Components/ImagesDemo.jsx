import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const ImagesDemo = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={require("../../assets/pexels.jpg")} />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
    imageStyle: {
        height: 300,
        width: 300
    }
})

export default ImagesDemo