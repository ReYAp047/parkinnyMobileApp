import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, SafeAreaView , ScrollView,  StyleSheet, View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';

import { Heading,Text , Center, NativeBaseProvider } from 'native-base';

import { db } from '.././Core/Config'

export default function Reserve () {

    let [one, setOne] = useState(false)
    let [tow, setTow] = useState(false)
    let [three, setThree] = useState(false)
    let [four, setFour] = useState(false)
    let [five, setFive] = useState(false)
    let [six, setSix] = useState(false) 
    let [seven, setSeven] = useState(false)
    let [eight, setEight] = useState(false)

    let [washing, setWashing] = useState(false)


  
    const [number,setNumber] = useState("");
    
    const [firstmat, setFirstmat] = useState(null)
    const [lastmat, setLastmat] = useState(null)
    const [tel, setTel] = useState(null)

    let [parkingprice, setParkingprice] = useState(0) 
    let [washingprice, setWashingprice] = useState(0) 

    
  

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



  


  const [userDoc, setUserDoc] = useState(null)
  const Create = () =>{

    //ceating a random id for the reservation
    var id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 16; i++)
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    
    const myDoc = doc(db, "Reservation", id)

    const docData = {
      "ClientID": global.foo,
      "First_Matricule": firstmat,
      "Last_Matricule": lastmat,
      "Phone_Number": tel,
    }

    setDoc(myDoc, docData)

    .then(()=>{
      alert("Document Created!")
   })
    .catch((error)=>{
      alert(error.message)
    })
  }

  const Read = () =>{

    const myDoc = doc(db, "MyCollection", "MyDocument")

    getDoc(myDoc)
    
    .then((snapshot)=>{
      if(snapshot.exists){
        setUserDoc(snapshot.data())
      }else{
        alert("No Doc Found")
      }
    })
    .catch((error)=>{
      alert(error.message)
    })
    
  }

    const Update = () =>{}

  const Delete = () =>{
}
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView>
            <NativeBaseProvider>
                <Center>
                  <View>
                    <View style={styles.rowStyle}>
                      <Image
                        style={styles.tinyLogo}
                        source={{  uri: 'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650940957/parkinny_1_ur3vi3.png',  }}/>  
                      <View style={styles.prices}>
                        <Heading size="sm" style={styles.headerStyle}>Parkinny prices</Heading>
                        <Text fontSize="xs">3dt/hour</Text>
                      </View>
                  </View>

                    <Center>
                     <Heading size="xs" style={styles.serviceHeader}>Choose your reservation Hours</Heading>
                     <View style={styles.rowTimeStyle}>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeOne}>
                           <Text style={styles.submitTextWhite}>06-08</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeTow}>
                           <Text style={styles.submitTextWhite}>08-10</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeThree}>
                           <Text style={styles.submitTextWhite}>10-12</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeFour}>
                           <Text style={styles.submitTextWhite}>12-14</Text>
                        </TouchableHighlight>
                     </View>    
                     <View style={styles.rowTimeStyle}>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeFive}>
                           <Text style={styles.submitTextWhite}>14-16</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeSix}>
                           <Text style={styles.submitTextWhite}>16-18</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={selectTimeSeven}>
                           <Text style={styles.submitTextWhite}>18-20</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
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
                        style={styles.submitService}
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
    width: 100,
    height: 74,
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
    backgroundColor: isBackgroundRed ? '#D4D3D3' : 'blue',
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
