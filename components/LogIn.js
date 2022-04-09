import { StatusBar } from 'expo-status-bar';
import React, {useEffect } from 'react';


import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';
import { Button,View,Alert, Platform, StyleSheet, Image } from 'react-native';

// you need to swap out these details with your auth0 credientals
const auth0ClientId = "lkXp0Z1G9G1F57G6XscStcOyEG1L2qld";
const authorizationEndpoint = "https://dev-tic1h7u8.us.auth0.com/authorize";


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
      return null;
  
}