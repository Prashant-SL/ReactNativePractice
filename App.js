import { View, StyleSheet, FlatList } from 'react-native';
import RandomColor from './src/Components/RandomColor';

function App() {
  return (
    <View style={styles.container}>
      <RandomColor />
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