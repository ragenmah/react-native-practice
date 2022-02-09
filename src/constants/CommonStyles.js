import {StyleSheet} from 'react-native';

const CommonStyles = StyleSheet.create({
  dFlex: {
    flex: 1,
  },
  dCenter: {
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  p10: {
    padding: 10,
  },
  m10: {
    margin: 10,
  },
  centerItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    margin: 5,
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    borderWidth: 1,
    margin: 5,
    fontSize: 15,
    borderRadius: 42,
    padding: 8,
    width: '100%',
  },
  displayColumn: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10
  },
});
export default CommonStyles;
