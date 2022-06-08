import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../src/Screen/HomeScreen';
import PhotoScreen from '../../src/Screen/PhotoScreen';
import MapScreen from '../../src/Screen/MapScreen';
import LoginScreen from '../../src/Screen/LoginScreen';
import {StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          //botton: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicon
                size={25}
                name={focused == true ? 'home-outline' : 'home'}
                color={focused == true ? '#FF06B7' : '#4B5D67'}></Ionicon>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SimpleLineIcons
                size={25}
                name={focused == true ? 'user-following' : 'login'}
                color={
                  focused == true ? '#FF06B7' : '#4B5D67'
                }></SimpleLineIcons>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="Photo"
        component={PhotoScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicon
                size={30}
                name={focused == true ? 'camera-outline' : 'camera'}
                color={focused == true ? '#FF06B7' : '#4B5D67'}></Ionicon>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicon
                name={focused == true ? 'map-sharp' : 'map'}
                color={focused == true ? '#FF06B7' : '#4B5D67'}
                size={25}></Ionicon>
            );
          },
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
