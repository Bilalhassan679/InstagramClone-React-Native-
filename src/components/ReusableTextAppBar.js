import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ReusableText from './ReusableText';
const ReusableTextAppBar = props => {
  return (
    <View style={styles.container}>
      <ReusableText
        Text={props?.leftText}
        fontSize={props?.leftfontSize}
        fontWeight={props?.leftfontWeight}
        color={props?.leftColor}
      />
      <ReusableText
        Text={props?.centerText}
        fontSize={props?.centerFontSize}
        fontWeight={props?.centerFontWeight}
        color={props?.centerColor}
      />
      <ReusableText
        Text={props?.rightText}
        fontSize={props?.rightFontSize}
        fontWeight={props?.rightFontWeight}
        color={props?.rightColor}
      />
    </View>
  );
};

export default ReusableTextAppBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('8'),
    width: wp('100'),
    justifyContent: 'space-between',
    paddingTop: hp('2'),
    paddingLeft: wp('2'),
    paddingRight: wp('2'),
  },
});
