import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const ButtonsDemo = () => {
    const onPressLearnMore = () => {
        alert("Button Clicked Bro!!")
    }
    return (
        <View>
            <Button title='Click Now' style={styles.button} onPress={() => {
                Alert.alert("Clicked Bro");
            }} />
            <Button
                touchSoundDisabled="false"
                onPress={onPressLearnMore}
                title="Learn More now"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
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