import React, {useState} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import {Divider} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

export function HomePage() {
  const [story, setStory] = useState([
    {
      id: 0,
      title: 'Your Profile',
      images: require('../images/yourprofile.png'),
    },
    {
      id: 1,
      title: 'kieren',
      images: require('../images/kieren.png'),
    },
    {
      id: 2,
      title: 'jason',
      images: require('../images/jason.png'),
    },
    {
      id: 3,
      title: 'keiron d',
      images: require('../images/keiron_d.png'),
    },
    {
      id: 4,
      title: 'craig love',
      images: require('../images/craig_love.png'),
    },
    //hello world
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.appMainContainer}>
        <View style={styles.appLeftContainer}>
          <Feather name="camera" size={30} />
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Image
            style={styles.appCenterContainer}
            source={require('../images/logo.png')}
            // source={require('../images/logo.png')}
          />
        </View>
        <View style={styles.appRightContainer}>
          <Image source={require('../images/tv.png')} />
          <Image source={require('../images/chatIcon.png')} />
        </View>
      </View>
      <Divider />
      <ScrollView horizontal={true}>
        <View style={styles.storyMainContainer}>
          {story.length > 0 &&
            story.map(res => {
              return (
                <View style={styles.storyContainer}>
                  <Image source={res.images} style={{width: 50, height: 50}} />
                  <Text>{res.title}</Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
      <View style={styles.feedMainContainer}></View>
    </View>
  );
}

export function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
export function tabs3() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
export function tabs4() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
export function tabs5() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
