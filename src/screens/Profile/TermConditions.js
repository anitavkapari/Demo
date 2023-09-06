import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderView from '../../assets/images/components/myProfile/HeaderView';
import SafeView from '../../assets/images/components/common/SafeView';
import {Colors} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import Fonts from '../../themes/Fonts';

export default function TermConditions(props) {
  return (
    <SafeView backgroundColor={Colors.white}>
      <View style={{flex: 1, width: '90%', alignSelf: 'center'}}>
        <HeaderView
          txt={'Term & Conditions'}
          onPress={() => props.navigation.goBack()}
        />

        <ScrollView
          contentContainerStyle={{
            paddingBottom: '10%',
           
            //  backgroundColor:'green'
          }}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <Text style={styles.boxTxt}>
            Lorem ipsum dolor sit amet consectetur. Lectus dignissim inte rdum
            purus adipiscing. Pulvinar nulla non nulla felis. Condime ntum nulla
            diam at ametLorem ipsum dolor sit amet consectetur. Lectus dignissim
            inte rdum purus adipiscing. Pulvinar nulla non nulla felis. Condime
            ntum nulla diam at amet Lorem ipsum dolor sit amet consectetur.
            Lectus dignissim inte rdum purus adipiscing. Pulvinar nulla non
            nulla felis. Condime ntum nulla diam at amet Lorem ipsum dolor sit
            amet consectetur. Lectus dignissim inte rdum purus adipiscing.{'\n'}
          </Text>
          <Text style={styles.boxTxt}>
            
            Pulvinar nulla non nulla felis. Condime ntum nulla diam at amet
            Lorem ipsum dolor sit amet consectetur. Lectus dignissim inte rdum
            purus adipiscing. Pulvinar nulla non nulla felis. Condime ntum nulla
            diam at amet Lorem ipsum dolor sit amet consectetur. Lectus
            dignissim inte rdum purus adipiscing. Pulvinar nulla non nulla
            felis. Condime ntum nulla diam at amet Lorem ipsum dolor sit amet
            consectetur. Lectus dignissim inte rdum purus adipiscing. Pulvinar
            nulla non nulla felis. Condime ntum nulla diam at amet Lorem ipsum
            dolor sit amet consectetur. Lectus dignissim inte rdum purus
            adipiscing. Pulvinar nulla non nulla felis. Condime ntum nulla diam
            at amet Lorem ipsum dolor sit amet consectetur. {'\n'}
          </Text>
          <Text style={styles.boxTxt}>
             Lectus dignissim
            inte rdum purus adipiscing. Pulvinar nulla non nulla felis. Condime
            ntum nulla diam at amet Lorem ipsum dolor sit amet consectetur.
            Lectus dignissim inte rdum purus adipiscing. Pulvinar nulla non
            nulla felis. Condime ntum nulla diam at amet Lorem ipsum dolor sit
            amet consectetur. Lectus dignissim inte rdum purus adipiscing.
            Pulvinar nulla non{'\n'}
          </Text>
        </ScrollView>
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  boxTxt: {
    // marginLeft: normalize(15),
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(14),
    color: '#1A1A1A',
  },
});
