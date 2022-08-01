import 'react-native-gesture-handler';
import React, {useState } from 'react';
import { Input, Icon, Stack, Center, NativeBaseProvider } from "native-base";

import { TouchableHighlight, Alert, Image,  StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '.././Core/Config'

import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
LogBox.ignoreAllLogs();


export default function LogIn () { 
  const onWork = () => {
   
    Alert.alert("On work!")

  }
const navigation = useNavigation();
  
const [email, setEmail] = useState("");

const [password, setpassword] = useState("");
const passwordChange = text => setpassword(text);

const handleCreateAccount = () => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    Alert.alert('Account Created!')
    const user = userCredential.user;
    global.foo = user['uid']
    navigation.navigate('Tabs')

  })
  .catch(error => {
    console.log(error)
    Alert.alert(error.message)
  })
}

const handleSignIn = () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    Alert.alert('Signed In!')
    const user = userCredential.user;
    global.foo = user['uid']
    navigation.navigate('Tabs')
  })
  .catch(error => {
    console.log(error)
    Alert.alert(error.message)
  })
}

  const [show, setShow] = useState(false);

  return(
  <NativeBaseProvider>
    <View style={styles.container}>

      <View style={styles.rectangle}>
        <Center>
          <Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1650940957/parkinny_1_ur3vi3.png',}} style={styles.logo} /> 
          <Text style={styles.loginText}>Log in to Parkinny to continue</Text>
        </Center>
        <View>
        <Stack space={4} w="100%" alignItems="center">
      <Input w={{
      base: "90%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="mail" />} size={5} ml="2" color="muted.400" />} isRequired onChangeText={(val) => setEmail(val)} placeholder="Email" />
      <Input w={{
      base: "90%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} onChangeText={passwordChange} value={password} placeholder="Password" />
    </Stack>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>

        <View style={styles.fixToTextt}>
          <TouchableHighlight
            style={styles.submitNormal}
              underlayColor='#fff'
              onPress={handleSignIn}>
            <Text style={styles.submitTextBlack}>LOG IN</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.submitOutline}
              underlayColor='#fff'
              onPress={handleCreateAccount}>
            <Text style={styles.submitTextWhite}>REGISTER</Text>
          </TouchableHighlight>
      </View>

        <View style={styles.vertical}>
         <Text style={styles.forgotPassword}>Don't have an account?</Text>
         <Text style={styles.signUp}>Sign up</Text>
        </View>
        <View style={styles.vertical}>
         <View style={styles.line}/>
         <Center>
           <Text style={styles.or}>OR</Text>
         </Center>
         <View style={styles.linee}/>
        </View>
        <View style={styles.fixToText}>
        <TouchableHighlight
                style={styles.submitOutlinee}
                underlayColor='#fff'
                onPress={onWork}>
                <Center>
                  <View style={styles.vertical}>
                    <Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1657983887/google_vyelwp.png',}} style={styles.logoLogin} /> 
                    <Text style={styles.submitTextWhitee}>Contitune with Google</Text>
                </View>
                </Center>
            </TouchableHighlight>
        </View>
        <View style={styles.fixToText}>
        <TouchableHighlight
                style={styles.submitOutlinee}
                underlayColor='#fff'
                onPress={onWork}>
                <Center>
                  <View style={styles.verticall}>
                    <Image source={{uri:'https://res.cloudinary.com/dhncrtnjp/image/upload/v1657984203/Facebook_logo__square_mh7smo.png',}} style={styles.logoLogin} /> 
                    <Text style={styles.submitTextWhitee}>Contitune with Facebook</Text>
                </View>
                </Center>
            </TouchableHighlight>
        </View>

      </View> 


    </View>
    
  </NativeBaseProvider>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80, 
    marginBottom: 50,
    backgroundColor: "white",
  },
  vertical: {
    flexDirection : "row"
  },
  verticall: {
    flexDirection : "row", 
    marginLeft: 13
  },
  image: {
    justifyContent: "center",
    flex: 5,
  },
  rectangle: {
    backgroundColor: "white",
    flex: 1
    
  },
  fixToText: {
    marginTop: 25,
    marginLeft: 18,
    marginRight: 18,
  },

  fixToTextt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  submitOutline: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 45,
    paddingLeft: 45,
    backgroundColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  submitOutlinee: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 45,
    paddingLeft: 45,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },

  submitTextWhite: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'bold',
  },

  

  submitTextWhitee: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'normal',
    marginTop: 7,
    marginLeft: 5
  },

  forgotPassword: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 18, 
    marginTop: 5
  },
  signUp: {
    color: '#0062A9',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 6, 
    marginTop: 5
  },

  or: {
    color: '#606060',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 6, 
    marginTop: 23
  },
  
  loginText: {
    color: '#606060',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'normal',
    marginBottom: 20,
    marginTop: 7

  },

  logo: {
    width: 70,
    height: 52,
    marginTop: 50,
  },

    logoLogin: {
    width: 30,
    height: 30,
  },
  line: {
    width: 147,
    height: 1,
    backgroundColor: "gray",
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 30
  },

  linee: {
    width: 147,
    height: 1,
    backgroundColor: "gray",
    borderRadius: 10,
    marginLeft: 6,
    marginBottom: 5,
    marginTop: 30
  },

  submitNormal: {
    marginRight: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 50,
    paddingLeft: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },

  submitTextBlack: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'bold',
  },

});