import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splashScreen/Splash';
import Login from '../screens/auth/Login';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Dashboard from '../screens/Home/Dashboard';
import EditUnassignedCase from '../screens/Home/EditUnassignedCase';


const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
         
        <Stack.Screen
        name="DashBoard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name="EditUnassignedCase"
      component={EditUnassignedCase}
      options={{headerShown: false}}
    />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default StackNav;

// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { Text, View, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Home from '../Home/Home';
// import Icons from './src/themes/Icons';
// import { Colors } from './src/themes/Themes';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// //import { MaterialCommunityIcons } from '@expo/vector-icons';

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Article() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Article Screen</Text>
//     </View>
//   );
// }

// function Work() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Work!</Text>
//     </View>
//   );
// }

// function Calander() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Calander!</Text>
//     </View>
//   );
// }

// function Options() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Options!</Text>
//     </View>
//   );
// }

// const Tab = createMaterialBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator useLegacyImplementation>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

// function MyTabs() {

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//     <Tab.Navigator
//       initialRouteName="Home"
//       labeled= {false}
//       activeColor= {Colors.primaryPink}
//       //labelStyle={{ fontSize: 12 }}
//       //style={{ backgroundColor: 'tomato' }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}

//         options={{
//           tabBarIcon: ({ color }) => (
//             <Image source={Icons.home} resizeMode='contain' style={{ height: normalize(20), width: normalize(30) }} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Work"
//         component={Work}
//        options={{
//           tabBarIcon: ({ color }) => (
//             <Image source={Icons.work} resizeMode='contain' style={{ height: normalize(20), width: normalize(30) }} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Options"
//         component={Options}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Image source={Icons.calander} resizeMode='contain' style={{ height: normalize(20), width: normalize(30) }} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Calander"
//         component={Calander}
//        options={{
//           tabBarIcon: ({ color }) => (
//             <Image source={Icons.options} resizeMode='contain' style={{ height: normalize(20), width: normalize(30) }} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//     </GestureHandlerRootView>
//   );

// }

// export default function StackNav() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }
