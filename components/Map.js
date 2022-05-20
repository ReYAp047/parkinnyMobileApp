import { TouchableOpacity, SafeAreaView, Button, Dimensions , Image,  StyleSheet, Text, View, AppRegistry } from 'react-native';
import MapView from 'react-native-maps';
import React, { useCallback, useRef, useMemo, useState } from 'react';
import BottomSheet, { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { Marker ,PROVIDER_GOOGLE,Callout} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';



export default function Map () {

  state = {
    markers: [],
    coordinates: [
      {name: 'Parking1',names:'parking1', latitude: 35.50311, longitude: 11.05604, image: require('../assets/parking3.jpg')},
      {name: 'Parking2', names:'parking2', latitude: 35.50599, longitude: 11.05698, image: require('../assets/parking3.jpg')},
      {name: 'Parking3',names:'parking3',  latitude: 35.50811, longitude: 11.05442, image: require('../assets/parking3.jpg')},
      {name: 'Parking4',names:'parking4',  latitude: 35.50613, longitude: 11.05989, image: require('../assets/parking3.jpg')},
      {name: 'Parking5',names:'parking5', latitude: 35.50465, longitude: 11.05935, image: require('../assets/parking3.jpg')},
      {name: 'Parking6',names:'parking6', latitude: 35.50128, longitude: 11.05989, image: require('../assets/parking3.jpg')}, 
    ]
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
 
  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      //latitudeDelta: 0.09,
      //longitudeDelta: 0.035
    })

    this.state.markers[index].showCallout()
  }

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      //latitudeDelta: 0.09,
      //longitudeDelta: 0.06
    });

    this._carousel.snapToItem(index);
  }
  
  renderCarouselItem = ({ item }) =>
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.names}</Text>
      <Image style={styles.cardImage} source={item.image} />
    </View>









   const sheetRef = useRef(null);
   const [isOpen, setIsOpen] = useState(true);

   const snapPoints = ["40%",];

   const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
   }, []);

    return(
        <SafeAreaView style={styles.container}>
 <View style={styles.container}>
         <MapView
            style={styles.map}
            showsUserLocation= {true}
            //showsMyLocationButton= {true}
            ref ={ref => this._map  = ref}
            initialRegion={this.state.initialPosition} 
                 >
                 {
                    this.state.coordinates.map((marker , index) => (
                      <Marker
                      key={marker.name}
                      ref={ref => this.state.markers[index] = ref}
                      onPress={() => this.onMarkerPressed(marker, index)}
                      coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                      title={marker.name}
                     // image= 
                      >
                    <Callout>
                     <Text>{marker.name} </Text>
                  </Callout>
                      </Marker>
                    ))
                  }
                   </MapView> 
                  
                   <Carousel
                      ref={(c) => { this._carousel = c; }}
                     data={this.state.coordinates}
                     containerCustomStyle={styles.carousel}
                     renderItem={this.renderCarouselItem}
                     sliderWidth={Dimensions.get('window').width}
                     itemWidth={300}
                     removeClippedSubviews={false}
                     onSnapToItem={(index) => this.onCarouselItemChange(index)}
                       /> 
       </View>

      </SafeAreaView>
        
    );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
      fontSize: 22,
      alignSelf: 'center'
    }
});