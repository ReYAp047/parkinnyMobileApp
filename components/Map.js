import { TouchableHighlight, SafeAreaView, TextInput, Dimensions , Image,  StyleSheet, Text, View, AppRegistry } from 'react-native';
import MapView from 'react-native-maps';
import React, { useCallback, useRef, useEffect, useState } from 'react';
import BottomSheet, { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import * as Location from 'expo-location'
import { Marker ,PROVIDER_GOOGLE,Callout} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();


export default function Map ({navigation}) {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState({});
  const allVilles = ['Tunis', 'Ariana', 'Kelibia', 'Mahdia'];
  const [villes, srtVille] = useState(allVilles);
  const [searchData, setSearchData] = useState();
  const  coordinate = [
    {name: 'Parking1',names:'Parking1',ville:'Mahdia', latitude: 35.50311, longitude: 11.05604, image: require('../assets/parking3.jpg')},
    {name: 'Parking2',names:'Parking2',ville:'Mahdia', latitude: 35.50599, longitude: 11.05698, image: require('../assets/parking3.jpg')},
    {name: 'Parking3',names:'Parking3',ville:'Mahdia',  latitude: 35.50811, longitude: 11.05442, image: require('../assets/parking3.jpg')},
    {name: 'Parking4',names:'Parking4',ville:'Mahdia',  latitude: 35.50613, longitude: 11.05989, image: require('../assets/parking3.jpg')},
    {name: 'Parking5',names:'Parking5',ville:'Mahdia', latitude: 35.50465, longitude: 11.05935, image: require('../assets/parking3.jpg')},
    {name: 'Parking6',names:'Parking6',ville:'Mahdia', latitude: 35.50128, longitude: 11.05989, image: require('../assets/parking3.jpg')},
    {name: 'Parking7',names:'Tunis-Carthage',ville:'Tunis', latitude: 36.8452, longitude: 10.1647, image: require('../assets/parking3.jpg')},
    {name: 'Parking8',names:'Africa Mall',ville:'Ariana', latitude: 36.85848527696623, longitude: 10.218306272963153 , image: require('../assets/parking3.jpg')},
    {name: 'Parking9',names:'Klibia Parking',ville:'Kelibia',  latitude: 36.85068443316672, longitude: 11.05442, image: require('../assets/parking3.jpg')},
    {name: 'Parking10',names:'Le Palmarium',ville:'Tunis',  latitude: 36.79860671747816, longitude: 10.18072795384903, image: require('../assets/parking3.jpg')},
    {name: 'Parking11',names:'Parking, Tunis',ville:'Tunis', latitude: 36.7981669380127, longitude: 10.164887198025717, image: require('../assets/parking3.jpg')},
    {name: 'Parking12',names:'Parking Aalem',ville:'Tunis', latitude: 36.83824559295232, longitude: 10.186082575839222, image: require('../assets/parking3.jpg')}, 
  ]
  const [coordinates, setCoordinates] = useState(coordinate);
  state = {
    markers: [],
  }
  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
    position => {
    console.log(JSON.stringify(position));

        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }

        this.setState({ initialPosition });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    )
     

  }

  onPositionGet = () => {
    this._map.animateToRegion({
      latitude:  36.8452,
      longitude: 10.1647,
      latitudeDelta: 1,
      longitudeDelta: 0.85
    })
  }
 
  onCarouselItemChange = (index) => {
    let location = coordinates[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    })

    this.state.markers[index].showCallout()
    global.loc=location;
    console.log(global.loc);
  }

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.06
      
    });

    this._carousel.snapToItem(index);
    global.loc=location;
    console.log(global.loc);
  }
  
  renderCarouselItem = ({ item }) =>
    <View style={styles.cardContainer}>
      <View style={styles.rowStyle}>
        <Text style={styles.cardTitle}>{item.names}</Text>
        <TouchableHighlight
          style={styles.submitOutline}
          underlayColor='#fff'
          onPress={() => navigation.navigate("Reserve")}>
                    <Text style={styles.submitTextWhite}>BOOK NOW</Text>
        </TouchableHighlight>
      </View>
      <Image style={styles.cardImage} source={item.image} />
        
    </View>


  
  const onChangeText = async (text) =>{
    setInput(text) 
    if (text.length == 0){
      setCoordinates(coordinate)
      return setSearchData([]);
    } 
    if (text.length > 2){
      const result = villes.filter(word => word.indexOf(text) > -1);
      if (result.length > 0)
       setSearchData(result)
       console.log(searchData);
    }else{
      setCoordinates(coordinate)
    }
  }

  const onPressBlur = async () =>{
    const parkingSeached = coordinates


    let parkingResult = [];
    for (let i = 0; i < parkingSeached.length; i++) 
    {
        if (parkingSeached[i].ville === searchData[0]) 
        {
          parkingResult.push(parkingSeached[i]);
        }
    }

    if(parkingResult.length > 0)
     {
      setCoordinates(parkingResult)
      this._map.animateToRegion({
        latitude: parkingResult[0].latitude,
        longitude: parkingResult[0].longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035
      })
    }


console.log(parkingResult);

console.log(b);

  }

  
  useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            return;
        }

        let locationn = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
            enableHighAccuracy: true,
            timeInterval: 5
        });
        setLocation(locationn);
        console.log(location);
        this.onPositionGet()
        

    })();
}, []);
  
    return(
  <SafeAreaView style={styles.safeV}>
    <View style={styles.container}>

         <MapView
            style={styles.map}
            showsUserLocation= {true}
            showsMyLocationButton= {true}
            ref ={ref => this._map  = ref}
            initialRegion={this.state.initialPosition} 
                 >
                 {
                    coordinates.map((marker , index) => (
                      <Marker
                      key={marker.name}
                      ref={ref => this.state.markers[index] = ref}
                      onPress={() => this.onMarkerPressed(marker, index)}
                      coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                      title={marker.name}

 
                      >
                          <Image
                            source={require('.././assets/marker.png')}
                            style={{width: 32, height: 34}}
                            resizeMode="contain"
                          />
                    <Callout>
                     <Text>{marker.name} </Text>
                  </Callout>
                      </Marker>
                    ))
                  }
                   </MapView> 

                   <Carousel
                      ref={(c) => { this._carousel = c; }}
                     data={coordinates}
                     containerCustomStyle={styles.carousel}
                     renderItem={this.renderCarouselItem}
                     sliderWidth={Dimensions.get('window').width}
                     itemWidth={300}
                     removeClippedSubviews={false}
                     onSnapToItem={(index) => this.onCarouselItemChange(index)}
                       /> 

                    <TextInput
                      placeholder = "Find location"
                      value = {input}
                      onChangeText = {onChangeText}
                      onBlur = {onPressBlur}
                      style={styles.CustomTextInput}>
                     </TextInput>
                  
       </View>

      </SafeAreaView>
        
    );

}


const styles = StyleSheet.create({
  safeV :{
    flex: 1,
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
    marginTop: 30,
    marginBottom: 25,
  },
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  submitOutline: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: '#53A7B2',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#53A7B2',
  },
  submitTextWhite: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'normal',
  },
  map: {
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height,
    },
    cardContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      height: 200,
      width: 300,
      padding: 24,
      borderRadius: 24
    },
    carousel: {
      position: 'absolute',
      bottom: 0,
      marginBottom: 48
    },
    cardImage: {
      height: 120,
      width: 300,
      bottom: 0,
      position: 'absolute',
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24
    },
    cardTitle: {
      color: 'white',
      fontSize: 18,
      marginLeft: 5
    },

    CustomTextInput: {
          height: 40,
          width: 200,
          borderRadius: 5,
          backgroundColor: "white",
          position: 'absolute',
          top: 0,
          zIndex: 1,
          marginTop: 30 
    }


});