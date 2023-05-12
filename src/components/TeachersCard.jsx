import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants/Theme';
import {RFValue, hp, wp} from '../lib';
// import {SvgUri} from 'react-native-svg';
import SVGImgFilter from '../assets/images/filter.svg';
import SVGImgFilterBlue from '../assets/images/filter_blue.svg';
import SearchMenu from '../assets/images/searchMenu.svg';
import {AllSubjects, AreaData} from '../dummyData/DummyDatas';
const TeachersCard = ({item, index, length}) => {
  const [filterClick, setFilterclick] = useState(false);
  const [indexValue, setIndexValue] = useState();
  const [subindexValue, setsubIndexValue] = useState();

  console.log('index', index, item);

  return (
    <View
      style={[
        styles.container,
        {
          //   marginLeft: index > 0 ? hp(2) : hp(0),
          //   marginLeft: index === 0 ? hp(2) : 0,
          marginLeft: index === 0 ? hp(2.5) : hp(2),
          marginRight: index === length - 1 ? hp(2.5) : 0,
        },
      ]}>
      <Image
        style={{width: '100%', borderRadius: 10, height: hp(18)}}
        source={item?.image}
      />
      <Text style={styles.title}>{item?.name}</Text>
      <Text
        style={{
          fontFamily: 'Roboto-Regular',
          color: colors.heading,
          fontWeight: '400',
          marginTop: hp(0.5),
        }}>
        {item?.subjectName}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // marginTop: hp(4),
    backgroundColor: '#ffff',
    minHeight: hp(25),
    minWidth: wp(35),
    borderRadius: 10,
    alignItems: 'flex-start',
    paddingVertical: hp(1.5),
    // paddingTop: hp(1.5),
    paddingHorizontal: hp(1),
  },
  filterElem: {
    marginVertical: hp(2),
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
    fontFamily: 'Exo-SemiBold',
    fontSize: RFValue(16),
    fontWeight: '600',
    color: colors.heading,
    marginTop: hp(1),
  },
  subTitle: {
    fontFamily: 'Exo-Medium',
    fontSize: RFValue(12),
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

export default TeachersCard;
