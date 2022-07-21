import React, {useEffect } from 'react';

import { StyleSheet, ActivityIndicator, View } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '.././Core/Config'

import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
LogBox.ignoreAllLogs();


export default function Loading () { 
    const navigation = useNavigation();

    let checkIfLoggedIn = () =>{

        onAuthStateChanged(auth, user => {
            if (user != null) {
              console.log('We are authenticated now!');
              navigation.navigate('Tabs')
              global.foo = user['uid']
            }else{
                console.log('redirect to login');
                navigation.navigate("LogIn")
            }
          });
    
    }

      // To get tha data of the user
  useEffect(() => {
    checkIfLoggedIn()
  });


  return(
    <View style={styles.container}>
        <ActivityIndicator size="large"/>
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});