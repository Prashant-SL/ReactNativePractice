import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const ButtonsDemo = () => {
    return (
        <View>
            <Button title='Click Now' style={styles.button} onPress={() => {
                Alert.alert("Clicked Bro");
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        marginVertical: "auto",
        margin: 10,
        padding: 80,
    }
})

export default ButtonsDemo;