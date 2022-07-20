import { View, StyleSheet } from 'react-native';
import Card from './src/Components/Card';
import TouchButton from './src/Components/TouchButton';

function App() {
  return (
    <View style={styles.container}>
      {/* <TouchButton /> */}
      <Card />
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