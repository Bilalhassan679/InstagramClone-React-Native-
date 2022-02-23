import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ReusableText = props => {
  return (
    <Text
      style={[
        styles.container,
        {
          fontSize: props?.fontSize,
          fontWeight: props?.fontWeight,
          color: props?.color,
        },
      ]}>
      {props?.Text}
    </Text>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  container: {},
});
