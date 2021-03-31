import React, { useEffect, useState } from 'react';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import {  Button,
          View, 
          ActivityIndicator, 
          FlatList, 
          StyleSheet } from 'react-native';

const renderItem = ({ item }) => (
  <ListItem bottomDivider containerStyle={{backgroundColor:"powderblue"}}>
    <Avatar
      rounded
      source={{
        uri:
          'https://www.byrdie.com/thmb/pr2U7ghfvv3Sz8zJCHWFLT2K55E=/735x0/cdn.cliqueinc.com__cache__posts__274058__face-masks-for-pores-274058-1543791152268-main.700x0c-270964ab60624c5ca853057c0c151091-d3174bb99f944fc492f874393002bab7.jpg',
      }}
      />

    <ListItem.Content style={styles.content}>
      <ListItem.Title>{item.question}</ListItem.Title>
      <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
);

const LoadingListItems = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large"/>
  </View>
);

function ListVotes({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/polls')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{paddingHorizontal: 30}}>
          <Button 
            title="Add Vote" 
            onPress={() => {
                navigation.navigate('New Vote 🍎')
              }
            }
          />
        </View>
      ),
    });
  }, [navigation]);
  
  return (
    <View>
      {isLoading ? <LoadingListItems/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  )
}

export default ListVotes;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  content: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  },
  headerButton: {
    padding: 30
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 50
  }
});
