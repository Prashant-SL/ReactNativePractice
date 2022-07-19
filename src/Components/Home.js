import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AllAboutJSX from './AllAboutJSX';
import FlatListDemo from './FlatListDemo';
import ImagesDemo from './ImagesDemo';

const Home = () => {
    let name = "Prashant SL";
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <AllAboutJSX />
            <FlatListDemo />
            {/* <ImagesDemo /> */}
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