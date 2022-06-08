import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
const PhotoScreen = ({navigation}: any) => {
  console.log('>>>>>>>PhotoScreen<<<<<');
  return (
    <View style={styles.container}>
      <Text> Find Screen</Text>
      <Button title="Click Here">
        onPress={() => console.log('click me')}
      </Button>
    </View>
  );
};
export default PhotoScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
