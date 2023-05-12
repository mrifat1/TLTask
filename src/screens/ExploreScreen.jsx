import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../constants/Theme';

const ExploreScreen = () => {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        alignItems: 'center',
        flex: 1,
      }}>
      <Text>Hello</Text>
    </View>
  );
};

export default ExploreScreen;
