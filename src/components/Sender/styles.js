import {StyleSheet} from 'react-native';
import globalStyles from '../../util/globalStyles';

const images = {

};

const styles = StyleSheet.create({
  senderContainer: {
    flex: 1,
    backgroundColor: globalStyles.COLORS.BEIGE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  senderName: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 17
  },
  senderDate: {
    marginRight: 15,
    fontWeight: 'bold',
    fontSize: 17
  }
});

export {images, styles};
