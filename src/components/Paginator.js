import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Paginator(props) {
  return (
    <View style={styles.container}>
      {props.data.map((_, i) => {
        return (
          <View
            style={[
              styles.dotContainer,
              {
                width: 10,
                backgroundColor: props.IndexChange == i ? '#3897F0' : 'grey',
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // height: 25,
    paddingTop: 10,
  },
  dotContainer: {
    height: 6,
    borderRadius: 50,
    marginHorizontal: 4,
  },
});
