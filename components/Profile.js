import { StyleSheet, TextInput,Text,Image, View, TouchableHighlight,TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import QRCode from 'react-native-qrcode-generator';
import { HORIZONTAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';

import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '.././Core/Config'


import {Center, NativeBaseProvider } from 'native-base';

export default function Profile () {
  const [number,setNumber] = useState("");
  const [image, setImage] = React.useState('')
  const pickImage = async() =>{
      //Demande la permission pour acceder a la camera
      let permissionResult =  await ImagePicker.requestMediaLibraryPermissionsAsync();
     //La permission n'est pas accordée , on fait rien on sort
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
     //La permission a été accerdée
      let Result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images, //photos ,videos au tout
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });//Lance la galerie
        launchCameraAsync
      if (Result.cancelled == false){
          setImage(Result.uri)
      }
    
  }



  const [name, setName] = useState(null)
  const [firstmat, setFirstmat] = useState(null)
  const [lastmat, setLastmat] = useState(null)
  const [tel, setTel] = useState(null)

  const onNameChanged = (firstValue) =>{
     setName(firstValue)
  }
  const onTextChanged = (firstValue) =>{
    // code to remove non-numeric characters from text
     setNumber({ number: firstValue.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
     setFirstmat(firstValue)
  }
  const onNumTextChanged = (numValue) => {
    // code to remove non-numeric characters from text
    setNumber({ number: numValue.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
    setLastmat(numValue)
  }

  const onTelTextChanged = (telValue) => {
    // code to remove non-numeric characters from text
    setNumber({ number: telValue.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
    setTel(telValue)
  }

  const Create = () =>{

    //ceating a random id for the reservation
    var id = global.foo;
    
    const myDoc = doc(db, "Client", id)


    const docData = {
      "ClientID": global.foo,
      "Name": name,
      "First_Matricule": firstmat,
      "Last_Matricule": lastmat,
      "Phone_Number": tel,

    }

    setDoc(myDoc, docData)

    .then(()=>{
      alert("Information saved!")
   })
    .catch((error)=>{
      alert(error.message)
    })
  }


  return (   
    <View style={styles.container}>
    <NativeBaseProvider>
          <View>
          <Center>
    <TouchableOpacity onPress={pickImage}>
        {image == '' ?
        <Image style={styles.image} source={require('../assets/upload.png')} /> 
        :
        <Image style={[styles.image, styles.avatar]} source={{uri : image}} /> 
        } 
        </TouchableOpacity>
        </Center>


        <View style={styles.boxView}>
        <Center>
          <TextInput
            placeholder={'Foulen Ben Foulen'}
            style={styles.text2}
            firstValue={"Foulen Ben Foulen"}
            onChangeText={firstValue => onNameChanged(firstValue)}
          />
        </Center>

                        <View style={styles.rowStyle}>
                          <Text style={styles.textRegistration}>Vehicle registration</Text>
                          <View style={styles.carNumberBox}>
                            <TextInput
                              placeholder={'000'}
                              maxLength={3}
                              placeholderTextColor={'white'}
                              style={styles.paragraph}
                              keyboardType="numeric"
                              onChangeText={firstValue => onTextChanged(firstValue)}
                              firstValue={number}
                            />
                            <Text style={styles.carNumberText}>تونس</Text>
                            <TextInput
                              placeholder={'9999'}
                              maxLength={4}
                              placeholderTextColor={'white'}
                              style={styles.paragraph}
                              keyboardType="numeric"
                              onChangeText={numValue => onNumTextChanged(numValue)}
                              numValue={number}
                            />
                          </View>
                        </View>
                        <View style={styles.phoneStyle}>
                          <Image
                          style={styles.phoneIcon}
                          source={{  uri: 'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650940867/Phone_icon_bswriu.png',  }}/>
                          <Text style={styles.telNumber}>Phone number</Text>
                          <Text style={styles.phoneCountry}>+216</Text>
                          <View style={styles.phoneNumber}>
                              <TextInput
                              placeholder={'xxxxxxxx'}
                              maxLength={8}
                              minLength={8}
                              placeholderTextColor={'black'}
                              style={styles.phoneNumberText}
                              keyboardType="numeric"
                              onChangeText={telValue => onTelTextChanged(telValue)}
                              telValue={number}
                            />
                          </View>
                          
                        </View>
                        <TouchableHighlight
                          style={styles.submitOutline}
                          underlayColor='#fff'
                          onPress={Create}>
                         <Text style={styles.submitTextWhite}>Save</Text>
                        </TouchableHighlight>
                      </View>


      </View>
        <Center>
        <Text style={styles.input}> Reservation code </Text>
        </Center>

        <Center>
        <QRCode
          value={global.foo}
          size={250}
          bgColor='black'
          fgColor='white'/>
          <Text style={styles.text1}> Expire After 4hours</Text>
        </Center>
          
      </NativeBaseProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
  },

  input: {
      height: 50,
      //borderColor: 'gray',
      //borderWidth: 1,
      fontSize: 27,
      borderRadius: 15,
      padding: 10,
  },
  text1: {
      color: 'red',
      justifyContent: 'center',
      marginBottom: 15,
      fontSize: 15,
  },
  text2: {
      color: '#000',
      marginBottom: 15,
      fontSize: 30,
  },
  image: {
      marginTop: 30,
      height: 120,
      width: 120,
      justifyContent: 'center',
      alignItems: 'center',
  },
  avatar: {
      borderRadius: 10
  },
  textContainer: {
      height:150,
      width: 320,
      backgroundColor:'#e5e5e5',
      borderRadius: 21,
      elevation :3
  },

  boxView: {
    padding: 20,
    backgroundColor: '#CCCCCC',
    marginTop: 2,
    borderRadius: 10,
    
  },
  rowStyle: {
    flexDirection: "row",
  },
  textRegistration: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'normal',
    marginRight: 10,
    marginTop: 5,
  },
  carNumberBox: {
    padding: 5,
    backgroundColor: '#000',
    flexDirection: "row",
    borderWidth: 1,
    borderColor: '#fff',
    
    
  },
  phoneNumber: {
 
    marginTop: 7,
  },
  paragraph:{
    borderRadius:3,
    borderWidth:1,
    borderColor:'black',
    flexDirection: 'row',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 4,
    marginRight: 4,
    },
  phoneStyle: {
    flexDirection: "row",
    marginTop: 5,

  },
 telNumber: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'normal',
    marginRight: 15,
    marginTop: 10,
  },

    phoneCountry:{
      borderRadius:3,
      borderColor:'black',
      flexDirection: 'row',
      color: '#000',
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontSize: 17,
      fontWeight: 'normal',
      marginRight: 10,
      marginTop: 12,
      },
  phoneNumber: {
 
    marginTop: 7,
  },
 phoneNumberText:{
    borderRadius:3,
    borderColor:'black',
    flexDirection: 'row',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'normal',
    marginRight: 10,
    marginTop: 3,
    },
    carNumberText: {
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 4,
      marginRight: 4,
      marginTop: 4,
    },
    phoneIcon: {
      width: 30,
      height: 30,
      marginTop: 5,
      marginRight: 5,
    },
    submitOutline: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingRight: 40,
      paddingLeft: 40,
      backgroundColor: '#000',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      
    },
    submitTextWhite: {
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontSize: 17,
      fontWeight: 'bold',
    },
});
