import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chat from './components/Chat';
import History from './components/History';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Map from './components/Map';
import Profile from './components/Profile';
import Reserve from './components/Reserve';
import LogOut from './components/LogOut';

const Stack = createNativeStackNavigator();

export default class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Reserve" component={Reserve} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="LogOut" component={LogOut} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}
