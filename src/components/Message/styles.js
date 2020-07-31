import {StyleSheet} from 'react-native';
import globalStyles from '../../util/globalStyles';

const images = {

};

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: globalStyles.COLORS.WHITE,
    height: globalStyles.SCREEN_SIZE.height/8,
    width: globalStyles.SCREEN_SIZE.width * .98,
    marginTop: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3
  }
});

export {images, styles};
