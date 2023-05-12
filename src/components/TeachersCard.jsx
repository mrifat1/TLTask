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
const TeachersCard = ({item, index}) => {
  const [filterClick, setFilterclick] = useState(false);
  const [indexValue, setIndexValue] = useState();
  const [subindexValue, setsubIndexValue] = useState();

  console.log('index', index, item);

  return (
    <View style={[styles.container, {marginLeft: index > 0 ? hp(2) : hp(0)}]}>
      <Image source={item?.image} />
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.title}>{item?.name}</Text>
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            color: colors.heading,
            fontWeight: '400',
          }}>
          {item?.subjectName}
        </Text>
      </View>
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
    height: hp(25),
    width: wp(38),
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: hp(0.5),
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
