import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../constants/Theme';
import {RFValue, hp, wp} from '../lib';
// import {SvgUri} from 'react-native-svg';
import SVGImg from '../assets/images/searchIcon.svg';
import SearchMenu from '../assets/images/searchMenu.svg';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.placeholder}
          placeholder="Search Your Teacher"
        />
        <View style={styles.barIcon}>
          <SVGImg height={hp(3)} width={wp(5)} />
        </View>
      </View>
      <TouchableOpacity style={{marginRight: hp(2.5)}}>
        <SearchMenu height={hp(5)} width={wp(7)} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(4),
  },
  searchBar: {
    width: wp(70),
    borderRadius: 10,
    borderWidth: 1,
    elevation: 15,
    backgroundColor: '#ffff',
    borderColor: '#ffff',
    // alignItems: 'center',
    // paddingHorizontal: hp(2),
    paddingLeft: hp(2),
    paddingRight: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  barIcon: {
    backgroundColor: '#5667FD',
    height: hp(5.1),
    width: wp(10),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    fontFamily: 'Exo-Medium',
    fontSize: RFValue(16),
    fontWeight: '600',
    color: colors.subTitle,
    width: wp(50),
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

export default SearchBar;
