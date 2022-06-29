import { StatusBar } from 'expo-status-bar';
import React, {useEffect } from 'react';

import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';
import { View, Platform, Text, StyleSheet } from 'react-native';

import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base";

import { useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const auth0ClientId = "uCtTuai3OyeNX17GPAM2frzmxPwxejYc";
const authorizationEndpoint = "https://parkinny-pfe.eu.auth0.com/authorize";


const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

console.log(redirectUri)  // <-- you will need to add this to your auth0 callbacks / logout configs

let lo =true;

export default function LogIn () { 
  const [isOpen, setIsOpen] = React.useState(true);

  const onClose = () => setIsOpen(false);
  

  const cancelRef = React.useRef(null);
    const [request, result, promptAsync] = AuthSession.useAuthRequest(
      {
        redirectUri,
        clientId: auth0ClientId,
        // id_token will return a JWT token
        responseType: 'id_token',
        // retrieve the user's profile
        scopes: ['openid', 'profile', 'email'],
        extraParams: {
          // ideally, this will be a random value
          nonce: 'nonce',
        },
      },
      { authorizationEndpoint }
    );
    


      useEffect(() => {
        promptAsync({ useProxy });
      
    })
      
      if(result ){
        global.foo = auth0ClientId;
        lo=false;
        const navigation = useNavigation();

        return <NativeBaseProvider>
                <Center style={styles.container}>
                  <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                    <AlertDialog.Content>
                      <AlertDialog.CloseButton />
                      <AlertDialog.Header>Connected successfully</AlertDialog.Header>
                      <AlertDialog.Body>
                      Welcome to our application, now you logged In press -- Continue button and you can start.
                      </AlertDialog.Body>
                      <AlertDialog.Footer>
                        <Button.Group space={2}>
                          <Button colorScheme="success" onPress={() => navigation.navigate("Tabs")}>
                            Continue
                          </Button>
                        </Button.Group>
                      </AlertDialog.Footer>
                    </AlertDialog.Content>
                  </AlertDialog>
                </Center>
              </NativeBaseProvider>
        
          
         
          

        
        
      }

      return (
        <View>
          <Text>
            You have to log in
          </Text>
          <Text>
            You have to log in
          </Text>
          <Text>
            You have to log in
          </Text>
          <Text>
            You have to log in
          </Text>
          <Text>
            You have to log in
          </Text>
          <Text>
            You have to log in
          </Text>
          <Text>
            You have to log in
          </Text>
          <Text>
            You have to log in
          </Text>
          <Text>
            You have to log in
          </Text>
          <Text>
            You have to log in
          </Text>


        </View>
      
      );
  
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,

  },
});