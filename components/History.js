import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1654164703/male_man_people_person_avatar_white_tone_icon_159363_ebtiac.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1654164703/male_man_people_person_avatar_white_tone_icon_159363_ebtiac.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1654164703/male_man_people_person_avatar_white_tone_icon_159363_ebtiac.png',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
  <Image source={{uri:item.image,}} style={{width: 45, height: 45}} />
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const History = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    item.id === selectedId ? alert(item.id) : console.log("ff");
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
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
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
    marginLeft: 10,
  },
});

export default History;