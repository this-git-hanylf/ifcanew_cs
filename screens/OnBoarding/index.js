import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';

const OnBoardingScreen = ({navigation}) => {
  const {colors} = useTheme();
  const slider = [
    {
      key: 1,
      // title: 'Title 1',
      // text: 'Description.\nSay something cool',
      image: require('../../src/assets/image/background/Pakubuwono.png'),
      // backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'There is no place like the homes by \nThe Pakubuwono Residence',
      image: require('../../src/assets/icons/onboard/apartment.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text:
        'Our properties have set a new standard of comfort and lxury in all of Southeast Asia',
      image: require('../../src/assets/icons/onboard/treasure-map.png'),
      backgroundColor: '#22bcb5',
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <Text style={[stylesSlide.title, {fontWeight: 'bold'}]}>
          {item.title}
        </Text> */}
        <Image
          source={item.image}
          style={{
            width: 300,
            resizeMode: 'center',
            alignSelf: 'center',
          }}
        />
        <Text style={[stylesSlide.text, {fontSize: 17, marginHorizontal: 30}]}>
          {item.text}
        </Text>
      </View>
    );
  };

  const _onDone = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={require('../../src/assets/image/background/bg.jpeg')}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
          width: '100%',
          // paddingBottom: 10,
        }}>
        <AppIntroSlider
          renderItem={_renderItem}
          data={slider}
          showSkipButton={true}
          onDone={_onDone}
          dotClickEnabled={true}
        />
      </ImageBackground>
    </View>
  );
};

export default OnBoardingScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    marginTop: 500,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const stylesSlide = StyleSheet.create({
  slide: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },

  imagebackground: {
    flex: 1,
    justifyContent: 'center',

    // width: 600,
    // height: 800,
    alignSelf: 'center',
  },
  text: {
    // color: 'rgba(255, 255, 255, 0.8)',
    color: '#333',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
    // top: 10,
  },
});
