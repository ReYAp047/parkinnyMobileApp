import React, { useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';
import { openAuthSessionAsync } from 'expo-web-browser';
import { TouchableHighlight, Dimensions, Image, Platform, StyleSheet, Text, View, Alert } from 'react-native';
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
     <Text style={styles.telNumber}>Wallet</Text>
          <View style={styles.boxView}>
            <View style={styles.arrangeLeft}>
              <Image style={styles.phoneIcon}
                    source={{  uri: 'https://res.cloudinary.com/dhncrtnjp/image/upload/v1663607028/LogoP_1_gwnc61.png',  }}
              />
            </View>
            <Text style={styles.cardInfo}>M Y  W A L L E T  C A R D  I N F R O M A T I O N</Text>
              
              <View style={styles.alingRow}>
                <View style={styles.arrangeRight}>
                  <Image style={styles.simIcon}
                        source={{  uri: 'https://res.cloudinary.com/dhncrtnjp/image/upload/v1663608160/New_Project_3_lmwy7s.png',  }}
                  />
                </View>
                <View style={styles.arrangeLeft}>
                  <Text style={styles.moneyStyle}>447 DT</Text>
                </View>
              </View>

              <Text style={styles.userName}>F o u l e n  B e n  F o u l e n</Text>

              <View style={styles.alingRowExpire}>
                <Text style={styles.expire}>EXPIRE</Text>
                <Text style={styles.dateExpire}>12/22</Text>
              </View>


         </View>
          

        
        
    </View>
);

      

  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    //justifyContent: 'center'
},
  boxView: {
    //paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    //paddingTop: 20,
    backgroundColor: '#04428D',
    marginTop: 30,
    borderRadius: 10,
    marginLeft : 20,
    marginRight : 20,
    
    
  },
  telNumber: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 15,
    marginTop: 40,
  },

  cardInfo: {
    color: '#9F9F9F',
    textAlign: 'center',
    fontFamily: 'IBM Plex Sans Devanagari',
    fontSize: 11,
    fontWeight: 'normal',
    marginRight: 30,
    marginTop: 5,
  },

  userName: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'IBM Plex Sans Devanagari',
    fontSize: 20,
    fontWeight: 'normal',
    marginTop: 5,
    marginLeft : 15
  },
  moneyStyle: {
    color: '#fff',
    fontFamily: 'IBM Plex Sans Devanagari',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 2,
    
  },

  expire: {
    color: '#9F9F9F',
    fontFamily: 'IBM Plex Sans Devanagari',
    fontSize: 11,
    fontWeight: 'normal',
    marginTop: 2,  
  },
  dateExpire: {
    color: '#fff',
    fontFamily: 'IBM Plex Sans Devanagari',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 2,  
    marginLeft : 5,
  },
  phoneIcon: {
    width: 38,
    height: 35,
    marginTop : 5,
  },
  simIcon: {
    width: 38,
    height: 35,
    marginLeft : 22,
  },
  arrangeLeft: {
    alignItems: 'flex-end'
  },
  arrangeRight: {
    alignItems: 'flex-start'
  },
  alingRow: {
    flexDirection: "row",
    marginTop : 20,
    justifyContent : 'space-between'

  },
  alingRowExpire: {
    flexDirection: "row",
    marginTop : 12,
    marginLeft : 22,

  },
    });