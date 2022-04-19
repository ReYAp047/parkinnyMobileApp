import { StatusBar } from 'expo-status-bar';
import { SafeAreaView , Button,  StyleSheet, View, Image } from 'react-native';
import React from 'react';

import { Heading,Text , Center, NativeBaseProvider } from 'native-base';

export default class Reserve extends React.Component {
render(){
    return(
      <SafeAreaView style={styles.container}>
            <NativeBaseProvider>
                <Center>
                  <View>
                    <View style={styles.rowStyle}>
                      <Image
                        style={styles.tinyLogo}
                        source={{  uri: 'https://res.cloudinary.com/dhncrtnjp/image/upload/v1644768061/b4mujbzt29vds4gpvkmn.jpg',  }}/>  
                      <View style={styles.prices}>
                        <Heading size="sm" style={styles.headerStyle}>Parkinny prices</Heading>
                        <Text fontSize="xs">3dt/hour</Text>
                      </View>
                  </View>
                    <Center>
                     <Heading size="xs" style={styles.serviceHeader}>Choose your reservation Hours</Heading>
                    </Center>
                  </View>
                </Center>
            </NativeBaseProvider>
      </SafeAreaView>



    )
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
  },
  rowStyle: {
    flexDirection: "row",
  },
  prices: {
    marginTop: 15,
    marginLeft: 10,
  },
  tinyLogo: {
    width: 100,
    height: 74,
  },
  headerStyle: {
    marginBottom: 10,
  },
  serviceHeader: {
    marginTop: 40,
  },
});
