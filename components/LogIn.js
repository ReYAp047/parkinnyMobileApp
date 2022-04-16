import { StatusBar } from 'expo-status-bar';
import React, {useEffect } from 'react';


import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';
import { Button,View,Alert, Platform, StyleSheet, Image, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Map from './Map';
import Chat from './Chat';
import History from './History';
import LogOut from './LogOut';
import Profile from './Profile';
import Reserve from './Reserve';
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
        const Stack = createNativeStackNavigator();

        return (
          
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Map" component={Map} />
              <Stack.Screen name="Reserve" component={Reserve} />
              <Stack.Screen name="Chat" component={Chat} />
              <Stack.Screen name="History" component={History} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="LogOut" component={LogOut} />
            </Stack.Navigator>
       

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