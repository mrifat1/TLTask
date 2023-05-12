import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../constants/Theme';
import {RFValue, hp, wp} from '../lib';
import HeaderComp from '../components/HeaderComp';
import SearchBar from '../components/SearchComp';
import PopularTeacherComp from '../components/PopularTeacherComp';

const ExploreScreen = () => {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        // alignItems: 'center',
        flex: 1,
        paddingVertical: hp(2),
        paddingHorizontal: wp(5),
      }}>
      <HeaderComp />
      <SearchBar />
      <PopularTeacherComp />
    </View>
  );
};

export default ExploreScreen;
