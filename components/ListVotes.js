import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements';

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
  )

const ListVotes = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
  
    useEffect(() => {
      fetch('https://everybody-votes-a.herokuapp.com/polls.json')
        .then((response) => response.json())
        // .then((json) => console.log(json))
        .then((json) => setData(json))
        // .then((data) => console.log(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    
    return (
        <View>
            {isLoading ? <ActivityIndicator/> : (
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
    borderRadius: 10
  }
});
