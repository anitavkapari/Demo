import {DefaultTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeView from '../../components/common/SafeView';
import Footer from '../../components/Footer';
import HeaderDrawer from '../../components/HeaderDrawer';
import SectionHeading from '../../components/SectionHeading';
import ServiceList from '../../components/ServiceList';
import Slider from '../../components/Slider';
import Fonts from '../../themes/Fonts';
import Icons from '../../themes/Icons';
import {Colors} from '../../themes/Themes';
import {horizontalScale, verticalScale} from '../../utils/helpers/dimen1';
import normalize from '../../utils/helpers/normalize';
import Modal from 'react-native-modal';
import {SCREEN_WIDTH} from '../../utils/helpers/dimen';

const carpenterList = [
  {
    id: '1',
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
    rating: '4.8',
    location: 'Abuja, Nigeria',
    img: require('../../assets/images/carpenter2.png'),
    img2: require('../../assets/images/carpenterTxt.png'),
  },
  {
    id: '2',
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
    rating: '4.8',
    location: 'Abuja, Nigeria',
    img: require('../../assets/images/carpenter2.png'),
    img2: require('../../assets/images/carpenterTxt.png'),
  },
  {
    id: '3',
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
    rating: '4.8',
    location: 'Abuja, Nigeria',
    img: require('../../assets/images/carpenter2.png'),
    img2: require('../../assets/images/carpenterTxt.png'),
  },
  {
    id: '4',
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
    rating: '4.8',
    location: 'Abuja, Nigeria',
    img: require('../../assets/images/carpenter2.png'),
    img2: require('../../assets/images/carpenterTxt.png'),
  },
];

// const featuredList = [
//   {
//     id: '1',
//     name: 'John Doe',
//     description:
//       'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
//     rating: '4.8',
//     location: 'Abuja, Nigeria',
//     img: require('../../assets/images/carpenter2.png'),
//     img2: require('../../assets/images/carpenterTxt.png'),
//   },
//   {
//     id: '2',
//     name: 'John Doe',
//     description:
//       'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
//     rating: '4.8',
//     location: 'Abuja, Nigeria',
//     img: require('../../assets/images/carpenter2.png'),
//     img2: require('../../assets/images/carpenterTxt.png'),
//   },
// ];

function Carpenters(props) {
  const [isModalVisible, setModalVisible] = useState(false);

  const Item = ({name, img, rating, description, location, img2}) => (
    <TouchableOpacity
      style={styles.item1}
      onPress={() => props.navigation.navigate('Detail')}>
      <Image source={img} style={styles.serviceImg1} resizeMode="contain" />
      <View style={{marginLeft: normalize(8)}}>
        <View style={styles.detail}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.title}>{name}</Text>
            <Image
              source={require('../../assets/icons/verified.png')}
              style={styles.verified}
              resizeMode="contain"
            />
          </View>
          <Image source={img2} style={styles.img2} resizeMode="contain" />
        </View>
        <View style={{flexDirection: 'row', height: normalize(18)}}>
          <Image
            source={require('../../assets/icons/star.png')}
            style={styles.star}
            resizeMode="contain"
          />
          <Text style={styles.rating}>({rating})</Text>
        </View>
        <View style={{width: normalize(190)}}>
          <Text style={{color: Colors.lightGrey}}>{description}</Text>
        </View>
        <View style={styles.locationContainer}>
          <Image
            source={require('../../assets/icons/location.png')}
            style={styles.location}
            resizeMode="contain"
          />
          <Text style={{color: Colors.lightGrey}}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const offerImg = [
    {img: require('../../assets/images/carpenter.png')},
    {img: require('../../assets/images/carpenter.png')},
    {img: require('../../assets/images/carpenter.png')},
    {img: require('../../assets/images/carpenter.png')},
    {},
  ];

  const featuredCarpenter = [
    {
      element: [
        {
          id: '1',
          name: 'Ify Alade',
          description:
            'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
          rating: '4.8',
          location: 'Abuja, Nigeria',
          img: require('../../assets/images/carpenter2.png'),
          img2: require('../../assets/images/carpenterTxt.png'),
        },
        {
          id: '2',
          name: 'Joe Abam',
          description:
            'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
          rating: '4.8',
          location: 'Abuja, Nigeria',
          img: require('../../assets/images/carpenter2.png'),
          img2: require('../../assets/images/carpenterTxt.png'),
        },
      ],
    },
    {
      element: [
        {
          id: '3',
          name: 'Ify Alade',
          description:
            'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
          rating: '4.8',
          location: 'Abuja, Nigeria',
          img: require('../../assets/images/carpenter2.png'),
          img2: require('../../assets/images/carpenterTxt.png'),
        },
        {
          id: '4',
          name: 'Joe Abam',
          description:
            'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
          rating: '4.8',
          location: 'Abuja, Nigeria',
          img: require('../../assets/images/carpenter2.png'),
          img2: require('../../assets/images/carpenterTxt.png'),
        },
      ],
    },
    {
      element: [
        {
          id: '5',
          name: 'Ify Alade',
          description:
            'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
          rating: '4.8',
          location: 'Abuja, Nigeria',
          img: require('../../assets/images/carpenter2.png'),
          img2: require('../../assets/images/carpenterTxt.png'),
        },
        {
          id: '6',
          name: 'Joe Abam',
          description:
            'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
          rating: '4.8',
          location: 'Abuja, Nigeria',
          img: require('../../assets/images/carpenter2.png'),
          img2: require('../../assets/images/carpenterTxt.png'),
        },
      ],
    },
    {
      element: [
        {
          id: '7',
          name: 'Ify Alade',
          description:
            'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
          rating: '4.8',
          location: 'Abuja, Nigeria',
          img: require('../../assets/images/carpenter2.png'),
          img2: require('../../assets/images/carpenterTxt.png'),
        },
        {
          id: '8',
          name: 'Joe Abam',
          description:
            'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmo',
          rating: '4.8',
          location: 'Abuja, Nigeria',
          img: require('../../assets/images/carpenter2.png'),
          img2: require('../../assets/images/carpenterTxt.png'),
        },
      ],
    },
    {},
  ];

  return (
    <SafeView backgroundColor={Colors.white}>
      <HeaderDrawer />
      <View style={{backgroundColor: DefaultTheme.colors.background}}>
        <ScrollView
          // style={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          {/* <Text style={styles.sectionHeading}>Special Offers</Text> */}
          <SectionHeading secHeading="Special Offers" />
          <Slider
            data={offerImg}
            scroll={20}
            pagination={true}
            paginationShow={true}
            pagingEnabled={true}
            renderItem={data => {
              return (
                data && (
                  <Image
                    source={data?.img}
                    style={styles.offerImg}
                    resizeMode="contain"
                  />
                )
              );
            }}
          />
          <View style={styles.sectionContainer}>
            <SectionHeading secHeading="Featured Carpenter" />
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.sort}>
              <Image
                source={Icons.Sort}
                style={styles.sortImg}
                resizeMode="stretch"
              />
              <Text>Sort</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.container}>
            <FlatList
              data={featuredList}
              renderItem={({ item }) => (
                <Item
                  name={item.name}
                  img={item.img}
                  rating={item.rating}
                  description={item.description}
                  location={item.location}
                  img2={item.img2}
                />
              )}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
          </View> */}

          <Slider
            data={featuredCarpenter}
            scroll={20}
            pagination={true}
            paginationShow={true}
            pagingEnabled={true}
            renderItem={data => {
              return (
                data && (
                  <View>
                    {data?.element?.map((item, i) => (
                      <TouchableOpacity
                        key={item.id}
                        style={styles.item1}
                        onPress={() => props.navigation.navigate('Detail')}>
                        <Image
                          source={item.img}
                          style={styles.serviceImg1}
                          resizeMode="contain"
                        />
                        <View style={{marginLeft: normalize(8)}}>
                          <View style={styles.detail}>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <Text style={styles.title}>{item.name}</Text>
                              <Image
                                source={require('../../assets/icons/verified.png')}
                                style={styles.verified}
                                resizeMode="contain"
                              />
                            </View>
                            <Image
                              source={item.img2}
                              style={styles.img2}
                              resizeMode="contain"
                            />
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              height: normalize(18),
                            }}>
                            <Image
                              source={require('../../assets/icons/star.png')}
                              style={styles.star}
                              resizeMode="contain"
                            />
                            <Text style={styles.rating}>({item.rating})</Text>
                          </View>
                          <View style={{width: normalize(190)}}>
                            <Text style={{color: Colors.lightGrey}}>
                              {item.description}
                            </Text>
                          </View>
                          <View style={styles.locationContainer}>
                            <Image
                              source={require('../../assets/icons/location.png')}
                              style={styles.location}
                              resizeMode="contain"
                            />
                            <Text style={{color: Colors.lightGrey}}>
                              {item.location}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                )
              );
            }}
          />

          {/* <View style={styles.sectionContainer}> */}
          <SectionHeading secHeading="Top Carpenters In Your Area" />
          {/* <TouchableOpacity
              onPress={() => props.navigation.navigate('ActiveJobs')}>
              <View style={styles.underline}>
                <Text style={styles.viewAll}>See all</Text>
              </View>
            </TouchableOpacity> */}
          {/* </View> */}
          <View style={styles.container}>
            <FlatList
              data={carpenterList}
              renderItem={({item}) => (
                <Item
                  name={item.name}
                  img={item.img}
                  rating={item.rating}
                  description={item.description}
                  location={item.location}
                  img2={item.img2}
                />
              )}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
          </View>
          <View style={{marginBottom: verticalScale(150)}} />
        </ScrollView>
        <Modal isVisible={isModalVisible}>
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          // style={styles.backgroundPressableStyle}
          >
          <Pressable
            onPress={() => setModalVisible(false)}
            // style={styles.backgroundPressableStyle}
            >
            <View
              style={[
                styles.contentBgStyle,
                {
                  borderTopLeftRadius: normalize(10),
                  borderTopRightRadius: normalize(10),
                  height: normalize(150),
                  backgroundColor:'red',
                },
              ]}></View>
          </Pressable>
        </KeyboardAvoidingView>
      </Modal>
      </View>
 
      <Footer {...props} activeTab={1} />
    </SafeView>
  );
}

export default Carpenters;

const totalWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({

  sortImg: {
    height: normalize(11),
    width: normalize(13),
    marginHorizontal: normalize(5),
  },
  sort: {
    height: normalize(29),
    width: normalize(60),
    borderColor: Colors.black,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: normalize(6),
    marginRight: normalize(15),
  },
  backgroundPressableStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    // backgroundColor: 'red',
  },
  contentBgStyle: {
    // width: SCREEN_WIDTH,
    height: normalize(250),
    backgroundColor: Colors.white,
  },

  offerImg: {
    height: normalize(130),
    width: normalize(240),
    marginLeft: normalize(10),
    borderRadius: normalize(10),
  },
  sectionContainer: {
    // flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  viewAll: {
    fontSize: normalize(10),
    fontWeight: '600',
    color: Colors.primaryPink,
    margin: normalize(1),
  },
  underline: {
    borderBottomWidth: normalize(1),
    borderBottomColor: Colors.primaryPink,
    marginRight: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  item: {
    backgroundColor: Colors.white,
    height: normalize(100),
    marginHorizontal: normalize(10),
    borderRadius: normalize(10),
  },
 
  detail: {
    flexDirection: 'row',
    //backgroundColor: 'yellow',
    justifyContent: 'space-between',
  },
  verified: {
    height: normalize(15),
    width: normalize(15),
    marginLeft: normalize(3),
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    marginBottom: normalize(20),
    //marginTop: StatusBar.currentHeight || 0,
  },
  img2: {
    width: normalize(55),
    height: normalize(20),
    marginRight: normalize(5),
    //backgroundColor: 'yellow'
  },
  star: {
    height: normalize(10),
    width: normalize(10),
  },
  item1: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: normalize(10),
    marginVertical: 5,
    marginHorizontal: normalize(10),
    borderRadius: normalize(10),
    width: totalWidth - normalize(20),
  },
  serviceImg1: {
    height: normalize(100),
    width: normalize(90),
  },
  location: {
    height: normalize(14),
    width: normalize(14),
  },
  rating: {
    fontSize: normalize(9),
    marginLeft: normalize(2),
    color: Colors.lightGrey,
  },
  locationContainer: {
    height: normalize(20),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: normalize(6),
  },
});
