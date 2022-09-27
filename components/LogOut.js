import React, { useState, useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';
import { openAuthSessionAsync } from 'expo-web-browser';
import { TouchableHighlight, TextInput, Image, Platform, StyleSheet, Text, View, Alert } from 'react-native';
import Home from './Home';
import { useNavigation } from '@react-navigation/native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { Heading , Center, NativeBaseProvider } from 'native-base';
import { LogBox } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { setStatusBarTranslucent } from 'expo-status-bar';
import { doc, setDoc, getDoc, updateDoc  } from 'firebase/firestore';
import { db } from '.././Core/Config'
LogBox.ignoreAllLogs();

const auth0ClientId = "uCtTuai3OyeNX17GPAM2frzmxPwxejYc";
const authorizationEndpoint = "https://parkinny-pfe.eu.auth0.com/v2/logout";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy }); // <-- must be set in allowed logout urls
let ses = false;




export default function LogOut () { 
  const [number,setNumber] = useState("");
  const [some, setSome] = useState(null);
  const [total, setTotal] = useState(0);
   //storing user info
   let [userDoc, setUserDoc] = useState(null)
  const Create = () =>{

    fetch('https://sandbox.paymee.tn/api/v1/payments/create', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 331b641dd514f44a9095f0caa3ab4c80e1a7297d'
      },
      body: JSON.stringify({vendor: 2384, amount: some, note: "Reservation #1000132"})
      })
      .then(res => {
        console.log(res.status);
        console.log(res.headers);
        return res.json();
      })
      .then(
        (result) => {
          let url = "https://sandbox.paymee.tn/gateway/" + result.data['token']
          let res = WebBrowser.openBrowserAsync(url);
          console.log(JSON.stringify(res));
  
        },
        (error) =>{
          console.log(error);
        }
      )
      setTotal(parseInt(total)+parseInt(some))

      var id = global.foo;
    
      const myDoc = doc(db, "Client", id)
  


      const data = {
        "Wallet": total,
      };
      
      updateDoc(myDoc, data)
      .then(myDoc => {
          console.log("Money added successfully!");
      })
      .catch(error => {
          console.log(error);
      })


    }

    const onSomeTextChanged = (someValue) => {
      // code to remove non-numeric characters from text
      setNumber({ number: someValue.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
      setSome(someValue)
    }

    const Read = () =>{
  
      var id = global.foo;
  
      const myDoc = doc(db, "Client", id)
  
      getDoc(myDoc)
      //success
      .then((snapshot)=>{
        if(snapshot.exists){
          setUserDoc(snapshot.data())
        }else{
          alert("No old Client information found!")
        }
        
     })
     //failed
      .catch((error)=>{
        alert(error.message)
      })
    }

    useEffect(() => {
      Read()
      
      if(userDoc){

        setTotal(userDoc.Wallet)
  
      }else{
        setTotal(0)
     }
    },[]);
      

return (
    <View style={styles.container}>
    <NativeBaseProvider>
     <Text style={styles.someNumber}>Wallet</Text>
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
                  <Text style={styles.moneyStyle}>{total}DT</Text>
                </View>
              </View>

              <Text style={styles.userName}>F o u l e n  B e n  F o u l e n</Text>

              <View style={styles.alingRowExpire}>
                <Text style={styles.expire}>EXPIRE</Text>
                <Text style={styles.dateExpire}>NA/NA</Text>
              </View>


         </View>
          
         <Center>
                      <TextInput
                        placeholder = "Type your amount ex: 50DT"
                        onChangeText={someValue => onSomeTextChanged(someValue)}
                        someValue={number}
                        keyboardType="numeric"
                        style={styles.paragraph}>
                      </TextInput>
                      <TouchableHighlight
                        style={styles.submitOutline}
                          underlayColor='#fff'
                          onPress={Create}>
                        <Text style={styles.submitTextWhite}>RECHARGE MY WALLET</Text>
                      </TouchableHighlight>
        </Center>
        </NativeBaseProvider>
        
        
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
  someNumber: {
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
    
    fontSize: 11,
    fontWeight: 'normal',
    marginRight: 30,
    marginTop: 5,
  },

  userName: {
    color: '#fff',
    textAlign: 'center',
    
    fontSize: 20,
    fontWeight: 'normal',
    marginTop: 5,
    marginLeft : 15
  },
  moneyStyle: {
    color: '#fff',
    
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 2,
    
  },

  expire: {
    color: '#9F9F9F',
   
    fontSize: 11,
    fontWeight: 'normal',
    marginTop: 2,  
  },
  dateExpire: {
    color: '#fff',
    
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
  submitTextWhite: {
    color: '#fff',
    textAlign: 'center',
    
    fontSize: 17,
    fontWeight: 'normal',
  },
  submitOutline: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 65,
    paddingLeft: 65,
    backgroundColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 10,
    marginTop: 5,
  },
    paragraph:{
    borderWidth:1,
    flexDirection: 'row',
    color: '#000',
    textAlign: 'center',
    
    fontSize: 17,
    fontWeight: 'normal',
    paddingRight: 55,
    paddingLeft: 55,
    marginTop: 15,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 10,
    },
    });