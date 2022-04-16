import React from 'react';
import jwtDecode from 'jwt-decode';
import * as AuthSession from 'expo-auth-session';
import { openAuthSessionAsync } from 'expo-web-browser';
import { Alert, Button, Platform, StyleSheet, Text, View } from 'react-native';
import Home from './Home';

const auth0ClientId = "uCtTuai3OyeNX17GPAM2frzmxPwxejYc";
const authorizationEndpoint = "https://parkinny-pfe.eu.auth0.com/authorize";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy }); // <-- must be set in allowed logout urls


export default function LogOut () { 
    const logout = async () => {
        try {
          await openAuthSessionAsync(`${authorizationEndpoint}?client_id=${auth0ClientId}&returnTo=${redirectUri}`, 'redirectUrl');
          // handle unsetting your user from store / context / memory
        } catch (err) {
           console.error(err)    
        }

        <Home/>
      }
      console.log(redirectUri)
      return (
        <View style={styles.container}>
          <Button
            title="Logout"
            onPress={logout}
          />
        </View>
      );
  
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
      },
    });