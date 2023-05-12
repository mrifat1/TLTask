import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../constants/Theme';
import {RFValue, hp, wp} from '../lib';

const HeaderComp = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Good Evening!</Text>
        <Text style={styles.subTitle}>Hardline Scott</Text>
      </View>
      <View style={styles.image}>
        <Text>H</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Exo-Bold',
    fontSize: RFValue(32),
    fontWeight: '600',
    color: colors.heading,
  },
  subTitle: {
    fontFamily: 'Exo-Medium',
    fontSize: RFValue(20),
    fontWeight: '600',
    color: colors.subTitle,
  },
  image: {
    height: hp(8),
    width: wp(15),
    borderRadius: hp(1.8),
    borderWidth: 6,
    borderColor: 'white',
    elevation: 20,
    // shadowColor: '#52006A',
  },
});

export default HeaderComp;
