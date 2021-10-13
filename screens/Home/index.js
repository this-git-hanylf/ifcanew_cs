import React from 'react';
// import {Text} from '@components';
import {View, Button, StyleSheet, StatusBar, Text, Image,TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Styles from './styles';
import ThemeColors from '../../src/themes/Colors';

const HomeNewScreen = ({navigation}) => {
  const {colors} = useTheme(); //colors ini untuk memunculkan darkmode

  const theme = useTheme();

  return (
    <View style={{backgroundColor:'#fff'}}>
      {/* STATUS BAR JANGAN DIUBAH, KARENA TEMPLATE NYA BISA CHANGE DARKMODE */}
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.dark ? '#000' : '#fff'}
      />
      {/* STATUS BAR JANGAN DIUBAH, KARENA TEMPLATE NYA BISA CHANGE DARKMODE */}

      {/* ------- CONTENT HOME DARI SINI ----------*/}
      <View>
        <View style={{paddingHorizontal: 20, paddingBottom: 10, marginTop:15}}>
            <Text>Pakubuwono</Text>
            <Text>Make everyday extraordinary</Text>
        </View>
         <View style={{marginLeft: 20, marginRight: 20}}>
          <Image
            source={require('@srcAsset/image/dummy/skiplogin/image1.jpeg')}
            style={Styles.img_head}
          />
        </View>
        <View style={{backgroundColor:ThemeColors.abumuda_pkbw, borderRadius: 15, marginHorizontal: 30, marginVertical: 20, height: 70,}}>
          <View style={{flexDirection:'row', justifyContent:'space-around', flex:1, alignItems:'center'}}>
            <View>
              <Text style={{fontSize: 11}}>INVOICE DUE</Text>
              <Text style={{fontSize: 16, fontWeight:'bold'}}>Rp. 10.000.000</Text>
            </View>
            <View> 
              <Text style={{textAlign:'right',fontSize: 11}}>TOTAL</Text>
              <Text style={{textAlign:'right',fontSize: 16, fontWeight:'bold'}}>Rp. 15.000.000</Text>
            </View>
          </View>
        </View>

        {/* ------FEATURES------- */}
        <View style={{marginHorizontal: 20, marginVertical: 20,}}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View>
              <Text style={{fontWeight:'bold', fontSize:17, }}>Features</Text>
            </View>
            <View style={{backgroundColor:ThemeColors.abumuda_pkbw, borderRadius: 10, padding: 5}}>
              <Text style={{fontWeight:'bold',fontSize:13, }}>View All</Text>
            </View>
          </View>

          {/* -------menu---- */}
          <View style={{flexDirection:'row',  justifyContent:'space-around', marginTop: 10}}>
          {/* NANTI COBA PAKE LISTVIEW REACT NATIVE YA ----- */}
            <TouchableOpacity>
              <View style={{width: 60, height: 60, backgroundColor:ThemeColors.hijau_pkbw, justifyContent: "center", alignContent:'center', borderRadius:10}}>
                <Image style={{width: 30, height: 30, justifyContent: "center", alignItems: "center",alignSelf:'center', alignContent:'center'}} source={require('@srcAsset/image/dummy/icon_menu_home/invoice.png')}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{width: 60, height: 60, backgroundColor:ThemeColors.hijau_pkbw, justifyContent: "center", alignContent:'center', borderRadius:10}}>
                <Image style={{width: 30, height: 30, justifyContent: "center", alignItems: "center",alignSelf:'center', alignContent:'center'}} source={require('@srcAsset/image/dummy/icon_menu_home/invoice.png')}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{width: 60, height: 60, backgroundColor:ThemeColors.hijau_pkbw, justifyContent: "center", alignContent:'center', borderRadius:10}}>
                <Image style={{width: 30, height: 30, justifyContent: "center", alignItems: "center",alignSelf:'center', alignContent:'center'}} source={require('@srcAsset/image/dummy/icon_menu_home/invoice.png')}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{width: 60, height: 60, backgroundColor:ThemeColors.hijau_pkbw, justifyContent: "center", alignContent:'center', borderRadius:10}}>
                <Image style={{width: 30, height: 30, justifyContent: "center", alignItems: "center",alignSelf:'center', alignContent:'center'}} source={require('@srcAsset/image/dummy/icon_menu_home/invoice.png')}/>
              </View>
            </TouchableOpacity>
          </View>
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
