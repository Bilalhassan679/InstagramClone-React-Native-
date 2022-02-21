import React, {useState} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  FlatList,
} from 'react-native';
import {styles} from './style';
import {Divider} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Paginator from '../components/Paginator';
import slides from '../slides';
import storySlider from '../storySlider';
import ReusableAppBar from '../components/ReusableAppBar';

export function HomePage() {
  const [indexChange, setIndexChange] = useState(0);
  const [story, setStory] = useState(storySlider);
  const onViewRef = React.useRef(viewableItems => {
    setIndexChange(viewableItems.changed[0].index);
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View style={styles.container}>
      <ReusableAppBar
        iconName={'camera'}
        imageNameConfirm={true}
        imageName={require('../images/logo.png')}
        rightSideIcon={require('../images/tv.png')}
        rightImage={true}
        rightSideSecondIcon={require('../images/chatIcon.png')}
      />

      <Divider />
      <View style={styles.storyMainContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {story.length > 0 &&
            story.map(res => {
              return (
                <View style={styles.storyContainer}>
                  <Image source={res.images} style={{width: 50, height: 50}} />
                  <Text>{res.title}</Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
      <Divider />
      <ScrollView>
        <View style={styles.feedMainContainer}>
          <View style={styles.feedContainer}>
            <Image
              style={{marginRight: 15}}
              source={require('../images/joshua.png')}
            />
            <View style={{height: 40}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black', paddingRight: 5}}>joshua_I</Text>
                <Image source={require('../images/verifiedIcon.png')} />
              </View>
              <Text style={{fontSize: 11}}>Tokyo,Japan</Text>
            </View>
            <View
              style={{
                width: 30,
                marginLeft: 'auto',
                paddingBottom: 25,
              }}>
              <MaterialCommunityIcons
                name="settings-helper"
                color={'black'}
                size={30}
              />
            </View>
          </View>
          <FlatList
            data={slides}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewConfigRef.current}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator
            bounces={false}
            renderItem={({item, index}) => {
              return <Image source={item.image} />;
            }}
          />
        </View>
        <View style={styles.LikesMainContainer}>
          <View style={styles.LikesMainContainer}>
            <Feather style={{paddingRight: 17}} name="heart" size={25} />
            <Fontisto style={{paddingRight: 17}} name="comment" size={25} />
            <Image source={require('../images/chatIcon.png')} />
          </View>
          <Paginator IndexChange={indexChange} data={slides} />
          <Image
            style={{marginLeft: 100}}
            source={require('../images/tagShape.png')}
          />
        </View>
        <View style={styles.likeIconMainContainer}>
          <Image source={require('../images/likeIcon.png')} />
          <Text style={{paddingLeft: 10}}>
            Liked by craig_love and 44,686 others
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SettingsScreen!</Text>
    </View>
  );
}
export function tabs3() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>tabs3!</Text>
    </View>
  );
}
