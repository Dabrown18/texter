import {Dimensions} from 'react-native';

let {height, width} = Dimensions.get('window');
let footerTabBarHeight = 50;

module.exports = {
  SCREEN_SIZE: {
    width,
    height
  },
  COLORS: {
    PRIMARY: "#1F1A38",
    SECONDARY: "#7B506F",
    ACCENT: "#DD99BB",
    BEIGE: "#EAD7D1",
    BRONZE: "#DBCDC6",
    BG_COLOR: "#EAEBEE",
    WHITE: "#FFFFFF",
    LIGHT_GREY: '#707070'
  },
  INTEGERS: {
    footerTabBarHeight
  },
  COMMON_STYLES: {
    pageContainer: {
      backgroundColor: "#EAEBEE",
      marginTop: 0,
      paddingTop: 0,
      marginHorizontal: 0,
      paddingHorizontal: 0,
    },
    text: {
      color: "#484848",
      fontFamily: "Helvetica Neue"
    }
  }
};
