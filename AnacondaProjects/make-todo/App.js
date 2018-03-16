import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>샤로수 매니저</Text>
        <View style={styles.card}>
          <Text style={styles.input} placeholder={"New to do"}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 30,
    fontWeight: "300",
    marginBottom: 10,  
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width-30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 3
  },
  input: {
    color: "skyblue",
  }
});
