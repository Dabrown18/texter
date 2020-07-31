import {StyleSheet} from 'react-native';
import globalStyles from '../../../../util/globalStyles';

const images = {

};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: globalStyles.COLORS.WHITE,
    marginLeft: 10,
    height: globalStyles.SCREEN_SIZE.width * .17,
    width: globalStyles.SCREEN_SIZE.width * .75,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: globalStyles.SCREEN_SIZE.width * .05,
    borderRadius: 40,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3
  }
});

export {images, styles};
