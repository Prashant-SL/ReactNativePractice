// import { View, Text } from 'react-native'
// import React from 'react'

// const Home = () => {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   )
// }
// export default Home;


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textColor}>Open up Home.js now bro to start working and queen and childrens hi bro not fast??? on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        auto: 0,
    },
    textColor: {
        alignItems: 'center',
        justifyContent: 'center',
        color: "red",
        backgroundColor: "yellow"
    },
    box: {
        margin: 0,
        auto: 0,
    }
});

export default Home;