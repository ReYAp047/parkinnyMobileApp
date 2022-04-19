import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, SafeAreaView, Button, Dimensions , Image,  StyleSheet, Text, View } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import MapView from 'react-native-maps';
import * as React from 'react';


import { useNavigation } from '@react-navigation/native';

export default function Map () {
  const navigation = useNavigation();
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            Parking Ariana
          </Text>

          
          <View style={styles.container}>
          <MapView style={styles.map} />
          </View>


          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("LogOut")}
            style={styles.touchableOpacityStyle}>
            <Image
              //We are making FAB using TouchableOpacity with an image
              //We are using online image here
              source={{
                uri:
                  'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650120729/logout-2032031-1713022_xokf1v.png',
              }}
              //You can use you project image Example below
              //source={require('./images/float-add-icon.png')}
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            
            style={styles.touchableOpaRight}>
            <Image
              //We are making FAB using TouchableOpacity with an image
              //We are using online image here
              source={{
                uri:
                  'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650121467/user_avatar_profile_person_account_icon_197530_echqw3.png',
              }}
              //You can use you project image Example below
              //source={require('./images/float-add-icon.png')}
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            
            style={styles.touchableOpa}>
            <Image
              //We are making FAB using TouchableOpacity with an image
              //We are using online image here
              source={{
                uri:
                  'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650120729/map_xjciba.png',
              }}
              //You can use you project image Example below
              //source={require('./images/float-add-icon.png')}
              style={styles.floatingButtonStyleMap}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            
            style={styles.touchableOpaLeft}>
            <Image
              //We are making FAB using TouchableOpacity with an image
              //We are using online image here
              source={{
                uri:
                  'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650121234/message_bubble_chat_icon_154003_ygz8mw.png',
              }}
              //You can use you project image Example below
              //source={require('./images/float-add-icon.png')}
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Reserve")}
            style={styles.touchableOpaMid}>
            <Image
              //We are making FAB using TouchableOpacity with an image
              //We are using online image here
              source={{
                uri:
                  'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650122142/edit_pencil_paper_modify_write_icon_141958_lwwhcb.png',
              }}
              //You can use you project image Example below
              //source={require('./images/float-add-icon.png')}
              style={styles.floatingButtonStyleMid}
            />
          </TouchableOpacity>
          
        </View>
      </SafeAreaView>
        
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
      },
      map: {
          flex: 4,
        //width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginBottom: 60,
      },
      titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        marginTop: 20
      },
      textStyle: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
      },
      touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        bottom: 5,
      },
      touchableOpaRight: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 75,
        bottom: 5,
      },
      touchableOpa: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 10,
        bottom: 5,
      },
      touchableOpaLeft: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 75,
        bottom: 5,
      },

      touchableOpaMid: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 145,
        bottom: 5,
        borderRadius: 10,
      },
      floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 40,
        //backgroundColor:'black'
      },
      floatingButtonStyleMid: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        //backgroundColor:'pink',
        
      },
      floatingButtonStyleMap: {
        resizeMode: 'contain',
        width: 35,
        height: 35,
        //backgroundColor:'black'
      },
});
