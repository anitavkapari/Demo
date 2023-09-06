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
import MaskInput, {Masks} from 'react-native-mask-input';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/helpers/dimen1';
import Icons from '../../themes/Icons';
import normalize from '../../utils/helpers/normalize';
import Modal from 'react-native-modal';
import Fonts from '../../themes/Fonts';

export default function AddPaymentMethod(props) {
  const expirel = [/\d/, /\d/, '/', /\d/, /\d/];
  const cvvl = [/\d/, /\d/, /\d/];
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [cardborder, setcardborder] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  return (
    <SafeView backgroundColor={Colors.white}>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <HeaderView
          txt={'Add Payment Info'}
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'padding'}>
         <ScrollView  height= {'100%'}
          contentContainerStyle={{
            paddingBottom: '100%',
           
            //  backgroundColor:'green'
          }}showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              //  backgroundColor:'red',
              //  height:'60%',
            }}>
            <Text
              style={{
                color: Colors.gray,
                fontSize: normalize(12),
                fontFamily: 'Roboto-Medium',
              }}>
              Cardholder Name
            </Text>
            <MaskInput
              style={[
                {
                  letterSpacing: -0.03,
                  fontSize: normalize(12),
                  color: Colors.black,
                  borderWidth: 0.5,
                  borderColor: Colors.gray,
                  paddingHorizontal: normalize(10),
                  height: normalize(35),
                  borderRadius: normalize(10),
                  // backgroundColor: '#0E1648',
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: normalize(10),
                  marginBottom: normalize(10),
                },
              ]}
              placeholder="Enter name as written on payment card"
              onFocus={() => setcardborder('cardhname')}
              onBlur={() => setcardborder('')}
              placeholderTextColor={Colors.gray}
              //   keyboardType="numeric"
              value={cardHolderName}
              //   mask={Masks.CREDIT_CARD}
              onChangeText={mask => setCardHolderName(mask)}
            />
            <Text
              style={{
                color: Colors.gray,
                fontSize: normalize(12),
                fontFamily: 'Roboto-Medium',
              }}>
              Credit / Debit Card Number
            </Text>
            <MaskInput
              style={[
                {
                  letterSpacing: -0.03,
                  fontSize: normalize(12),
                  color: Colors.black,
                  borderWidth: 0.5,
                  borderColor: Colors.gray,
                  paddingHorizontal: normalize(10),
                  height: normalize(35),
                  borderRadius: normalize(10),
                  // backgroundColor: '#0E1648',
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: normalize(10),
                  marginBottom: normalize(10),
                },
              ]}
              placeholder="xxxx-xxxx-xxxx-xxxx"
              onFocus={() => setcardborder('card')}
              onBlur={() => setcardborder('')}
              placeholderTextColor={Colors.gray}
              keyboardType="numeric"
              value={cardNumber}
              mask={Masks.CREDIT_CARD}
              onChangeText={mask => setCardNumber(mask)}
            />
            <View
              style={{
                width: '100%',
                // alignSelf: 'center',
                flexDirection: 'row',
                // justifyContent: 'space-between',
                // backgroundColor:'red'
              }}>
              <Text
                style={{
                  color: Colors.gray,
                  fontSize: normalize(12),
                  fontFamily: 'Roboto-Medium',
                  //   backgroundColor:'green',
                  width: '52%',
                }}>
                Expiration
              </Text>
              <Text
                style={{
                  color: Colors.gray,
                  fontSize: normalize(12),
                  fontFamily: 'Roboto-Medium',
                  //   backgroundColor:'green',
                  width: '50%',
                }}>
                CVV*
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: normalize(10),
                marginBottom: normalize(20),
              }}>
              <MaskInput
                style={[
                  {
                    letterSpacing: -0.03,
                    fontSize: normalize(12),
                    color: Colors.black,
                    borderWidth: 0.5,
                    borderColor: Colors.gray,
                    paddingHorizontal: normalize(10),
                    height: normalize(35),
                    borderRadius: normalize(10),
                    //   backgroundColor: '#0E1648',
                    width: '48%',
                    alignSelf: 'center',
                    // marginTop: normalize(10),
                  },
                ]}
                placeholder="MM-YYYY"
                onFocus={() => setcardborder('cardexp')}
                onBlur={() => setcardborder('')}
                placeholderTextColor={Colors.gray}
                keyboardType="numeric"
                value={cardExp}
                mask={expirel}
                onChangeText={mask => setCardExp(mask)}
              />

              <MaskInput
                style={[
                  {
                    letterSpacing: -0.03,
                    fontSize: normalize(12),
                    color: Colors.black,
                    borderWidth: 0.5,
                    borderColor: Colors.gray,
                    paddingHorizontal: normalize(10),
                    height: normalize(35),
                    borderRadius: normalize(10),
                    //   backgroundColor: '#0E1648',
                    width: '48%',
                    alignSelf: 'center',
                    // marginTop: normalize(10),
                  },
                ]}
                placeholder="XXX"
                onFocus={() => setcardborder('cardcvc')}
                onBlur={() => setcardborder('')}
                placeholderTextColor={Colors.gray}
                keyboardType="numeric"
                value={cardCVC}
                mask={cvvl}
                onChangeText={mask => setCardCVC(mask)}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                setIsCheck(!isCheck);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '67%',
                justifyContent: 'space-between',
              }}>
              <Image
                source={isCheck ? Icons.check : Icons.unCheck}
                style={{
                  height: normalize(17),
                  width: normalize(17),
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  color: Colors.black,
                  fontSize: normalize(12),
                  fontFamily: 'Roboto-Medium',
                  marginLeft: normalize(Platform.OS === 'ios' ? 5 : 5),
                }}>
                Set as Primary Payment Method
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              alignSelf: 'center',
              // marginBottom:normalize(10),
              // position:'absolute',
              top: normalize(170),
            }}>
            <TouchableOpacity
              style={[
                styles.btn,
                {borderColor: Colors.primaryColor, borderWidth: 1},
              ]}
              onPress={() => props.navigation.navigate('PaymentOption')}>
              <Text style={[styles.txt, {color: Colors.primaryColor}]}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: Colors.primaryColor}]}
              onPress={() => setModalVisible(true)}>
              <Text style={[styles.txt, {color: Colors.white}]}>Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.sndTxtContainer}>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modal}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                props.navigation.goBack()
                //   navigation.navigate('Home');
              }}>
              <Image source={Icons.cross} style={styles.icon} />
            </TouchableOpacity>
            <Image source={Icons.submit} style={styles.submitIcon} />
            <Text style={styles.verification} >
              {' '}
              Payment Card Added Successfully !
            </Text>

            {/* <Button title="Hide modal" onPress={toggleModal} /> */}
          </View>
        </Modal>
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  verification: {
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(15),
    // fontWeight: '600',
    color: Colors.textColor,
    // alignSelf: 'center',
    marginVertical: normalize(20),
    // backgroundColor:'red',
    // width:'100%',
    textAlign:'center'
  },
  submitIcon: {
    height: normalize(43),
    width: normalize(43),
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: normalize(-7),
  },
  sndTxtContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  sndTxt: {
    fontSize: 12,
    color: Colors.black6,
    fontFamily: 'Roboto-Regular',
    marginBottom: normalize(15),
  },
  modal: {
    backgroundColor: Colors.white,
    padding: normalize(15),
    borderRadius: normalize(5),
  },
  icon: {
    tintColor: Colors.lightGrey,
    height: normalize(15),
    width: normalize(15),
    alignSelf: 'flex-end',
    resizeMode: 'contain',
  },
  btn: {
    height: horizontalScale(38),
    width: horizontalScale(160),
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    // backgroundColor: Colors.primaryColor,
    marginTop: horizontalScale(40),
  },
  txt: {
    // color: Colors.white,
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
});
