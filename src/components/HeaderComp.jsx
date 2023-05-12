import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../constants/Theme';
import {RFValue, hp, wp} from '../lib';
// import {SvgUri} from 'react-native-svg';
import SVGImg from '../assets/images/profile.svg';
const HeaderComp = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Good Evening!</Text>
        <Text style={styles.subTitle}>Hardline Scott</Text>
      </View>
      <View style={styles.image}>
        {/* <SvgUri
          width={hp(7)}
          height={wp(5)}
          source={require('../assets/images/profile.svg')}
        /> */}
        <SVGImg height={hp(8)} width={wp(15)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
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
    borderRadius: hp(2),
    borderWidth: 5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
    backgroundColor: '#E8DBDB',
    // shadowColor: '#52006A',
  },
});

export default HeaderComp;
