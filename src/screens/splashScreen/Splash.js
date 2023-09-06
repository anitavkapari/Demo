import React, {Fragment, useEffect} from 'react';
import { View, Image,ImageBackground,SafeAreaView,Text,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Colors } from '../../themes/Themes';
import Icons from '../../themes/Icons';
import MyStatusBar from '../../utils/helpers/MyStatusbar';
import normalize from '../../utils/helpers/normalize';
import Fonts from '../../themes/Fonts';
import connectionrequest from '../../utils/helpers/NetInfo';

import TextInputItem from '../../components/TextInputItem';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenRequest } from '../../redux/reducer/AuthReducer';
let status=''
import Toast from '../../utils/helpers/Toast'
export default function Splash() {
  const navigation = useNavigation();
  const dispatch=useDispatch()
  const AuthReducer = useSelector(state => state.AuthReducer);
  function tokenrequest(){
    let obj={
      "device_token":"test_device"
    }
    connectionrequest()
    .then(() => {
      console.log(obj);
      dispatch(getTokenRequest(obj));
    })
    .catch(err => {
      Toast('Please connect To Internet');
    });

  }

  if (status == '' || AuthReducer.status != status) {
    switch (AuthReducer.status) {
      case 'Auth/getTokenRequest':
        status = AuthReducer.status;
        break;

      case 'Auth/getTokenSuccess':
        status = AuthReducer.status;
        console.log(AuthReducer?.getTokenResponse,'hello');
        navigation.navigate('Login')
        break;
      case 'Auth/getTokenFailure':
        status = AuthReducer.status;
        // console.log(AuthReducer?.response)
        break;
    }
  }


  return (
    
   <>
   <MyStatusBar/>
      
   <ImageBackground style={{flex:1,width:'100%',height:'100%',
 alignItems:'center'}} source={Icons.Background}>
 <SafeAreaView
   style={{
     
     alignItems: 'center',
     flex: 1,
     paddingHorizontal:normalize(10),
     width:'100%'
   }}>
   <Image source={Icons.logo} style={{width:normalize(70),
   height:normalize(130),resizeMode:'stretch',marginTop:normalize(80)}}/>
   <Image source={Icons.icon} style={{width:normalize(100),
    height:normalize(60),resizeMode:'stretch',marginTop:normalize(40)}}/>
   <Text style={{color:Colors.theme,fontSize:normalize(22),
  marginTop:normalize(80),textAlign:'center',fontFamily:Fonts.Inter_Regular,
fontWeight:'bold'}}>It's the Altas App made by the CCU</Text>
<TouchableOpacity onPress={()=>
  tokenrequest()
  // navigation.navigate('Login')

} style={{position:'absolute',bottom:normalize(50),
}} >
<Image source={Icons.rightarrow} style={{width:normalize(50),height:normalize(35),resizeMode:'stretch',
tintColor:Colors.theme}}/>
</TouchableOpacity>

 </SafeAreaView>
 </ImageBackground>
   </>
  
  );
}
