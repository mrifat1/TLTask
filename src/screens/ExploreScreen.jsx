import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../constants/Theme';
import {RFValue, hp, wp} from '../lib';
import HeaderComp from '../components/HeaderComp';
import SearchBar from '../components/SearchComp';
import PopularTeacherComp from '../components/PopularTeacherComp';
import PopularInstitutionComp from '../components/PopularInstitutionComp';

const ExploreScreen = () => {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        // alignItems: 'center',
        flex: 1,
        paddingVertical: hp(3),
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComp />
        <SearchBar />
        <PopularTeacherComp />
        <PopularInstitutionComp />
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;
