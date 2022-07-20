import { View, StyleSheet } from 'react-native';
import TouchButton from './src/Components/TouchButton';

function App() {
  return (
    <View style={styles.container}>
      <TouchButton />
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