import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListVotes from './components/ListVotes';

function AddVoteScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add Vote</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App( ) {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Votes">
          <Stack.Screen name="Votes" component={ListVotes} />
          <Stack.Screen name="New Vote" component={AddVoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white'
  }
});
