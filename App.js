import { View, StyleSheet, FlatList } from 'react-native';
import Card from './src/Components/Card';
import TouchButton from './src/Components/TouchButton';

function App() {
  let arr = [{ a: "a" }, { b: "b" }, { c: "c" }, { d: "d" }, { e: "e" }]
  // let arr=[1,2,3,4,5];
  return (
    <View style={styles.container}>
      {/* <TouchButton /> */}
      <FlatList data={arr} renderItem={(e) => {
        return (
          <Card />
        )
      }} />
      {/* <Card /> */}
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