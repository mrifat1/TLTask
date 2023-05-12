import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../constants/Theme';
import {RFValue, hp, wp} from '../lib';
import HeaderComp from '../components/HeaderComp';

const ExploreScreen = () => {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        // alignItems: 'center',
        flex: 1,
        paddingVertical: hp(2),
        paddingHorizontal: wp(4),
      }}>
      <HeaderComp />
    </View>
  );
};

export default ExploreScreen;
