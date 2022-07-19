import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const AllAboutJSX = () => {
    let details = {
        name: "PrashantSL",
        age: 21,
        degree: "BCA"
    }
    return (
        <View>
            <Text style={styles.container}>
                Hi My name is {details.name} & age is {details.age}. I have done my graduation is {details.degree}
            </Text>
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        // flex: 2,
        marginTop: 300,
        alignContent: "center",
        justifyContent: "center",
        fontSize: 24,
        padding: 0,
        margin: 0,
    }
})
export default AllAboutJSX;