import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import ReusableAppBar from '../../components/ReusableAppBar';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ReusableTextAppBar from '../../components/ReusableTextAppBar';
import {Divider} from 'react-native-elements';
import ReusableText from '../../components/ReusableText';
import {color} from '../../colors/colors';

const EditProfilePage = () => {
  return (
    <View style={styles.container}>
      <ReusableTextAppBar
        leftfontSize={16}
        leftText={'Cancel'}
        centerText={'Edit Profile'}
        centerFontSize={16}
        centerFontWeight={'bold'}
        centerColor={'black'}
        rightText={'Done'}
        rightFontSize={16}
        rightColor={'grey'}
      />
      <Divider width={1} />
      <View style={styles.profileMaincontainer}>
        <View
          style={{
            // backgroundColor: 'transparent',
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            width: Dimensions.get('window').width * 0.3,
            height: Dimensions.get('window').width * 0.3,
            borderColor: '#FF784D',
            borderWidth: 3,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: hp('1'),
          }}>
          <Image
            style={styles.profileImageContainer}
            source={require('../../images/ProfileImage.png')}></Image>
        </View>
        <ReusableText Text={'change profile photo'} color={color.dotColors} />
      </View>
    </View>
  );
};

export default EditProfilePage;
