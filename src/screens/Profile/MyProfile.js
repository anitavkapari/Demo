import React, {useState} from 'react';
import {
  View,
  Switch,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SafeView from '../../assets/images/components/common/SafeView';
import Fonts from '../../themes/Fonts';
import normalize from '../../utils/helpers/normalize';
import Icons from '../../themes/Icons';
import {horizontalScale, verticalScale} from '../../utils/helpers/dimen1';
import {Colors} from '../../themes/Themes';
import Footer from '../../assets/images/components/Footer';

const MyProfile = props => {
  return (
    <SafeView backgroundColor={'#D1D1D1'}>
      <ScrollView backgroundColor={Colors.white}>
        <View style={{backgroundColor: '#D1D1D1'}}>
          <View
            style={{
              padding: normalize(25),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{height: normalize(22), width: normalize(22)}} />
              <Text
                style={{
                  fontFamily: Fonts.Roboto_Regular,
                  fontWeight: '500',
                  fontSize: normalize(20),
                  color: '#1A1A1A',
                }}>
                My Profile
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('EditProfile')}>
                <Image source={Icons.pinkEdit} style={styles.editLogo} />
              </TouchableOpacity>
            </View>
            <Image source={Icons.profile3} style={styles.profile} />
            <Text style={styles.profileName}>Hisham Zayadnh</Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.white,
              height: '100%',
              paddingTop: verticalScale(30),
            }}>
            <TouchableOpacity
              style={styles.infoBox}
              onPress={() => props.navigation.navigate('MyInfo')}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={Icons.profileOutline}
                  style={styles.profileOutline}
                />
                <Text style={styles.boxTxt}>My Info</Text>
              </View>
              <Image source={Icons.right} style={styles.right} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.infoBox}
              onPress={() => props.navigation.navigate('AllRequest')}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Icons.report1} style={styles.profileOutline} />
                <Text style={styles.boxTxt}>Report Issue</Text>
              </View>
              <Image source={Icons.right} style={styles.right} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.infoBox}
              onPress={() => props.navigation.navigate('Settings')}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Icons.settings} style={styles.profileOutline} />
                <Text style={styles.boxTxt}>Settings</Text>
              </View>
              <Image source={Icons.right} style={styles.right} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.infoBox}
              onPress={() => props.navigation.navigate('HomeTransactions')}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={Icons.transaction1}
                  style={styles.profileOutline}
                />
                <Text style={styles.boxTxt}>Transactions</Text>
              </View>
              <Image source={Icons.right} style={styles.right} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    paddingVertical: verticalScale(15),
    borderWidth: normalize(1),
    justifyContent: 'center',
    borderRadius: normalize(10),
    paddingHorizontal: horizontalScale(15),
    marginHorizontal: horizontalScale(10),
    borderColor: Colors.lightGrey2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(15),
  },
  editLogo: {height: normalize(22), width: normalize(22)},
  profile: {
    height: normalize(100),
    width: normalize(100),
    alignSelf: 'center',
    marginTop: verticalScale(30),
  },
  profileName: {
    alignSelf: 'center',
    marginTop: verticalScale(15),
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(16),
    color: '#1A1A1A',
  },
  profileOutline: {
    height: normalize(22),
    width: normalize(22),
    resizeMode: 'contain',
  },
  boxTxt: {
    marginLeft: normalize(10),
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(14),
    color: '#1A1A1A',
  },
  right: {
    height: normalize(12),
    width: normalize(12),
    resizeMode: 'contain',
    tintColor: Colors.black,
  },
});

export default MyProfile;
