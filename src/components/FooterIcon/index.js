import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {styles, images} from './styles'

const FooterIcon = (props) => {
  const {
    tabBarIndex,
    isFocused
  } = props;

  let tabBarImage;

  if (parseInt(tabBarIndex) === 0) {
    if (isFocused) {
      tabBarImage = images.homeIconSelected
    } else {
      tabBarImage = images.homeIconUnSelected
    }
  } else if (parseInt(tabBarIndex) === 1) {
    if (isFocused) {
      tabBarImage = images.profileIconSelected
    } else {``
      tabBarImage = images.profileIconUnSelected
    }
  }

  return (
    <View style={styles.tabBarItem}>
      <Image resizeMode="contain" source={tabBarImage}/>
    </View>
  );
};

FooterIcon.propTypes = {
  tabBarIndex: PropTypes.number,
  isFocused: PropTypes.bool
};

export default FooterIcon;
