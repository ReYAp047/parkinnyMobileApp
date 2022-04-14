import { StatusBar } from 'expo-status-bar';
import React, {useEffect } from 'react';


import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';
import { Button,View,Alert, Platform, StyleSheet, Image, Text } from 'react-native';
import Map from './Map';
// you need to swap out these details with your auth0 credientals
const auth0ClientId = "uCtTuai3OyeNX17GPAM2frzmxPwxejYc";
const authorizationEndpoint = "https://parkinny-pfe.eu.auth0.com/authorize";


const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

console.log(redirectUri)  // <-- you will need to add this to your auth0 callbacks / logout configs



export default function LogIn () { 
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
      
      if(result){
        global.foo = auth0ClientId;

        return (
          <Map/>
        );
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