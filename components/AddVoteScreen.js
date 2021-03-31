import * as React from 'react';
import { Alert, Button, TextInput, StyleSheet, View, Text } from 'react-native';

// post request
/* redirect to votes screen */

const makeRequest = () => (
  console.log("thing is happening")
);

function AddVoteScreen() {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Vote to add</Text>

      {/* form */}
      <TextInput
        onChangeText={onChangeText}
        value={text}
      />

      {/* button */}
      <Button
        title="Submit"
        onPress={() => {
          fetch('http://localhost:3000/polls', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              question: 'text',
              description: 'here is the description'
              })
            });
          }
        }
      />
    </View>
  );
}

export default AddVoteScreen;