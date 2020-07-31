import React from 'react';
import {StatusBar, View, Text, Image, TouchableOpacity, Keyboard} from 'react-native';
import PropTypes from 'prop-types';
import globalStyles from '../../util/globalStyles';
import {styles, images} from './styles';
import {useNavigation} from 'react-navigation-hooks';
import {PropsType} from 'react-native/ReactCommon/hermes/inspector/tools/msggen/src/Type';

const Header = (props) => {
  const {goBack} = useNavigation();
  const {
    isBackButtonRequired,
    isLogoRequired,
    headerTitle,
    customHeaderStyle
  } = props;

  const onLeftMenuPress = () => {
    Keyboard.dismiss();
    if (isBackButtonRequired) {
      goBack();
    }
  };

  let headerStyle = styles.headerContainer;
  if (customHeaderStyle) {
    headerStyle = customHeaderStyle
  }

  return (
    <View style={headerStyle}>
      <StatusBar
        backgroundColor={globalStyles.COLORS.PRIMARY}
        barStyle="light-content"
      />
      {
        isBackButtonRequired ? (
          <TouchableOpacity style={styles.leftIconContainer} onPress={onLeftMenuPress}>
            <Image
              resizeMode="contain"
              source={images.backButtonImage}
              style={{alignItems: 'stretch', marginTop: 50}}
            />
          </TouchableOpacity>
        ) : null
      }
      <View style={styles.headerTitleContainer}>
        {
          isLogoRequired ? (
            <Image
              source={images.logo}
              resizeMode='contain'
              style={{
                alignItems: 'stretch',
                marginTop: 25}}
            />
          ) : (
            <Text style={styles.headerTitleText}>{headerTitle}</Text>
          )
        }
      </View>
    </View>
  );
};

Header.propTypes = {
  isBackButtonRequired: PropTypes.bool,
  isLogoRequired: PropTypes.bool,
  headerTitle: PropTypes.string,
  customHeaderStyle: PropTypes.object
};

export default Header;
