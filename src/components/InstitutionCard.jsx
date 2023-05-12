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
import StarRating from 'react-native-star-rating-widget';
const InstitutionCard = ({item, index}) => {
  const [filterClick, setFilterclick] = useState(false);
  const [indexValue, setIndexValue] = useState();
  const [subindexValue, setsubIndexValue] = useState();

  console.log('index', index, item);

  return (
    <View style={[styles.container]}>
      <View
        style={{
          backgroundColor: item?.color,
          minHeight: hp(23),
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: wp(35),
        }}>
        <Image source={item?.image} />
      </View>
      <View style={styles.secondBox}>
        <Text
          style={{
            fontFamily: 'Exo-Bold',
            fontSize: RFValue(19),
            color: colors.heading,
          }}>
          {item?.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp(0.5),
          }}>
          <StarRating
            starSize={hp(1.7)}
            rating={item?.rating}
            onChange={() => console.log('clicked')}
          />
          <Text>{item?.ratingValue}</Text>
        </View>
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            color: colors.heading,
            marginTop: hp(0.5),
          }}>
          {item?.subjectName}
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            color: '#121212',
            fontWeight: '300',
            fontSize: RFValue(12),
            marginTop: hp(0.5),
          }}>
          {item?.details}
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
    minHeight: hp(25),
    // width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  secondBox: {
    width: wp(48),
    minHeight: hp(22),
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

export default InstitutionCard;
