import React, { useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';
import { openAuthSessionAsync } from 'expo-web-browser';
import { TouchableHighlight, Dimensions, Button, Platform, StyleSheet, Text, View, Alert } from 'react-native';
import Home from './Home';
import { useNavigation } from '@react-navigation/native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import backImg from '.././assets/Background.jpg'; 
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const auth0ClientId = "uCtTuai3OyeNX17GPAM2frzmxPwxejYc";
const authorizationEndpoint = "https://parkinny-pfe.eu.auth0.com/v2/logout";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy }); // <-- must be set in allowed logout urls
let ses = false;
export default function LogOut () { 
  const navigation = useNavigation();
  const logout = async () => {
   
    Alert.alert("On work!")

  }
      

        return (
          <View style={styles.container}>
          <ImageBackground source={backImg} resizeMode="cover" style={styles.image}></ImageBackground>
  
        <View style={styles.rectangle}>
           <View style={styles.fixToText}>
               <TouchableHighlight
                  style={styles.submitOutline}
                   underlayColor='#fff'
                   onPress={logout}>
                 <Text style={styles.submitTextWhite}>LOGOUT</Text>
               </TouchableHighlight>
  
  
           </View>
        </View> 
        
        
   </View>
        );

      

  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    justifyContent: "center",
    flex: 5,
  },
  rectangle: {
    backgroundColor: "white",
    flex: 1,
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  submitOutline: {
   marginTop: 20,
   paddingTop: 30,
   paddingBottom: 30,
    width: Dimensions.get('window').width,
    backgroundColor: '#000',
   
    
    borderWidth: 2,
    borderColor: "white"
  },
  submitNormal: {
    marginRight: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 50,
    paddingLeft: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  submitTextWhite: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'bold',
  },
  submitTextBlack: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'bold',
  },

   line: {
    width: 170,
    height: 7,
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 95,
    marginBottom: 5,
  },
    });