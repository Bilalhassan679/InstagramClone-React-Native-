import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function ReusableAppBar(props) {
  return (
    <View style={styles.appMainContainer}>
      <View style={styles.appLeftContainer}>
        <Feather name={props?.iconName} size={30} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        {props.imageNameConfirm == true ? (
          <Image style={styles.appCenterContainer} source={props?.imageName} />
        ) : (
          <Feather
            style={styles.appCenterContainer}
            name={props?.imageName}
            size={15}
            color="black"
          />
        )}
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {props?.centerText}
        </Text>
        <Feather
          style={styles.appCenterContainer}
          name={props?.centerRightIcon}
          size={15}
        />
      </View>
      <View style={styles.appRightContainer}>
        <Image source={props?.rightSideIcon} />
        {props.rightImage == true ? (
          <Image source={props?.rightSideSecondIcon} />
        ) : (
          <Feather name={props?.rightSideSecondIcon} size={30} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appMainContainer: {
    flexDirection: 'row',
    width: wp('100'),
    height: hp('10'),
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
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: wp('2'),
  },
  appRightContainer: {
    width: wp('15'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
