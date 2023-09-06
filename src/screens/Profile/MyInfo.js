import React, {useState} from 'react';
import {
  View,
  Switch,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import SafeView from '../../assets/images/components/common/SafeView';
import {Colors} from '../../themes/Themes';
import Icons from '../../themes/Icons';
import normalize from '../../utils/helpers/normalize';
import Fonts from '../../themes/Fonts';
import Footer from '../../assets/images/components/Footer';

const entireScreenWidth = Dimensions.get('window').width;
const WREM = entireScreenWidth / 390;
const widthRem = n => n * WREM;

const entireScreenHeight = Dimensions.get('window').height;
const HREM = entireScreenHeight / 844;
const heightRem = n => n * HREM;
console.log('entireScreenHeight??', heightRem(5));

const MyInfo = props => {
  return (
    <SafeView backgroundColor={Colors.white}>
      <View style={{paddingHorizontal: widthRem(15)}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
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
            marginTop: heightRem(20),
            marginBottom: heightRem(20),
          }}>
          My Info
        </Text>
        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => props.navigation.navigate('EditProfile')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Icons.profile4} style={styles.profileOutline} />
            <Text style={styles.boxTxt}>Edit Profile</Text>
          </View>
          <Image source={Icons.right} style={styles.right} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => props.navigation.navigate('ChangePassword')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Icons.changePwd} style={styles.profileOutline} />
            <Text style={styles.boxTxt}>Change Password</Text>
          </View>
          <Image source={Icons.right} style={styles.right} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => props.navigation.navigate('PaymentOption')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Icons.payMethod} style={styles.profileOutline} />
            {/* <Text style={styles.boxTxt}>Privacy Policy</Text> */}
            <Text style={styles.boxTxt}>Payment Methods</Text>
          </View>
          <Image source={Icons.right} style={styles.right} />
        </TouchableOpacity>
        <View
          style={{
            height: heightRem(1),
            backgroundColor: Colors.lightGrey2,
            marginTop: heightRem(30),
            marginBottom: heightRem(15),
          }}
        />
        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => props.navigation.navigate('TermConditions')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Icons.tAndC} style={styles.profileOutline} />
            <Text style={styles.boxTxt}>Terms & Conditions</Text>
          </View>
          <Image source={Icons.right} style={styles.right} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => props.navigation.navigate('PrivacyPolicy')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Icons.policy} style={styles.profileOutline} />
            {/* <Text style={styles.boxTxt}>Invite Friends</Text> */}
            <Text style={styles.boxTxt}>Privacy Policy</Text>
          </View>
          <Image source={Icons.right} style={styles.right} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoBox}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Icons.rate} style={styles.profileOutline} />
            <Text style={styles.boxTxt}>Rate Us</Text>
          </View>
          <Image source={Icons.right} style={styles.right} />
        </TouchableOpacity>
      </View>
      <Footer {...props} activeTab={5} />
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
    paddingVertical: heightRem(20),
    borderWidth: normalize(1),
    justifyContent: 'center',
    borderRadius: normalize(10),
    paddingHorizontal: widthRem(15),
    borderColor: Colors.lightGrey2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightRem(15),
  },
  profileOutline: {
    height: widthRem(22),
    width: widthRem(22),
    resizeMode: 'contain',
  },
  boxTxt: {
    marginLeft: widthRem(15),
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(14),
    color: '#1A1A1A',
  },
  right: {
    height: widthRem(12),
    width: widthRem(12),
    resizeMode: 'contain',
    tintColor: Colors.black,
  },
});

export default MyInfo;
