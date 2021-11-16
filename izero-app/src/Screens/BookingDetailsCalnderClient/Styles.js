import {
  heightPercentageToDP,
  widthPercentageToDP,
  widthConverter,
  heightConverter,
} from '../../Helpers/Responsive';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../Constants/colors';

const {StyleSheet} = require('react-native');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.pureWhite,
    flex: 1,
  },
  firstButton: {
    marginTop: heightPercentageToDP('10%'),
    width: widthPercentageToDP('73.6%'),
    backgroundColor: '#24334c',
  },
  lastButton: {
    marginTop: heightPercentageToDP('2.2%'),
    width: widthPercentageToDP('73.6%'),
    backgroundColor: 'rgba(142, 150, 163, 0.15)',
  },
  textStyle: {
    color: '#24334c',
  },
  row: {
    width: widthConverter(375),
    paddingHorizontal: widthConverter(22),
    paddingTop: heightConverter(18),
    paddingBottom: heightConverter(25),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontFamily: 'Europa-Bold',
    fontSize: RFValue(22, 812),
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#24334c',
  },
  rotate: {
    transform: [{rotate: '180deg'}],
    marginRight: 17,
  },
  tagOne: {
    width: widthConverter(135),
    height: heightConverter(26),
    borderRadius: widthConverter(13),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(91, 102, 121, 0.09)',
  },
  tagTextOne: {
    fontFamily: 'Europa',
    fontSize: RFValue(15, 812),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#5b6679',
  },
  title: {
    fontFamily: 'Europa-Bold',
    fontSize: RFValue(20, 812),
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#24334c',
    marginBottom: heightConverter(8),
  },
  section: {
    width: widthConverter(375),
  },
  date: {
    fontFamily: 'Europa',
    fontSize: RFValue(18, 812),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.darkGreyHigh,
  },
  image: {
    width: heightConverter(35),
    height: heightConverter(35),
    borderRadius: heightConverter(35) / 2,
    marginRight: widthConverter(6),
  },
  tag: {
    width: widthConverter(105),
    height: heightConverter(26),
    borderRadius: widthConverter(13),
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#3eb561',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    fontFamily: 'Europa',
    fontSize: RFValue(14, 812),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#3eb561',
  },
  h1: {
    fontFamily: 'Europa',
    fontSize: RFValue(17, 812),
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: 0,
    color: '#24334c',
  },
  h1Bold: {
    fontFamily: 'Europa-Bold',
  },
  iconCon: {
    width: heightConverter(46),
    height: heightConverter(46),
    borderRadius: heightConverter(46) / 2,
    backgroundColor: colors.pureWhite,
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: widthConverter(16),
  },
  div: {
    borderTopWidth: 0.3,
    borderColor: colors.darkGreyHigh,
  },
  btn: {
    marginBottom: 10,
    width: widthConverter(331),
    backgroundColor: '#24334c',
  },
});
