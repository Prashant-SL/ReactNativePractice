import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const submitData = () => {
        if (username.length <= 5) {
            Alert.alert("Validation Failed", "Username should be of length more than 5");
        }
        else if (password.length < 8) {
            Alert.alert("Validation Failed", "Password should be of length more than 8");
        }
        else {
            Alert.alert("Successful", "Login Successful")
        }
    }
    return (
        <View style={{ marginTop: 60 }}>
            <Text style={styles.heading}>Login Form</Text>
            <Text>Contact us regarding any query to us via contact@prashant-sl.netlify.app</Text>
            <View style={styles.inputContainer}>
                <Text>Enter Your Email</Text>
                <TextInput style={styles.input} value={username} onChangeText={(data) => setUsername(data)} />
            </View>
            <View style={styles.inputContainer}>
                <Text>Enter Your Password</Text>
                <TextInput autoCorrect={false} secureTextEntry={true} style={[styles.input, styles.password]} value={password} onChangeText={(data) => setPassword(data)} />
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => submitData()}>
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