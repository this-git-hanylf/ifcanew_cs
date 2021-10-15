import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  Platform,
  Dimensions
} from 'react-native';
// import ProgressCircle from 'react-native-progress-circle'
// import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../src/themes/Colors';


export default function PromoList(props) {
const vw = Dimensions.get('window').width;
    const {  img,
      title,
      bg,
      onPress,
      desc,
     
      numColumns,
      colorTextTitle,
      colorTextDesc,} = props;
    return (
     <TouchableOpacity
        onPress={onPress}
        style={{
          // flexDirection: "row",
          backgroundColor: colors.abumuda_pkbw,
        //   backgroundColor: bg,
          // padding: 10,
          // marginHorizontal: 5,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          // marginTop: 5,
          margin: 5,
          width: vw / numColumns - 10,
          height: vw / numColumns,
          // height: vh / numColumns,

          // flexWrap: "wrap",
          flex: 1,

          // -- create shadow
        //   shadowColor: '#000',
        //   shadowOffset: {
        //     width: 0,
        //     height: 1,
        //   },
        //   shadowOpacity: 0.22,
        //   shadowRadius: 2.22,
        //   elevation: 3,
          // -- end create shadow
        }}>
        <Image
          source={img}
          style={{
            resizeMode: 'cover',
            flex: 1,
            width: vw / numColumns - 10,
            height: 200,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        <View style={{width: vw / numColumns - 10,}}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{
              color: colorTextTitle,
              // //fontFamily: "Bold",
              fontWeight: 'bold',
              fontSize: 16,
              paddingHorizontal: 10,
            //   marginLeft:5,
              textAlign: 'left',
              // width: 190,
              paddingTop: 5,

              // flex:
            }}>
            {title}
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{
              color: colorTextDesc,
              //fontFamily: 'Medium',
              fontSize: 12,
             paddingHorizontal: 10,
              // width: 190,
              // paddingBottom: 20
              marginBottom: 10,
            }}>
            {desc}
          </Text>
        </View>

        {/* <ProgressCircle
                    percent={30}
                    radius={17}
                    borderWidth={1.5}
                    color="f580084"
                    shadowColor="#FFF"
                    bgColor="#FFF"
                >
                    <Image
                        source={require('@Asset/images/pl.png')}
                    />
                </ProgressCircle> */}
      </TouchableOpacity>
    );
}
