import React, {useEffect, useState} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const MapScreen = ({navigation}: any) => {
  const [latitude, setLatitude] = useState(31.318327);
  const [longitude, setLongitude] = useState(48.67062);
  const [date, setDate] = useState(null);

  useEffect(() => {
    let today = new Date();
    let date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    setDate(date);
  }, []);
  return (
    <View style={{backgroundColor: 'green'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 31.318327,
          longitude: 48.67062,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onDoublePress={event => {
          setLatitude(event.nativeEvent.coordinate.latitude);
          setLongitude(event.nativeEvent.coordinate.longitude);
          console.log(event.nativeEvent.coordinate);
        }}>
        <Marker
          onPress={event => {}}
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title={'اهواز'}
          description={`DATE : ${date}  `}
          image={require('../../assets/images/icons8-location-100.png')}></Marker>
      </MapView>
    </View>
  );
};
export default MapScreen;

//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
