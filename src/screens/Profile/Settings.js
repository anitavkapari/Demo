import React, {useState} from 'react';
import {
  View,
  Switch,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import SafeView from '../../assets/images/components/common/SafeView';
import {horizontalScale} from '../../utils/helpers/dimen1';
import normalize from '../../utils/helpers/normalize';
import Icons from '../../themes/Icons';
import Header from '../../assets/images/components/Header';
import {Colors} from '../../themes/Themes';
import Fonts from '../../themes/Fonts';
import Footer from '../../assets/images/components/Footer';

const entireScreenWidth = Dimensions.get('window').width;
const WREM = entireScreenWidth / 390;
const widthRem = n => n * WREM;

const entireScreenHeight = Dimensions.get('window').height;
const HREM = entireScreenHeight / 844;
const heightRem = n => n * HREM;
console.log('entireScreenHeight??', heightRem(5));

const Settings = props => {
  return (
    <SafeView backgroundColor={Colors.white}>
      <Header headerTxt="Setting" />
      <View style={styles.headerLine}></View>
      <View style={styles.container}>
        <Text
          style={styles.blueHeading}>
          General
        </Text>
        <View
          style={styles.listContainer}>
          <Image
            source={Icons.language}
            style={styles.img}
          />
          <View style={{marginLeft: widthRem(15)}}>
            <Text
              style={styles.heading}>
              Language
            </Text>
            <Text
              style={styles.description}>
              Change the language of the app.
            </Text>
          </View>
        </View>
        <View
          style={styles.listContainer}>
          <Image
            source={Icons.location2}
            style={styles.img}
          />
          <View style={{marginLeft: widthRem(15)}}>
            <Text
              style={styles.heading}>
              Locations
            </Text>
            <Text
              style={styles.description}>
              Add your home and work locations.
            </Text>
          </View>
        </View>
        <View style={styles.line}></View>
      
        <Text
          style={styles.blueHeading}>
          Notifications
        </Text>
        <View
          style={styles.listContainer}>
          <Image
            source={Icons.pushNoti}
            style={styles.img2}
          />
          <View style={{marginLeft: widthRem(15)}}>
            <Text
              style={styles.heading}>
              Push notifications
            </Text>
            <Text
              style={styles.description}>
              For daily update and others.
            </Text>
          </View>
        </View>
        <View
          style={styles.listContainer}>
          <Image
            source={Icons.pushNoti}
            style={styles.img2}
          />
          <View style={{marginLeft: widthRem(15)}}>
            <Text
              style={styles.heading}>
              Promotional notifications
            </Text>
            <Text
              style={styles.description}>
              New campain and offers.
            </Text>
          </View>
        </View>
        
        <View style={styles.line}></View>
      
        <Text
          style={styles.blueHeading}>
          More
        </Text>
        <View
          style={styles.listContainer}>
          <Image
            source={Icons.call}
            style={styles.img2}
          />
          <View style={{marginLeft: widthRem(15)}}>
            <Text
              style={styles.heading}>
              Contact us
            </Text>
            {/* <Text
              style={styles.description}>
              Change the language of the app.
            </Text> */}
          </View>
        </View>
        <View
          style={styles.listContainer}>
          <Image
            source={Icons.logout1}
            style={styles.img}
          />
          <View style={{marginLeft: widthRem(15)}}>
            <Text
              style={styles.heading}>
              Logout
            </Text>
            {/* <Text
              style={styles.description}>
              Change the language of the app.
            </Text> */}
          </View>
        </View>
        
        
      </View>
      <Footer {...props} activeTab='5'/>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthRem(20),
  },
  headerLine: {
    height: heightRem(1),
    backgroundColor: Colors.lightGrey2,
    marginTop: heightRem(15),
  },
  line: {
    height: heightRem(1),
    backgroundColor: Colors.lightGrey2,
    marginTop: heightRem(25),
  },
  blueHeading: {
    fontFamily: Fonts.Roboto_Medium,
    color: '#1A87DD',
    marginTop: heightRem(25),
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: heightRem(25),
  },
  heading: {
    fontFamily: Fonts.Roboto_Medium,
    fontSize: 16,
    color: '#1A1A1A',
  },
  description: {
    color: '#6C6C6C',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: 16,
    marginTop: heightRem(8),
  },
  img: {
    height: widthRem(30),
    width: widthRem(30),
    resizeMode: 'contain',
  },
  img2: {
    height: widthRem(18),
    width: widthRem(18),
    resizeMode: 'contain',
    marginRight: widthRem(5)
  }
});

export default Settings;
