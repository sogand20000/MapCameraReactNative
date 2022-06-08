import React from 'react';
import {Text, SafeAreaView, View, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';
/* import LoginSVG from './../../assets/images/login.svg';
 */ import InputField from './../components/InputField';
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
          {/*  <LoginSVG
            width="300"
            height="300"
            style={{
              transform: [{rotate: '-5deg'}],
            }}></LoginSVG> */}
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
          keyboardType="string"
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
          keyboardType="string"
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
