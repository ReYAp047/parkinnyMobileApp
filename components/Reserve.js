import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, SafeAreaView , ScrollView,  StyleSheet, View, Image, TextInput, LogBox } from 'react-native';
import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import * as WebBrowser from 'expo-web-browser';
import { Heading,Text , Center, NativeBaseProvider } from 'native-base';

import { db } from '.././Core/Config'

LogBox.ignoreAllLogs();
export default function Reserve ({navigation}) {

    let [one, setOne] = useState(false)
    let [tow, setTow] = useState(false)
    let [three, setThree] = useState(false)
    let [four, setFour] = useState(false)
    let [five, setFive] = useState(false)
    let [six, setSix] = useState(false) 
    let [seven, setSeven] = useState(false)
    let [eight, setEight] = useState(false)

    let [washing, setWashing] = useState(false)

    let [carFistNumber, setCarFistNumber] = useState(null)
    let [carLastNumber, setCarLastNumber] = useState(null)
    let [userNumber, setUserNumber] = useState(null)
    //storing user info
    let [userDoc, setUserDoc] = useState(null)
  
    const [number,setNumber] = useState("");
    
    const [firstmat, setFirstmat] = useState(null)
    const [lastmat, setLastmat] = useState(null)
    const [tel, setTel] = useState(null)

    let [parkingprice, setParkingprice] = useState(0) 
    let [washingprice, setWashingprice] = useState(0) 

    let [parkingName, setParkingName] = useState(null)
    let [parkingInfo, setParkingInfo] = useState(null)

    
  

    const selectTimeOne = () =>{
      
      if(one){
        setOne(false)
        setParkingprice(parkingprice-3);
      }else{
        setOne(true)
        setParkingprice(parkingprice+3);
      }        
    }

    const selectTimeTow = () =>{
      
      if(tow){
        setTow(false)
        setParkingprice(parkingprice-3);
      }else{
        setTow(true)
        setParkingprice(parkingprice+3);
      }        
    }

    const selectTimeThree = () =>{
      
      if(three){
        setThree(false)
        setParkingprice(parkingprice-3);
      }else{
        setThree(true)
        setParkingprice(parkingprice+3);
      }        
    }

    const selectTimeFour = () =>{
      
      if(four){
        setFour(false)
        setParkingprice(parkingprice-3);
      }else{
        setFour(true)
        setParkingprice(parkingprice+3);
      }        
    }

    const selectTimeFive = () =>{
      
      if(five){
        setFive(false)
        setParkingprice(parkingprice-3);
      }else{
        setFive(true)
        setParkingprice(parkingprice+3);
      }        
    }

    const selectTimeSix = () =>{
      
      if(six){
        setSix(false)
        setParkingprice(parkingprice-3);
      }else{
        setSix(true)
        setParkingprice(parkingprice+3);
      }        
    }

    const selectTimeSeven = () =>{
      
      if(seven){
        setSeven(false)
        setParkingprice(parkingprice-3);
      }else{
        setSeven(true)
        setParkingprice(parkingprice+3);
      }        
    }

    const selectTimeEight = () =>{
      
      if(eight){
        setEight(false)
        setParkingprice(parkingprice-3);
      }else{
        setEight(true)
        setParkingprice(parkingprice+3);
      }        
    }

    const selectWashing = () =>{
      
      if(washing){
        setWashing(false)
        setWashingprice(washingprice-3);
      }else{
        setWashing(true)
        setWashingprice(washingprice+3);
      }        
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

    fetch('https://sandbox.paymee.tn/api/v1/payments/create', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 331b641dd514f44a9095f0caa3ab4c80e1a7297d'
      },
      body: JSON.stringify({vendor: 2384, amount: parkingprice+washingprice, note: "Reservation #1000132"})
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
          


//ceating a random id for the reservation
var id = "";
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (var i = 0; i < 16; i++)
  id += possible.charAt(Math.floor(Math.random() * possible.length));

const myDoc = doc(db, "Reservation", id)

var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year


const docData = {
  "id" : id,
  "ClientID": global.foo,
  "First_Matricule": firstmat,
  "Last_Matricule": lastmat,
  "Phone_Number": tel,
  "Parking": parkingInfo,
  "TotalPrice": parkingprice+washingprice,
  "Date": date,
  "Month": month,
  "Year": year,
  "One": one,
  "Tow": tow,
  "Three": three,
  "Four": four,
  "Five": five,
  "Six": six,
  "Seven": seven,
  "Eight": eight,

}

setDoc(myDoc, docData)

.then(()=>{
  alert("Reservation booked!")
})
.catch((error)=>{
  alert(error.message)
})

navigation.navigate('Profile')




        },
        (error) =>{
          console.log(error);
        }
      )



    

  }

  const Read = () =>{
    console.log("azefazefzef");

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
    
    setParkingName (global.loc.names)
    setParkingInfo (global.loc)
    if(userDoc){
      setCarFistNumber(userDoc.First_Matricule)
      setCarLastNumber(userDoc.Last_Matricule)
      setUserNumber(userDoc.Phone_Number)

    }else{
      setCarFistNumber("000")
      setCarLastNumber("9999")
      setUserNumber("xxxxxxxx")
   }
  });

    return(
      <SafeAreaView style={styles.container}>
        <ScrollView>
            <NativeBaseProvider>
                <Center>
                  <View>
                    <View style={styles.rowStyle}>
                      <Image
                        style={styles.tinyLogo}
                        source={{  uri: 'https://res.cloudinary.com/dhncrtnjp/image/upload/v1661297560/LogoP_ugwynb.png',  }}/>  
                      <View style={styles.prices}>
                        <Heading size="sm" style={styles.headerStyle}>{parkingName}</Heading>
                        <Text fontSize="xs">3dt/hour</Text>
                      </View>
                  </View>

                    <Center>
                     <Heading size="xs" style={styles.serviceHeader}>Choose your reservation Hours</Heading>
                     <View style={styles.rowTimeStyle}>
                        <TouchableHighlight
                           style={[styles.submitNormal, { backgroundColor: one ? '#1f4a9b' : '#D4D3D3' }]}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeOne}
                           >
                           <Text style={styles.submitTextWhite}>06-08</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                           style={[styles.submitNormal, { backgroundColor: tow ? '#1f4a9b' : '#D4D3D3' }]}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeTow}>
                           <Text style={styles.submitTextWhite}>08-10</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                           style={[styles.submitNormal, { backgroundColor: three ? '#1f4a9b' : '#D4D3D3' }]}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeThree}>
                           <Text style={styles.submitTextWhite}>10-12</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                           style={[styles.submitNormal, { backgroundColor: four ? '#1f4a9b' : '#D4D3D3' }]}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeFour}>
                           <Text style={styles.submitTextWhite}>12-14</Text>
                        </TouchableHighlight>

                     </View>   

                     <View style={styles.rowTimeStyle}>
                        <TouchableHighlight
                           style={[styles.submitNormal, { backgroundColor: five ? '#1f4a9b' : '#D4D3D3' }]}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeFive}>
                           <Text style={styles.submitTextWhite}>14-16</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                           style={[styles.submitNormal, { backgroundColor: six ? '#1f4a9b' : '#D4D3D3' }]}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeSix}>
                           <Text style={styles.submitTextWhite}>16-18</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                           style={[styles.submitNormal, { backgroundColor: seven ? '#1f4a9b' : '#D4D3D3' }]}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeSeven}>
                           <Text style={styles.submitTextWhite}>18-20</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={[styles.submitNormal, { backgroundColor: eight ? '#1f4a9b' : '#D4D3D3' }]}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeEight}>
                           <Text style={styles.submitTextWhite}>20-22</Text>
                        </TouchableHighlight>
                     </View>                 
                    </Center>

                    <Center>
                     <Heading size="xs" style={styles.serviceHeader}>Choose an extra service if you want</Heading>
                     <View style={styles.rowTimeStyle}>
                      <TouchableHighlight
                        style={[styles.submitService, { backgroundColor: washing ? '#1f4a9b' : '#D4D3D3' }]}
                        underlayColor='#E9E9E9'
                        onPress={selectWashing}>
                        <Text style={styles.submitTextWhite}>Washing car</Text>
                      </TouchableHighlight>
                     </View>
                    </Center>

                    <Center>
                     <Heading size="xs" style={styles.serviceHeader}>Your complementation information</Heading>
                      <View style={styles.boxView}>
                        <View style={styles.rowStyle}>
                          <Text style={styles.textRegistration}>Vehicle registration</Text>
                          <View style={styles.carNumberBox}>
                            <TextInput
                              placeholder={carFistNumber}
                              maxLength={3}
                              placeholderTextColor={'white'}
                              style={styles.paragraph}
                              keyboardType="numeric"
                              onChangeText={firstValue => onTextChanged(firstValue)}
                              firstValue={number}
                            />
                            <Text style={styles.carNumberText}>تونس</Text>
                            <TextInput
                              placeholder={carLastNumber}
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
                              placeholder={userNumber}
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
                      </View>
                    </Center>

                    <Center>
                      <View style={styles.line}></View>
                    </Center>

                    <Center>
                          <View style={styles.phoneStyle}>
                            <Text style={styles.priceStyle}>Parking price</Text>
                            <View style={styles.phoneNumber}>
                              <Text style={styles.priceText}>{parkingprice} dt</Text>
                            </View>
                          </View>

                          <View style={styles.phoneStyle}>
                            <Text style={styles.priceStyle}>Washing price</Text>
                            <View style={styles.phoneNumber}>
                              <Text style={styles.priceText}>{washingprice} dt</Text>
                            </View>
                          </View>
                    </Center>

                    <Center>
                      <View style={styles.line}></View>
                    </Center>


                    <Center>              
                      <View style={styles.phoneStyle}>
                        <Text style={styles.priceStyle}>Total price</Text>
                        <View style={styles.phoneNumber}>
                          <Text style={styles.priceText}>{parkingprice+washingprice} dt</Text>
                        </View>
                      </View>
                    </Center>

                    <Center>
                      <TouchableHighlight
                        style={styles.submitOutline}
                          underlayColor='#fff'
                          onPress={Create}>
                        <Text style={styles.submitTextWhite}>VALIDATE</Text>
                      </TouchableHighlight>
                    </Center>

                    


                  </View>
                </Center>
            </NativeBaseProvider>
          </ScrollView>
      </SafeAreaView>



    )

}
let isBackgroundRed = true;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
  },
  rowStyle: {
    flexDirection: "row",
  },
  phoneStyle: {
    flexDirection: "row",
    marginTop: 5,
  },
  prices: {
    marginTop: 15,
    marginLeft: 10,
  },
  tinyLogo: {
    width: 120,
    height: 94,
    marginLeft: 30,
  },
  phoneIcon: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginRight: 5,
  },

  

  headerStyle: {
    marginBottom: 10,
  },
  serviceHeader: {
    marginTop: 20,
    marginBottom: 10,
  },
  submitNormal: {
    marginRight: 5,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D4D3D3',
  },
  submitTextBlack: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'bold',
  },
  rowTimeStyle: {
    flexDirection: "row",
    marginTop: 10,
  },
  submitService: {
    marginRight: 5,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: '#D4D3D3',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D4D3D3',
  },

  boxView: {
    padding: 20,
    backgroundColor: '#CCCCCC',
    marginTop: 10,
    borderRadius: 10,
    
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
    
    
  },
  phoneNumber: {
 
    marginTop: 7,
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

  priceStyle: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'normal',
    marginRight: 130,
    marginTop: 10,
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




  priceText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'normal',
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

  line: {
    width: 300,
    height: 3,
    backgroundColor: '#3F3F3F',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },

  submitOutline: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 80,
    paddingLeft: 80,
    backgroundColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 10,
    marginTop: 10,
  },
  submitTextWhite: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'bold',
  },

});
