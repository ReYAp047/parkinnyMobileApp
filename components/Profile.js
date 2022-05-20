import React from 'react';
import { StyleSheet, TextInput,Text,Image,AppRegistry, View, Dimensions,TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import QRCode from 'react-native-qrcode-generator';
import { HORIZONTAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';

export default function Profile () {
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


  return (   
    <View style={styles.container}>
         <View>
   <TouchableOpacity onPress={pickImage}>
       {image == '' ?
      <Image style={styles.image} source={require('../assets/upload.png')} /> 
       :
       <Image style={[styles.image, styles.avatar]} source={{uri : image}} /> 
       } 
      </TouchableOpacity>
    <View style={styles.textContainer}>
        <Text style={styles.text2}>Foulen Ben Foulen</Text>
    </View>

    </View>
      <Text style={styles.input}> Reservation code
        </Text>
      <QRCode
        value={'id client'}
        size={250}
        bgColor='black'
        fgColor='white'/>
        <Text style={styles.text1}> Expire ofter 4hours</Text>
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
      margin: 10,
      fontSize: 27,
      borderRadius: 15,
      padding: 10,
  },
  text1: {
      color: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 15,
      fontSize: 15,
  },
  text2: {
      color: '#000',
      marginLeft: 75,
      margin: 30,
      fontSize: 20,
  },
  image: {
      marginBottom: 40,
      height: 150,
      width: 150,
      marginLeft: 100,
      justifyContent: 'center',
      alignItems: 'center',
  },
  avatar: {
      borderRadius: 10
  },
  textContainer: {
      height:90,
      width: 320,
      backgroundColor:'#e5e5e5',
      borderRadius: 21,
      elevation :3
  }
});
