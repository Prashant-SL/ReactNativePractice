import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllAboutJSX from './AllAboutJSX';

const Home = () => {
    let name = "Prashant SL";
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <AllAboutJSX />
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