import * as React from 'react';
import { Alert, Button, TextInput, StyleSheet, View, Text } from 'react-native';

// post request
/* redirect to votes screen */

const makeRequest = () => (
  console.log("thing is happening")
);

function AddVoteScreen({navigation}) {
  const [question, onChangeQuestion] = React.useState("Ask a question");
  const [description, onChangeDescription] = React.useState("More Info")
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Vote to add</Text>
      {/* form */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeQuestion}
        value={question}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeDescription}
        value={description}
        multiline
        numberOfLines={4}
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
              question: question,
              description: description
              })
            }).then(navigation.navigate('Everybody Votes 🌮'));
          }
        }
      />
    </View>
  );
}

export default AddVoteScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
  },
});