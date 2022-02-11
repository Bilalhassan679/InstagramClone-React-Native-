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
    backgroundColor: 'green',
    height: hp('4'),
  },
});
