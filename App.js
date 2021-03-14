import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements';

// const listItems = ({options}) => (options.map((optionItem) =>  <li>{optionItem.text}</li>));

const renderItem = ({ item }) => (
  <ListItem bottomDivider>
<Avatar
  rounded
  source={{
    uri:
      'https://www.byrdie.com/thmb/pr2U7ghfvv3Sz8zJCHWFLT2K55E=/735x0/cdn.cliqueinc.com__cache__posts__274058__face-masks-for-pores-274058-1543791152268-main.700x0c-270964ab60624c5ca853057c0c151091-d3174bb99f944fc492f874393002bab7.jpg',
  }}
  />

    <ListItem.Content>
      <ListItem.Title>{item.question}</ListItem.Title>
      <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
)

export default App = () => {
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
    
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

// import React, { useState } from "react";
// import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];

// const Item = ({ item, onPress, style }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
//     <Text style={styles.title}>{item.title}</Text>
//   </TouchableOpacity>
// );

// const App = () => {
//   const [selectedId, setSelectedId] = useState(null);

//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         style={{ backgroundColor }}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// };



// export default App;