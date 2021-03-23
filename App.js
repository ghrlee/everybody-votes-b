import React from 'react';
import {  SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ListVotes from './components/ListVotes';

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListVotes/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'powderblue'
  }
});