import React from 'react';
// import {Text} from '@components';
import {View, Button, StyleSheet, StatusBar, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeNewScreen = ({navigation}) => {
  const {colors} = useTheme(); //colors ini untuk memunculkan darkmode

  const theme = useTheme();

  return (
    <View>
      {/* STATUS BAR JANGAN DIUBAH, KARENA TEMPLATE NYA BISA CHANGE DARKMODE */}
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      {/* STATUS BAR JANGAN DIUBAH, KARENA TEMPLATE NYA BISA CHANGE DARKMODE */}

      {/* ------- CONTENT HOME DARI SINI ----------*/}
      <View>
        <View style={{paddingHorizontal: 20, paddingBottom: 10}}>
          <Text style={{color: colors.text}}>halo</Text>
        </View>
      </View>
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
