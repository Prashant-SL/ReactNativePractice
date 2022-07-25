import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Form = () => {
    return (
        <View style={{ marginTop: 60 }}>
            <Text style={styles.heading}>Login Form</Text>
            <Text>Contact us regarding any query to us via contact@prashant-sl.netlify.app</Text>
            <View style={styles.inputContainer}>
                <Text>Enter Your Email</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text>Enter Your Password</Text>
                <TextInput autoCorrect={false} secureTextEntry={true} style={[styles.input, styles.password]} />
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={{ color: "white", padding: 5, textAlign: "center" }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        fontWeight: "600",
        fontSize: 28,
    },
    input: {
        borderColor: "#01090940",
        borderWidth: 1,
        marginVertical: 9
    },
    inputContainer: {
        marginTop: 20,
        paddingHorizontal: 10
    },
    btn: {
        backgroundColor: "green",
        color: "white",
        width: 90,
        borderRadius: 20,
        alignSelf: "center",
        marginTop: 10
    }
})

export default Form