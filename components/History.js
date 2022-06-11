import React, { useRef, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {Center, NativeBaseProvider } from 'native-base';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Parking Name',
    image:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1654534711/male_man_people_person_avatar_white_tone_icon_159363_ebtiac_1_vha7zo.png',
    date: 'dd/mm/yyy',
    time: '09:13',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Parking Name',
    image:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1654534711/male_man_people_person_avatar_white_tone_icon_159363_ebtiac_1_vha7zo.png',
    date: 'dd/mm/yyy',
    time: '09:13',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Parking Name',
    image:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1654534711/male_man_people_person_avatar_white_tone_icon_159363_ebtiac_1_vha7zo.png',
    date: 'dd/mm/yyy',
    time: '09:13',
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
  <Image source={{uri:item.image,}} style={{width: 60, height: 60}} />

  <View>
   <Text style={[styles.title, textColor]}>{item.title}</Text>

   <View style={{marginTop:5 ,flexDirection: "row", justifyContent: 'space-between',}}>
    <Text style={[styles.date, textColor]}>{item.date}</Text>
    <Text style={[styles.time, textColor]}>{item.time}</Text>
   </View>

  </View>

  </TouchableOpacity>
);

export default function History() {



  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#53A7B2' : '#fff';
    const color = item.id === selectedId ? 'white' : 'black';
    item.id === selectedId ? console.log(item.id) : console.log("ff");
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
      <NativeBaseProvider>
        <Center>
          <Text style={styles.pageTitle}>Booking history</Text>
        </Center>
        <View style={styles.line}>

        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </NativeBaseProvider>

    </SafeAreaView>
  );
};

const width_proportion = '100%';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    marginLeft: 10,
  },
  date: {
    fontSize: 20,
    marginLeft: 10,
  },
  time: {
    fontSize: 20,
    marginLeft: 60,
    marginTop: 3,
  },
  pageTitle :{
    fontSize: 17,
    marginTop: 10,
  },
  line: {
    width: width_proportion,
    height: 1,
    backgroundColor: "gray",
    marginTop: 10,
    marginBottom: 7,
  },
});
