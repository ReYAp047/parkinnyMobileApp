import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, SafeAreaView, Button, Dimensions , Image,  StyleSheet, Text, View } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import MapView from 'react-native-maps';
import React from 'react';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { useNavigation } from '@react-navigation/native';

const iii = 'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650122142/edit_pencil_paper_modify_write_icon_141958_lwwhcb.png'
const TabArr = [
  { route: 'Reserve', label: 'Home', activeIcon: 'grid', inActiveIcon: 'grid-outline' },
  { route: 'Reserve', label: 'Like', activeIcon: 'heart-plus', inActiveIcon: 'heart-plus-outline' },
  { route: 'Reserve', label: 'Search', activeIcon: 'timeline-plus', inActiveIcon: 'timeline-plus-outline' },
  { route: 'Reserve', label: 'Account',  activeIcon: 'user-circle', inActiveIcon: 'user-circle-o' },
];

export default function Map () {
  const navigation = useNavigation();


    return(
        <SafeAreaView style={styles.container}>


      
        <View style={styles.container}>

          
          <View style={styles.container}>
          <MapView style={styles.map} />
          </View>

         

          
        </View>


      </SafeAreaView>
        
    );

}


const styles = StyleSheet.create({
    container: {
      marginTop: 5,
        flex: 1,
        backgroundColor: 'white',
      },
      map: {
          flex: 4,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginTop: 13,
      },



});
