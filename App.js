import { View, StyleSheet } from 'react-native';
import Home from './src/Components/Home';
import ImagesDemo from './src/Components/ImagesDemo';

function App() {
  return (
    <View style={styles.container}>
      <Home />
      <ImagesDemo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  }
});

export default App;