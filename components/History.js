import React, { useRef, useState, useEffect } from 'react';
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

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '.././Core/Config'

import {Center, NativeBaseProvider } from 'native-base';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
  <Image source={{uri:"https://res.cloudinary.com/dhncrtnjp/image/upload/v1661297560/LogoP_ugwynb.png",}} style={{width: 63, height: 60,}} />

  <View>
   <Text style={[styles.title, textColor]}>{item.Parking.name}</Text>

   <View style={{marginTop:5 ,flexDirection: "row", justifyContent: 'space-between',}}>
    <Text style={[styles.date, textColor]}>{item.Date + "/" + item.Month + "/" + item.Year}</Text>
    {item.One? <Text style={[styles.time, textColor]}>{"06:00"}</Text>: 
    item.Tow? <Text style={[styles.time, textColor]}>{"08:00"}</Text>: 
    item.Tow? <Text style={[styles.time, textColor]}>{"10:00"}</Text>: 
    item.Three? <Text style={[styles.time, textColor]}>{"12:00"}</Text>: 
    item.Four? <Text style={[styles.time, textColor]}>{"14:00"}</Text>: 
    item.Five? <Text style={[styles.time, textColor]}>{"16:00"}</Text>: 
    item.Seven? <Text style={[styles.time, textColor]}>{"18:00"}</Text>: 
    item.Eight? <Text style={[styles.time, textColor]}>{"20:00"}</Text>: null }
    
   </View>

  </View>

  </TouchableOpacity>
);

export default function History() {

  const createTwoButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#53A7B2' : '#fff';
    const color = item.id === selectedId ? 'white' : 'black';
    item.id === selectedId ? createTwoButtonAlert : console.log("ff");
    return (
      <Item
        item={item}
        //onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };


   //storing user info

   let [DATA, setDATA] = useState(null)

   const Read =  async() =>{
   
    let INFO = [];

    const q = query(collection(db, "Reservation"), where("ClientID", "==", global.foo));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      INFO.push(doc.data())
      //console.log(INFO);
    });

    setDATA(INFO)
    
   }
 
   // To get tha data of the user

   
   useEffect(() => {
    
     Read()
   });
   

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
