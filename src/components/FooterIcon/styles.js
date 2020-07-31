import {StyleSheet} from 'react-native';
import globalStyles from '../../util/globalStyles';

const images = {
  homeIconSelected: require('../../assets/images/footer/home-selected.png'),
  homeIconUnSelected: require('../../assets/images/footer/home-unselected.png'),
  profileIconSelected: require('../../assets/images/footer/profile-selected.png'),
  profileIconUnSelected: require('../../assets/images/footer/profile-unselected.png')
};

const styles = StyleSheet.create({
  tabBarItem: {
    width: (globalStyles.SCREEN_SIZE.width / 4),
    height: globalStyles.INTEGERS.footerTabBarHeight,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export {images, styles};
