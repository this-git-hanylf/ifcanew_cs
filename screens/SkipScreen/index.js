import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../src/themes/Colors';
import Styles from './styles';

const SkipScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* ------ HEADER -----  */}
        <View
          backgroundColor={colors.hijau_pkbw}
          style={{
            height: 150,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginHorizontal: 50,
              fontWeight: 'bold',
              fontSize: 22,
              color: colors.white,
            }}>
            Pakubuwono
          </Text>
          <Text style={Styles.title_header}>
            Setting a banchmark for luxury living in Jakarta
          </Text>
        </View>

        {/* ------ CONTENT ------ */}
        <View style={{marginLeft: 20, marginRight: 20}}>
          <Image
            source={require('@srcAsset/image/dummy/skiplogin/image1.jpeg')}
            style={Styles.img_head}
          />
        </View>
        <Text style={Styles.titles_italic}>"Once upon your lifetime..."</Text>
        <View style={Styles.card}>
          <Text style={Styles.titles}>The Pakubuwono Residence</Text>
          <Text style={Styles.text}>
            2BR - Ironwood & Cottonwood Tower (Semi Gross : 177m²){' '}
          </Text>
          <Text style={Styles.text}>
            2BR - Eaglewood, Basswood & Sandalwood Tower (Semi Gross : 203m²)
          </Text>
          <Text style={Styles.text}>
            3BR - Ironwood & Cottonwood Tower (Semi Gross : 245m²){' '}
          </Text>
          <Text style={Styles.text}>
            3BR - Eaglewood, Basswood & Sandalwood Tower (Semi Gross : 303m²){' '}
          </Text>
          <Text style={Styles.text}>
            Inspired by the 1950’s Art Deco history and tradition of the
            Kebayoran Baru district, The Pakubuwono Residence is expressed in 5
            distinguished 24-storeyed towers placed on 4.2 hectares of land.
            Only about 7400 square meters of the land is occupied by structure,
            leaving the remaining 80% developed into lush landscape areas
            reflecting the modern luxurious lifestyle. Residents can enjoy the
            serenity and security of living surrounded by spacious greenery
            designed for relaxation, exercise and socializing while being
            located in the middle of the city. The interior design of the
            residences can be described as modern classical, reflecting the
            property's five–star level of service and amenities.{' '}
          </Text>
        </View>
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 18,
              color: colors.abutext_pkbw,
              fontWeight: 'bold',
            }}>
            Contact Us
          </Text>
        </View>

        <View style={[Styles.card, {marginTop: 10, marginBottom: 10}]}>
          <Text style={[Styles.text, {textAlign: 'center'}]}>
            The Pakubuwono Residence
          </Text>
          <Text style={[Styles.text, {textAlign: 'center'}]}>
            Jl. Bumi No. 15, Jakarta Selatan 12120, Indonesia
          </Text>
          <Text style={[Styles.text, {textAlign: 'center'}]}>
            <FontAwesome name="envelope" style={{fontSize: 15}} />{' '}
            inquiry@Pakubuwono6.com
          </Text>
          <Text style={[Styles.text, {textAlign: 'center'}]}>
            <FontAwesome name="phone" style={{fontSize: 15}} /> +62 (21) 7259988
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SkipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
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
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
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
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
