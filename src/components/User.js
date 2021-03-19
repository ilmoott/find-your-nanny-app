
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: { 
  },
  stretch: {
    width: 80,
    height: 80,
    borderRadius: 80,
    resizeMode: 'stretch',
  },
});

const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../assets/user.png')}
      />
    </View>
  );
}

export default DisplayAnImageWithStyle;