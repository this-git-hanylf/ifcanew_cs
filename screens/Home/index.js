import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeNewScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      {/* STATUS BAR JANGAN DIUBAH, KARENA TEMPLATE NYA BISA CHANGE DARKMODE */}
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      {/* STATUS BAR JANGAN DIUBAH, KARENA TEMPLATE NYA BISA CHANGE DARKMODE */}

      {/* ------- CONTENT HOME DARI SINI ----------*/}
      <Text style={{color: colors.text}}>home yang baru</Text>
      {/* <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );
};

export default HomeNewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
