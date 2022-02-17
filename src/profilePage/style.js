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
  ProfileMainContainer: {
    height: hp('25'),
    width: wp('90'),
    alignSelf: 'center',
  },
  imageContainer: {
    width: wp('23'),
    height: hp('15'),
  },
  followersMainContainer: {
    width: wp('55'),
    marginTop: hp('4'),
    marginLeft: wp('10'),
    alignItems: 'center',
    height: hp('8'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  followsContainer: {
    marginRight: wp('5'),
    alignItems: 'center',
  },
  followerTextContainer: {
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
  },
  editButtomMainContainer: {
    height: hp('4'),
    width: wp('90'),
    alignSelf: 'center',
    marginTop: hp('2'),
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  editTextContainer: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    color: 'black',
  },
  hobbyMainContainer: {
    width: wp('90'),
    height: hp('13'),
    marginTop: hp('2'),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  hobbyContainer: {
    overflow: 'hidden',
    width: wp('17'),
    height: hp('10'),
    marginRight: wp('2'),
    borderColor: 'grey',
    borderRadius: 50,
    justifyContent: 'center',
    borderWidth: 1,
  },
  imagehobbyContainer: {
    width: wp('15'),
    height: hp('9'),
    alignSelf: 'center',
    borderRadius: 30,
  },
});
