import React from 'react';
import {  SafeAreaView, StatusBar, StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListVotes from './components/ListVotes';

const Stack = createStackNavigator();


export default App = () => {
  
  
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer screenOptions={{backgroundColor: 'navy'}}>
        <Stack.Navigator 
          screenOptions={{
            paddingHorizontal: "30 px",
            headerTintColor: '#007AFF',
            headerStyle: { backgroundColor: 'papayawhip' },
            backgroundColor: 'navy'
          }}
        >
          <Stack.Screen
            name="Votes"
            component={ListVotes}            
            options={{
              headerRight: () => (
                
                <View style={{ paddingHorizontal: 30 }}>
                  <Button
                    onPress={() => this.props.navigation.navigate('About')}
                    title="[+]"
                    color="#007AFF"
                  />
                </View>
              )
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const tabBarStyles = StyleSheet.create({
  style: {backgroundColor: 'powderblue'}
});

const headerStyles = StyleSheet.create({
  style: {backgroundColor: 'powderblue'}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'papayawhip'
  }
});