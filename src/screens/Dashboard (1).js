import React, { useState } from 'react';
import { SafeAreaView, FlatList, View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import Modal from "react-native-modal";
import Icons from '../../themes/Icons';


export default function Dashboard(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const serviceList = [
        {
            id: '1',
            name: 'DashBoard',
            img: require('../../assets/images/facebook.png'),
        },
        {
            id: '2',
            name: 'Unassign Cases',
            img: require('../../assets/images/facebook.png'),
        },
        {
            id: '3',
            name: 'Create Case',
            img: require('../../assets/images/facebook.png'),
        },
        {
            id: '4',
            name: 'Ongoing Case',
            img: require('../../assets/images/facebook.png'),

        },
        {
            id: '5',
            name: 'Case History',
            img: require('../../assets/images/facebook.png'),

        },
        {
            id: '6',
            name: 'Ongoing Case',
            img: require('../../assets/images/facebook.png'),

        },
        {
            id: '7',
            name: 'Create Event',
            img: require('../../assets/images/facebook.png'),

        },
        {
            id: '8',
            name: 'Event History',
            img: require('../../assets/images/facebook.png'),

        },
        {
            id: '9',
            name: 'Profile',
            img: require('../../assets/images/facebook.png'),

        },
        {
            id: '10',
            name: 'Case Report',
            img: require('../../assets/images/facebook.png'),

        },
        {
            id: '11',
            name: 'Logout',
            img: require('../../assets/images/facebook.png'),

        },
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1 }} source={Icons.bg}>
                <View style={{ width: '100%', height: 60, backgroundColor: '#1D9EC6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            height: 50, width: 50, marginTop: 10, borderTopEndRadius: 10,
                            backgroundColor: isModalVisible ? '#002F39' : '#1D9EC6',
                            justifyContent: 'center'
                        }}
                        onPress={() => {
                            // Alert.alert('hii')
                            setIsModalVisible(true)
                        }} >
                        <Image source={Icons.padlock} resizeMode='contain' style={{ height: 40, width: 40, tintColor: '#fff' }} />

                    </TouchableOpacity>
                    <Text style={{ width: '45%' }}>
                        Hii
                    </Text>
                </View>
            </ImageBackground>

            <Modal
                isVisible={isModalVisible}
                animationIn="fadeInLeft"
                animationOut="bounceOutLeft"
                onBackdropPress={() => setIsModalVisible(false)}
                onBackButtonPress={() => setIsModalVisible(false)}
                animationInTiming={800}
                animationOutTiming={1000}
                style={{
                    width: '100%',
                    alignSelf: 'center',
                    margin: 0,

                    position: 'absolute',
                    // top: 60,
                    justifyContent: 'center',
                    // borderTopLeftRadius: normalize(20),
                    // borderTopRightRadius: normalize(20),
                }}
            >
                <TouchableOpacity

                    onPress={() => {
                        // Alert.alert('hii')
                        setIsModalVisible(false)
                    }}
                    style={{ width: '100%', height: 60, backgroundColor: '#1D9EC6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View
                        style={{
                            height: 50, width: 50, marginTop: 10, borderTopEndRadius: 10,
                            backgroundColor: isModalVisible ? '#002F39' : '#1D9EC6',
                            justifyContent: 'center'
                        }}>
                        <Image source={Icons.padlock} resizeMode='contain' style={{ height: 40, width: 40, tintColor: '#fff' }} />

                    </View>
                    <Text style={{ width: '45%' }}>
                        Hii
                    </Text>
                </TouchableOpacity>
                <View style={{
                    // padding: normalize(8),
                    backgroundColor: '#002F39',
                    // marginTop: 40,
                    width: '50%',
                    // position:'absolute',
                    // left:1,
                    // top:50
                }}>
                    <FlatList
                        data={serviceList}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                            onPress={()=>{
                        setIsModalVisible(false)
                            }}
                            style={{
                                // backgroundColor: 'red'
                            }}>
                                <Text style={{ color: '#fff', fontSize: 20, paddingHorizontal: 10, paddingVertical: 10, }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={{
                            paddingBottom: 10000
                        }}
                        keyExtractor={item => item.id}
                        scrollEnabled={false}
                    />
                </View>

            </Modal>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})
