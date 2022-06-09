import React from 'react';
import {Text, Button, View, StyleSheet, Image} from 'react-native';
const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('./../../assets/images/login.png')}
          style={{
            height: 200,
            width: 400,
            transform: [{rotate: '-5deg'}],
          }}
        />
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
            paddingTop: 50,
          }}>
          Home
        </Text>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
