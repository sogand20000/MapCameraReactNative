import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';
import LoginPng from './../../assets/images/login.png';
import InputField from './../components/InputField';
import {JSHash, CONSTANTS} from 'react-native-hash';

const LoginScreen = ({navigation}: any) => {
  const showAlert = () => {
    JSHash('Email', CONSTANTS.HashAlgorithms.sha256)
      .then(hash => {
        Alert.alert('hash Code', ' Email =' + hash);
      })
      .catch(e => console.log(e));
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('./../../assets/images/login.png')}
            style={{
              height: 150,
              width: 300,
              transform: [{rotate: '-5deg'}],
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>
        <InputField
          lable={'Email ID'}
          icon={
            <MaterialCommunityIcons
              name="email-plus-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
          inputType="password"
          keyboardType="default"
        />
        <InputField
          lable={'Password'}
          icon={
            <MaterialCommunityIcons
              name="key-variant"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="visible-password"
          keyboardType="default"
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
        />

        <CustomButton
          label={'Login'}
          onPress={showAlert}
          /*   onPress={() => {
            JSHash('email', CONSTANTS.HashAlgorithms.sha256).then(
              hash =>
                ///

                toast.show({
                  render: () => {
                    return (
                      <Alert
                        text={`hash Code = ${hash}`}
                        type="login-password"></Alert>
                    );
                  },
                }),
              ///
            );
          }} */
        />
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
