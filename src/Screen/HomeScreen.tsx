import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text> login Screen</Text>
      <Button title="Click Here">
        onPress={() => console.log('click me')}
      </Button>
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
