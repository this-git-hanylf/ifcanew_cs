import React, {useState} from 'react';
// import {Text} from '@components';
import {View, Button, StyleSheet, StatusBar, Text, Image,TouchableOpacity, FlatList, Dimensions,ScrollView, SafeAreaView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Styles from './styles';
import ThemeColors from '../../src/themes/Colors';
import PromoList from '../Promo/PromoList';

const HomeNewScreen = ({navigation}) => {
  const {colors} = useTheme(); //colors ini untuk memunculkan darkmode

  const theme = useTheme();

  const data = [
    {
      id: '1',
      title: 'Billing',
      image: require('@srcAsset/image/dummy/icon_menu_home/invoice-colored.png'),
      background: '#e6f0df'
    },
    {
      id: '2',
      title: 'Meter Info',
      background:'#fbf2df',
      image: require('@srcAsset/image/dummy/icon_menu_home/help-desk-colored.png')
    },
    {
      id: '3',
      title: 'Helpdesk',
      background:'#f7e3d4',
      image: require('@srcAsset/image/dummy/icon_menu_home/electric-meter-colored.png'),

    },
    {
      id: '4',
      title: 'News',
      background:'#e0ebf4',
      image: require('@srcAsset/image/dummy/icon_menu_home/newspaper-colored.png'),

    },
    {
      id: '5',
      title: 'Promo',
      background: '#f7e1d3',
      image: require('@srcAsset/image/dummy/icon_menu_home/coupon-colored.png'),

    },
    {
      id: '6',
      title: 'Announce',
       background:'#e0ebf4',
      image: require('@srcAsset/image/dummy/icon_menu_home/megaphone-colored.png'),

    },
    {
      id: '7',
      title: 'Regulation',
      background:'#dae9d0',
      image: require('@srcAsset/image/dummy/icon_menu_home/to-do-list-colored.png'),

    },
    {
      id: '8',
      title: 'Facility',
      image: require('@srcAsset/image/dummy/icon_menu_home/tools-colored.png'),
      background: '#fbf2df'
    },
   
  
  ];

const datas = [
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' },
  // { key: 'K' },
  // { key: 'L' },
];

const numColumns = 4; //ini harus sama kayak numcolumns yg lainnya
const formatData = (data, numColumns) => {

  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
 
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    //jika, 7 !== 4 && 7 !==0
    data.push({ key: `more`, empty: true, more: true });
    numberOfElementsLastRow++;
   
  }
 
  return data;
};

  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles_nih.item, styles_nih.itemInvisible]} />;
    }
    return (
      
      <TouchableOpacity style={{marginHorizontal: 20, alignItems:'center', marginBottom: 10}}>
        <View style={{width: 60, height: 60, backgroundColor: item.background, justifyContent: "center", alignContent:'center', borderRadius:15}}>
          <Image style={{width: 30, height: 30, justifyContent: "center", alignItems: "center",alignSelf:'center', alignContent:'center'}} 
          source={item.image}/>
        </View>
        <Text style={{textAlign:'center', marginTop:5, flexWrap:'wrap', fontSize:13, fontWeight:'bold'}}>{item.title.replace(' ', '\n')}</Text>
      </TouchableOpacity>
    );
  };


  return (
 
    <View style={{backgroundColor:'#fff'}}>
      {/* STATUS BAR JANGAN DIUBAH, KARENA TEMPLATE NYA BISA CHANGE DARKMODE */}
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.dark ? '#000' : '#fff'}
      />
      {/* STATUS BAR JANGAN DIUBAH, KARENA TEMPLATE NYA BISA CHANGE DARKMODE */}

   <ScrollView >
      {/* ------- CONTENT HOME DARI SINI ----------*/}
      <View>
        <View style={{paddingHorizontal: 20, paddingBottom: 10, marginTop:15}}>
            <Text style={{fontWeight:'bold', fontSize:22}}>Pakubuwono</Text>
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

        {/* ------FEATURES LABEL------- */}
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 20}}>
          <View>
            <Text style={{fontWeight:'bold', fontSize:17, }}>Features</Text>
          </View>
          <View style={{backgroundColor:ThemeColors.abumuda_pkbw, borderRadius: 10, padding: 5}}>
            <Text style={{fontWeight:'bold',fontSize:13, }}>View All</Text>
          </View>
        </View>

        {/* -------menu---- */}
        <View style={{alignItems:'center'}}>
            <FlatList
              data={formatData(data, numColumns)}
              renderItem={renderItem}
              style={styles_nih.containerFlatList}
              keyExtractor={item => item.id}
               numColumns={4}
            />
        </View>

        {/* ------- PROMOTIONS ------- */}
        <View style={{marginHorizontal: 20, marginVertical: 20,}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text style={{fontWeight:'bold', fontSize:17, }}>Promotions</Text>
              </View>
              <View style={{backgroundColor:ThemeColors.abumuda_pkbw, borderRadius: 10, padding: 5}}>
                <Text style={{fontWeight:'bold',fontSize:13, }}>View All</Text>
              </View>
            </View>

            <View style={{  flexDirection: 'row',}}>
                <ScrollView horizontal>
                    <PromoList numColumns={3} title={'Promo A'} desc={'ini descs ini descs ini descs ini descs'} img={require('@srcAsset/image/dummy/promo/3.png')}></PromoList>
                    <PromoList numColumns={3} title={'Promo B'} desc={'ini descs'} img={require('@srcAsset/image/dummy/promo/3.png')}></PromoList>
                    <PromoList numColumns={3} title={'Promo C'} desc={'ini descs'} img={require('@srcAsset/image/dummy/promo/3.png')}></PromoList>
                    <PromoList numColumns={3} title={'Promo D'} desc={'ini descs'} img={require('@srcAsset/image/dummy/promo/3.png')}></PromoList>
                </ScrollView>
            </View>
        </View>
   
      </View>

     
      </ScrollView>
      
      </View>
    
  );
};

export default HomeNewScreen;

const styles_nih = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFlatList:{
   flex: 1,
    marginVertical: 20,
    
  },
 item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 4, // approximate a square

  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});
