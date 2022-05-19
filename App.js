import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './components/Home';
import LogIn from './components/LogIn';
import Tabs from './components/Tabs';

import Reserve from './components/Reserve';



const Stack = createNativeStackNavigator();

export default class App extends React.Component{
  render(){
    return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Reserve" component={Reserve} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}
