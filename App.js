// import { View, Text } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }
// export default App;


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Open up App.js to start working and queen and childrens hi bro not fast??? on your app!</Text>
      <StatusBar style="auto" />
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
    color: "red",
    backgroundColor: "yellow"
  },
  box: {
    margin: 0,
    auto: 0,
  }
});
