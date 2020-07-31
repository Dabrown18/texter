import {StyleSheet} from 'react-native';
import globalStyles from '../../../../util/globalStyles';

const images = {

};

const styles = StyleSheet.create({
  buttonContainer: {
    width: globalStyles.SCREEN_SIZE.width * .17,
    height: globalStyles.SCREEN_SIZE.width * .17,
    borderRadius: globalStyles.SCREEN_SIZE.width / 2,
    backgroundColor: globalStyles.COLORS.ACCENT,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: globalStyles.SCREEN_SIZE.width * .09
  }
});

export {images, styles};
