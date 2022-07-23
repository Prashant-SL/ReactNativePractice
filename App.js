import { View, StyleSheet, FlatList } from 'react-native';
import Challenge from './src/Components/Challenge';

function App() {
  return (
    <View style={styles.container}>
      <Challenge />
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