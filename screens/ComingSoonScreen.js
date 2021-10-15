import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ComingSoonScreen = () => {
    return (
      <View style={styles.container}>
       <Text style={{fontWeight:'bold', fontSize:17, }}>Coming Soon Screen</Text>
        {/* <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        /> */}
      </View>
    );
};

export default ComingSoonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
