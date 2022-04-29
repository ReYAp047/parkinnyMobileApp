import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, SafeAreaView , ScrollView,  StyleSheet, View, Image, TextInput } from 'react-native';
import React from 'react';

import { Heading,Text , Center, NativeBaseProvider } from 'native-base';

export default class Reserve extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      number : '',
        }
  }

 onTextChanged(firstValue) {
    // code to remove non-numeric characters from text
    this.setState({ number: firstValue.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
  }
  onNumTextChanged(numValue) {
    // code to remove non-numeric characters from text
    this.setState({ number: numValue.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
  }

  onTelTextChanged(telValue) {
    // code to remove non-numeric characters from text
    this.setState({ number: telValue.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
  }

  

render(){
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
                           onPress={() => navigation.navigate('LogIn')}>
                           <Text style={styles.submitTextWhite}>06-08</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={() => navigation.navigate('LogIn')}>
                           <Text style={styles.submitTextWhite}>08-10</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={() => navigation.navigate('LogIn')}>
                           <Text style={styles.submitTextWhite}>10-12</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={() => navigation.navigate('LogIn')}>
                           <Text style={styles.submitTextWhite}>12-14</Text>
                        </TouchableHighlight>
                     </View>    
                     <View style={styles.rowTimeStyle}>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={() => navigation.navigate('LogIn')}>
                           <Text style={styles.submitTextWhite}>14-16</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={() => navigation.navigate('LogIn')}>
                           <Text style={styles.submitTextWhite}>16-18</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={() => navigation.navigate('LogIn')}>
                           <Text style={styles.submitTextWhite}>18-20</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                           style={styles.submitNormal}
                           underlayColor='#E9E9E9'
                           onPress={() => navigation.navigate('LogIn')}>
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
                        onPress={() => navigation.navigate('LogIn')}>
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
                              onChangeText={firstValue => this.onTextChanged(firstValue)}
                              firstValue={this.state.number}
                            />
                            <Text style={styles.carNumberText}>تونس</Text>
                            <TextInput
                              placeholder={'9999'}
                              maxLength={4}
                              placeholderTextColor={'white'}
                              style={styles.paragraph}
                              keyboardType="numeric"
                              onChangeText={numValue => this.onNumTextChanged(numValue)}
                              numValue={this.state.number}
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
                              onChangeText={telValue => this.onTelTextChanged(telValue)}
                              telValue={this.state.number}
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
                              <Text style={styles.priceText}>6.00 dt</Text>
                            </View>
                          </View>

                          <View style={styles.phoneStyle}>
                            <Text style={styles.priceStyle}>Washing price</Text>
                            <View style={styles.phoneNumber}>
                              <Text style={styles.priceText}>6.00 dt</Text>
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
                          <Text style={styles.priceText}>12.00 dt</Text>
                        </View>
                      </View>
                    </Center>

                    <Center>
                      <TouchableHighlight
                        style={styles.submitOutline}
                          underlayColor='#fff'
                          onPress={() => navigation.navigate('LogIn')}>
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
}

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
    backgroundColor: '#D4D3D3',
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
