import { View, StyleSheet, FlatList } from 'react-native';
import UseEffectHook from './src/Components/UseEffectHook';

function App() {
  return (
    <View style={styles.container}>
      <UseEffectHook />
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