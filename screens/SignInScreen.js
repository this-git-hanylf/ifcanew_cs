import React, {useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';

import {AuthContext} from '../components/context';

import Users from '../model/users';

//new import from approval
import {useDispatch} from 'react-redux';
import UserController from '../src/controller/UserController';
import DeviceInfo from 'react-native-device-info';
import {productService} from '../src/controller/ProductService';
import {sessions} from '../src/helpers';
const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',

    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    token: '',
    device: '',
  });

  const {colors} = useTheme();

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  //   const loginHandle = (userName, password) => {
  //     // console.log('usernm', userName);
  //     const foundUser = Users.filter(item => {
  //       return userName == item.username && password == item.password;
  //     });

  //     if (data.username.length == 0 || data.password.length == 0) {
  //       Alert.alert(
  //         'Wrong Input!',
  //         'Username or password field cannot be empty.',
  //         [{text: 'Okay'}],
  //       );
  //       return;
  //     }

  //     if (foundUser.length == 0) {
  //       Alert.alert('Invalid User!', 'Username or password is incorrect.', [
  //         {text: 'Okay'},
  //       ]);
  //       return;
  //     }
  //     signIn(foundUser);
  //   };

  const buttonLogin = async (userName, password) => {
    const mac = await DeviceInfo.getMacAddress().then(mac => {
      return mac;
    });

    console.log('mac', mac);
    const formData = {
      email: userName,
      password: password,
      token: '',
      token_firebase: data.token,
      device: data.device,
      mac: mac,
      app: 'O',
    };

    await UserController.login(formData).then(res => {
      if (res.Error === false || !res.Error) {
        if (res.Data.isResetPass === false || !res.Data.isResetPass == 1) {
          getTower(res);
          // console.log('abis ini get tower', res);
          // alert('abis ini get tower', res.Data);
          // signIn(res);
        } else {
          navigation.navigate(this.props.componentId, 'SignUpScreen', {
            email: res.Data.user,
          });
        }
      }
    });
  };
  const getTower = async rest => {
    let result = rest.Data;
    // console.log('result for gettower', result);
    const data = {
      email: result.user,
      app: 'O',
    };
    // console.log('data for gettower', data);

    await productService.getTower(data).then(res => {
      if (res.Error === false) {
        let resData = res.Data;
        result['UserProject'] = resData;
        storagesignIn(result);
        console.log('resDataTower', resData);
      }
    });
  };

  const storagesignIn = async res => {
    console.log('res storage login', res);
    // const {emailTextInput, passwordTextInput} = this.state;
    try {
      sessions.setSess('@UserId', res.UserId);
      sessions.setSess('@Name', res.name);
      sessions.setSess('@Token', res.Token);
      sessions.setSess('@User', res.user);
      sessions.setSess('@Group', res.Group);
      sessions.setSess('@isLogin', true);
      sessions.setSess('@isReset', res.isResetPass);
      sessions.setSess('@AgentCd', res.AgentCd);
      sessions.setSess('@Debtor', res.Debtor_acct);
      sessions.setSess('@rowID', res.rowID);
      sessions.setSess('@RefreshProfile', false);
      sessions.setSess('@UserProject', res.UserProject);

      signIn(res);
    } catch (err) {
      console.log('error:', err);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}>
          Username
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            // onPress={() => {
            //   loginHandle(data.username, data.password);
            //           }}
            onPress={() => {
              buttonLogin(data.username, data.password);
              //   alert('halo');
            }}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[
              styles.signIn,
              {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#009387',
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
