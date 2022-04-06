import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Button, Image,  StyleSheet, Text, View } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import backImg from '.././assets/Background.jpg'; 
import React from 'react';


export default class Home extends React.Component{
  render(){
    return (
      <View style={styles.container}>
             <ImageBackground source={backImg} resizeMode="cover" style={styles.image}></ImageBackground>
  
           <View style={styles.rectangle}>
              <View style={styles.fixToText}>
  
                  <TouchableHighlight
                     style={styles.submitNormal}
                      underlayColor='#fff'>
                    <Text style={styles.submitTextBlack}>LOG IN</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                     style={styles.submitOutline}
                      underlayColor='#fff'>
                    <Text style={styles.submitTextWhite}>REGISTER</Text>
                  </TouchableHighlight>
  
  
              </View>
              <View style={styles.line}>
  
              </View>
           </View> 
           
      </View>
      
    );
  }

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
    flex: 1,
  },
  submitOutline: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 45,
    paddingLeft: 45,
    backgroundColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
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
