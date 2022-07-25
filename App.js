import { View, StyleSheet, FlatList } from 'react-native';
import Form from './src/Components/Form';

function App() {
  return (
    <View>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center"
  }
});

export default App;