import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {color} from '../colors/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Menu1Images from '../allSliderImages/Menu1Images';

const Tab = createMaterialTopTabNavigator();

export default function TopTabBar() {
  return (
    <Tab.Navigator
      activeColor="red"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}
      screenOptions={{
        tabBarItemStyle: {
          height: 50,
          paddingTop: 20,
          backgroundColor: 'white',
        },

        tabBarOptions: {
          labelStyle: {fontSize: 12},
        },
      }}>
      <Tab.Screen
        name="Menu1"
        component={Menu1}
        options={{
          tabBarLabel: '',
          tabBarIcon: color => <Feather name="grid" size={25} color={color} />,
        }}
      />
      <Tab.Screen
        name="Menu2"
        component={Menu2}
        options={{
          tabBarLabel: '',
          tabBarIcon: color => <Feather name="user" size={25} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const Menu1 = () => {
  const [imageUrl, setImageUrl] = useState(Menu1Images);
  // useEffect(() => {
  //   let items = Array.apply(null, Array(60)).map((v, i) => {
  //     return {
  //       id: i,
  //       src: 'https://www.pexels.com/photo/green-and-blue-peacock-feather-674010/',
  //     };
  //   });

  //   setImageUrl(items);
  // }, []);

  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={imageUrl}
        renderItem={({item}) => (
          <View style={styles.imageMainContainer}>
            <Image
              style={styles.imageThumbnail}
              source={require('../images/image1.png')}
            />
          </View>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

function Menu2() {
  return (
    <View>
      <Text>Menu2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    margin: 4,
  },
  imageMainContainer: {
    width: wp('32'),
    flexDirection: 'column',
    margin: 1,
  },
  imageThumbnail: {
    width: 130,
    height: 100,
    resizeMode: 'stretch',
  },
});
