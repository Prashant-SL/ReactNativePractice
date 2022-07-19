import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    let name = "Prashant SL";
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.textColor}>Welcome {name} Bro!!!!</Text>
            <Text style={styles.textColor2}>We love React Native Bro!!!!</Text>
            <Text>Hi!!!! My name is {name} Bro!!!!</Text>
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
        fontSize: 40,
        fontWeight: "bold",
        color: "blue",
    },
    textColor2: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: "bold",
        color: "blue",
    },
    box: {
        margin: 0,
        auto: 0,
    }
});

export default Home;