import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Button, Image,  StyleSheet, Text, View } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import React from 'react';


export default class Map extends React.Component {
render(){
    return(
        <View style={styles.container}>
            <Text>
                Hello From Map Page
            </Text>
        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});