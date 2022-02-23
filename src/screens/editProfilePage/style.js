import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileMaincontainer: {
    width: wp('100'),
    height: hp('25'),
    alignItems: 'center',
    paddingTop: hp('1'),
  },
  profileImageContainer: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.27,
    height: Dimensions.get('window').width * 0.27,

    resizeMode: 'contain',
  },
});
