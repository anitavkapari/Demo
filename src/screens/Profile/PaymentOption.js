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
import {horizontalScale, moderateScale} from '../../utils/helpers/dimen1';
import HeaderView from '../../assets/images/components/myProfile/HeaderView';
const entireScreenWidth = Dimensions.get('window').width;
const WREM = entireScreenWidth / 390;
const widthRem = n => n * WREM;

const entireScreenHeight = Dimensions.get('window').height;
const HREM = entireScreenHeight / 844;
const heightRem = n => n * HREM;

export default function PaymentOption(props) {
  return (
    <SafeView backgroundColor={Colors.white}>
      <View style={{paddingHorizontal: widthRem(15)}}>
      
        <HeaderView txt={'Payment Options'} onPress={() => props.navigation.goBack()}/>
       <View>
       <TouchableOpacity
          style={styles.infoBox}
          onPress={() => props.navigation.navigate('UpdatePaymentDetails')}
          >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Icons.visa} style={styles.profileOutline} />
            <Text style={styles.boxTxt}>Debit Card: XXX - 1258</Text>
          </View>
          <Image source={Icons.right} style={styles.right} />
        </TouchableOpacity>
        <Image source={Icons.checkCircle} style={styles.checkCircle} />

       </View>
        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => props.navigation.navigate('UpdatePaymentDetails')}
          >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Icons.PaymentCard} style={styles.profileOutline} />
            <Text style={styles.boxTxt}>Credit Card: XXXX - 4258</Text>
          </View>
          <Image source={Icons.right} style={styles.right} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}
        onPress={() => props.navigation.navigate('AddPaymentMethod')}
        >
          <Text style={styles.txt}>Add New</Text>
        </TouchableOpacity>
      </View>
      <Footer {...props} activeTab={5} />
    </SafeView>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: horizontalScale(38),
    width: horizontalScale(97),
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    backgroundColor: Colors.primaryColor,
    marginTop: horizontalScale(40),
  },
  txt: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
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
  checkCircle: {
    height: widthRem(20),
    width: widthRem(20),
    resizeMode: 'contain',
    position:'absolute',
    right:0,
    top:10
  },
  boxTxt: {
    marginLeft: widthRem(14),
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
