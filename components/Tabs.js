import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, LogBox, View } from 'react-native';

import Map from '../components/Map';
import Reserve from '../components/Reserve';
import History from '../components/History';
import Profile from '../components/Profile';
import LogOut from '../components/LogOut';

LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Map" component={Map} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650120729/map_xjciba.png',}} style={{width: 31, height: 31}} />)}}/>
        <Tab.Screen name="History" component={History} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1656427258/history_vgv0fb.png',}} style={{width: 38, height: 38, opacity: 0.7}} />)}}/>
        <Tab.Screen name="Reserve" component={Reserve} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1654087487/reserver_hdpvl1.png',}} style={{width: 60, height: 30}} />)}}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650121467/user_avatar_profile_person_account_icon_197530_echqw3.png',}} style={{width: 40, height: 40}} />)}}/>
        <Tab.Screen name="LogOut" component={LogOut} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650120729/logout-2032031-1713022_xokf1v.png',}} style={{width: 40, height: 40}} />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}