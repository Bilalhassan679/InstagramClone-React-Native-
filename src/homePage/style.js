import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appMainContainer: {
    flexDirection: 'row',
    width: wp('100'),
    height: hp('9'),
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    paddingHorizontal: wp('2'),
  },
  appLeftContainer: {
    width: wp('15'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  appCenterContainer: {
    width: wp('30'),
  },
  appRightContainer: {
    width: wp('15'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  storyMainContainer: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    height: hp('12'),
  },
  storyContainer: {
    marginTop: hp('1'),
    marginHorizontal: wp('2'),
    width: wp('18'),
    alignItems: 'center',
  },
  feedMainContainer: {
    // height: hp('10'),
  },
  feedContainer: {
    flexDirection: 'row',
    height: hp('9'),
    paddingHorizontal: wp('2'),
    alignItems: 'center',
  },
  feedImageContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LikesMainContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: wp('2'),
    paddingTop: hp('1'),
    alignItems: 'center',
  },
  LikesContainer: {
    paddingHorizontal: wp('5'),
    flexDirection: 'row',
  },
  likeIconMainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 10,
  },
});
