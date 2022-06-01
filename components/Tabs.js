import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Map from '../components/Map';
import Reserve from '../components/Reserve';
import Chat from '../components/Chat';
import Profile from '../components/Profile';
import LogOut from '../components/LogOut';


const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Map" component={Map} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650120729/map_xjciba.png',}} style={{width: 31, height: 31}} />)}}/>
        <Tab.Screen name="Chat" component={Chat} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650121234/message_bubble_chat_icon_154003_ygz8mw.png',}} style={{width: 45, height: 45}} />)}}/>
        <Tab.Screen name="Reserve" component={Reserve} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1654087487/reserver_hdpvl1.png',}} style={{width: 60, height: 30}} />)}}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650121467/user_avatar_profile_person_account_icon_197530_echqw3.png',}} style={{width: 40, height: 40}} />)}}/>
        <Tab.Screen name="LogOut" component={LogOut} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650120729/logout-2032031-1713022_xokf1v.png',}} style={{width: 40, height: 40}} />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}