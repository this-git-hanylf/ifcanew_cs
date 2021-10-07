import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../../components/context';

const ProfileSkipScreen = ({navigation}) => {
  const {signOut, toggleTheme, signIn, _onSkipLogin} = React.useContext(
    AuthContext,
  );
  return (
    <View style={styles.container}>
      <Text>Profile Skip Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
      <Button onPress={() => _onSkipLogin()} title="SignIn" />
    </View>
  );
};

export default ProfileSkipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
