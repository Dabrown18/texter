import {StyleSheet} from 'react-native';
import globalStyles from '../../../../util/globalStyles';

const images = {

};

const styles = StyleSheet.create({
  messengerContainer: {
    backgroundColor: globalStyles.COLORS.BEIGE,
    maxWidth: 250,
    marginLeft: 15,
    borderRadius: 10
  },
  messageText: {
    padding: 15,
    fontSize: globalStyles.SCREEN_SIZE.width * .05
  }
});

export {images, styles};
