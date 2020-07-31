import {StyleSheet} from 'react-native';
import globalStyles from '../../util/globalStyles';

const images = {
  backButtonImage: require('../../assets/images/header/back-icn.png'),
  logo: require('../../assets/images/header/logo.png')
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: globalStyles.COLORS.PRIMARY,
  },
  leftIconContainer: {
    marginTop: 0,
    paddingLeft: globalStyles.SCREEN_SIZE.width <= 320 ? 8 : 15,
    paddingRight: globalStyles.SCREEN_SIZE.width <= 320 ? 8 : 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    left: 0,
  },
  headerTitleContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
  },
  headerTitleText: {
    textAlign: 'center',
    color: globalStyles.COLORS.WHITE,
    fontSize: 20,
    marginTop: 50
  },
});

export {images, styles};
