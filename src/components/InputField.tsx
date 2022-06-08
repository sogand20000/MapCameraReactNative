import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
export default function InputField({
  lable,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 0,
          }}
          placeholder={lable}
          keyboardType={keyboardType}></TextInput>
      ) : (
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 0,
          }}
          placeholder={lable}
          keyboardType={keyboardType}></TextInput>
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
