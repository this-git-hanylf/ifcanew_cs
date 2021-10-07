import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

// import HomeScreen from './HomeScreen';

import ProfileSkipScreen from '../SkipScreen/ProfileSkip';
import SkipScreen from '../SkipScreen';
import SignInScreen from '../SignInScreen';

const HomeStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

//SCREEN BARU
// import HomeNewScreen from './Home';
import {ImagePropTypes} from 'react-native';

const SkipTabScreen = ({navigation}) => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileSkipScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default SkipTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false, //..hide header
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen name="Skip" component={SkipScreen} />
    <HomeStack.Screen name="SignIn" component={SignInScreen} />
  </HomeStack.Navigator>
);
