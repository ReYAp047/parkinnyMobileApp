import 'react-native-gesture-handler';
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
        <Tab.Screen name="Map" component={Map} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1661297441/shopping_map_route_placeholder_shop_marketplace_icon_225147_1_lsajtt.png',}} style={{width: 31, height: 31}} />)}}/>
        <Tab.Screen name="History" component={History} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1661299487/shoppaymentorderbuy-03_icon-icons.com_73859_owirp3.png',}} style={{width: 30, height: 30}} />)}}/>
        <Tab.Screen name="Reserve" component={Reserve} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1663605504/16credit-card_102121_vos9bn.png',}} style={{width: 32, height: 32}} />)}}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1661299487/qr_code_icon_146891_c9tdqn.png',}} style={{width: 30, height: 30}} />)}}/>
        <Tab.Screen name="Wallet" component={LogOut} options={{tabBarIcon: () => (<Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1661299487/shoppaymentorderbuy-04_icon-icons.com_73886_buijs0.png',}} style={{width: 30, height: 30}} />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}