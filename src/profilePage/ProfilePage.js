import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import hobby from '../hobby';
import ReusableAppBar from '../components/ReusableAppBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import TopTabCenterPage from '../components/TopTabCenterPage';

export default function ProfilePage() {
  const [selectHobby, setSelectHobby] = useState([]);

  const pickImagesFromGalary = () => {
    launchImageLibrary(
      {
        selectionLimit: 20,
        mediaType: 'photo',
        quality: 0.3,
      },
      res => {
        if (!res?.didCancel) {
          setSelectHobby(res.assets);
          console.log('selectHobby', selectHobby);
        }
      },
    );
  };
  return (
    <View style={styles.container}>
      <ReusableAppBar
        imageName="lock"
        centerText="jacob_w"
        centerRightIcon="chevron-down"
        rightSideSecondIcon={false}
        rightSideSecondIcon="menu"
      />

      <View style={styles.ProfileMainContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.imageContainer}
            source={require('../images/bigProfileImage.png')}
            resizeMode={'contain'}
          />
          <View style={styles.followersMainContainer}>
            <View style={styles.followsContainer}>
              <Text style={styles.followerTextContainer}>54</Text>
              <Text>Posts</Text>
            </View>
            <View style={styles.followsContainer}>
              <Text style={styles.followerTextContainer}>834</Text>
              <Text>Follower</Text>
            </View>
            <View style={styles.followsContainer}>
              <Text style={styles.followerTextContainer}>162</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 12, fontWeight: '600', color: 'black'}}>
            Jacob West
          </Text>
          <Text>Digital goodies designer @pixsellz</Text>
          <Text>Everything is designed</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButtomMainContainer}>
        <Text style={styles.editTextContainer}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={styles.hobbyMainContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => pickImagesFromGalary()}>
            <View style={styles.hobbyContainer}>
              <MaterialIcons
                style={{
                  alignSelf: 'center',
                }}
                name={'add'}
                size={30}
              />
            </View>
          </TouchableOpacity>
          {selectHobby &&
            selectHobby.map(res => {
              console.log('res', res.uri);
              return (
                <View style={styles.hobbyContainer}>
                  <Image
                    source={{uri: res.uri}}
                    style={styles.imagehobbyContainer}
                  />
                </View>
              );
            })}
        </View>
      </View>
      <Divider width={1} />
      <TopTabCenterPage />
    </View>
  );
}
