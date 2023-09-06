import React, {useState} from 'react';
import {
  View,
  Switch,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import SafeView from '../../assets/images/components/common/SafeView';
import {Colors} from '../../themes/Themes';
import Icons from '../../themes/Icons';
import Fonts from '../../themes/Fonts';
import FullButton from '../../assets/images/components/FullButton';
import normalize from '../../utils/helpers/normalize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { horizontalScale } from '../../utils/helpers/dimen1';

const entireScreenWidth = Dimensions.get('window').width;
const WREM = entireScreenWidth / 390;
const widthRem = n => n * WREM;

const entireScreenHeight = Dimensions.get('window').height;
const HREM = entireScreenHeight / 844;
const heightRem = n => n * HREM;
console.log('entireScreenHeight??', heightRem(5));

const ChangePassword = (props) => {
  return (
    <SafeView backgroundColor={Colors.white}>
      <View style={{paddingHorizontal: widthRem(15)}}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
        <Image
          source={Icons.back}
          style={{
            width: widthRem(30),
            height: heightRem(30),
            resizeMode: 'contain',
            marginTop: heightRem(30),
          }}
        />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: Fonts.Roboto_Regular,
            fontWeight: '500',
            fontSize: normalize(20),
            color: '#1A1A1A',
            marginTop: heightRem(40),
            marginBottom: heightRem(8),
            alignSelf: 'center',
          }}>
          Change Password
        </Text>
        <Text
          style={{
            color: '#8D99AE',
            alignSelf: 'center',
            fontFamily: Fonts.Roboto_Regular,
            fontSize: 14,
            marginBottom: heightRem(30)
          }}>
          Please Enter your correct details
        </Text>
        <View style={styles.infoBox}>
          <Image source={Icons.secure} style={styles.secure} />
          <TextInput
          placeholder="Current Password"
          placeholderTextColor='#8D99AE'
          underlineColorAndroid="transparent"
          color={Colors.black1}
          fontFamily="Roboto-Regular"
          secureTextEntry={true} 
          //placeholder='Current Password'
          //placeholderTextColor='#8D99AE'
            //style={{height: heightRem(35), width: widthRem(240), fontSize:14, paddingBottom: 0}}
            style={{
              flex: 1,
              marginLeft: horizontalScale(15),
              fontSize: normalize(12),
            }}
          />
        </View>
        <View style={styles.infoBox}>
          <Image source={Icons.secure} style={styles.secure} />
          <TextInput
          placeholder="New Password"
          placeholderTextColor='#8D99AE'
          underlineColorAndroid="transparent"
          color={Colors.black1}
          fontFamily="Roboto-Regular"
          secureTextEntry={true} 
          //placeholder='New Password'
          //placeholderTextColor='#8D99AE'
            //style={{height: heightRem(35), width: widthRem(240), fontSize:14, paddingBottom: 0}}
            style={{
              flex: 1,
              marginLeft: horizontalScale(15),
              fontSize: normalize(12),
            }}
          />
        </View>
        <View style={styles.infoBox}>
          <Image source={Icons.secure} style={styles.secure} />
          <TextInput
          placeholder="Confirm New Password"
          placeholderTextColor='#8D99AE'
          underlineColorAndroid="transparent"
          color={Colors.black1}
          fontFamily="Roboto-Regular"
          secureTextEntry={true} 
          //placeholder='Confirm New Password'
          //placeholderTextColor='#8D99AE'
            //style={{height: heightRem(35), width: widthRem(240), fontSize:14, paddingBottom: 0}}
            style={{
              flex: 1,
              marginLeft: horizontalScale(15),
              fontSize: normalize(12),
            }}
          />
        </View>
        <View style={{marginTop: heightRem(60)}}>
        <FullButton buttonTxt='Change Password'/>
        </View>
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    // borderWidth: normalize(1),
    // justifyContent: 'center',
    // borderRadius: normalize(10),
    // paddingHorizontal: widthRem(25),
    // borderColor: Colors.lightGrey2,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // marginTop: heightRem(15),
    // height: normalize(35),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: Colors.graylight2,
    //height: horizontalScale(36),
    //width: horizontalScale(340),
    borderRadius: horizontalScale(5),
    marginTop: horizontalScale(15),
    height:normalize(35)
  },
  secure: {
    // height: widthRem(20),
    // width: widthRem(20),
    // resizeMode: 'contain',
    // marginRight: widthRem(25),
    padding: horizontalScale(5),
    margin: horizontalScale(10),
    width: horizontalScale(20),
    height: horizontalScale(18),
    resizeMode: 'stretch',
    alignItems: 'center',

  },
});

export default ChangePassword;
