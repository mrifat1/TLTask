import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants/Theme';
import {RFValue, hp, wp} from '../lib';
// import {SvgUri} from 'react-native-svg';
import SVGImgFilter from '../assets/images/filter.svg';
import SVGImgFilterBlue from '../assets/images/filter_blue.svg';
import SearchMenu from '../assets/images/searchMenu.svg';
import {AllSubjects, AreaData, Teachers} from '../dummyData/DummyDatas';
import TeachersCard from './TeachersCard';
const PopularTeacherComp = () => {
  const [filterClick, setFilterclick] = useState(false);
  const [indexValue, setIndexValue] = useState();
  const [subindexValue, setsubIndexValue] = useState();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>Popular Teachers</Text>
        {filterClick ? (
          <TouchableOpacity
            onPress={() => setFilterclick(!filterClick)}
            style={{marginRight: hp(2)}}>
            <SVGImgFilterBlue height={hp(5)} width={wp(10)} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setFilterclick(!filterClick)}
            style={{marginRight: hp(2)}}>
            <SVGImgFilter height={hp(5)} width={wp(10)} />
          </TouchableOpacity>
        )}
      </View>
      {filterClick && (
        <View>
          <View style={styles.filterElem}>
            <Text style={styles.subTitle}>Area</Text>
            <View
              style={{
                marginTop: hp(1),
                flexDirection: 'row',
                width: wp(60),
                flexWrap: 'wrap',
              }}>
              {AreaData?.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => setIndexValue(index)}
                    style={{
                      backgroundColor:
                        index === indexValue ? colors.purple : '#fff',
                      paddingHorizontal: hp(1),
                      paddingVertical: hp(0.8),
                      borderRadius: 10,
                      marginLeft: index > 0 ? hp(1) : hp(0),
                    }}>
                    <Text
                      style={[
                        styles.title,
                        {
                          fontFamily: 'Roboto-Regular',
                          fontSize: RFValue(13),
                          fontWeight: '400',
                          color: index === indexValue ? '#fff' : colors.heading,
                        },
                      ]}>
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={styles.filterElem}>
            <Text style={styles.subTitle}>Subjects</Text>
            <View
              style={{
                marginTop: hp(1),
                flexDirection: 'row',
                width: wp(80),
                flexWrap: 'wrap',
              }}>
              {AllSubjects?.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => setsubIndexValue(index)}
                    style={{
                      backgroundColor:
                        index === subindexValue ? colors.purple : '#fff',
                      paddingHorizontal: hp(1),
                      paddingVertical: hp(0.8),
                      borderRadius: 10,
                      marginLeft: index > 0 ? hp(1) : hp(0),
                      marginTop: hp(1.5),
                    }}>
                    <Text
                      style={[
                        styles.title,
                        {
                          fontFamily: 'Roboto-Regular',
                          fontSize: RFValue(13),
                          fontWeight: '400',
                          color:
                            index === subindexValue ? '#fff' : colors.heading,
                        },
                      ]}>
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      )}
      <View style={{marginTop: hp(1)}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Teachers}
          keyExtractor={item => item.id}
          renderItem={(item, index) => {
            return <TeachersCard index={item?.index} item={item?.item} />;
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: hp(4),
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
    fontSize: RFValue(20),
    fontWeight: '600',
    color: colors.heading,
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

export default PopularTeacherComp;
