import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import globalStyles from '../../../../util/globalStyles';

const UserProfileImage = ({profilePhoto}) => {
  return (
    <Image
      style={{
        backgroundColor: globalStyles.COLORS.WHITE,
        width: globalStyles.SCREEN_SIZE.width * .35,
        height: globalStyles.SCREEN_SIZE.width * .35,
        borderRadius: globalStyles.SCREEN_SIZE.width * 50
      }}
      source={profilePhoto}
    />
  );
};

UserProfileImage.propTypes = {
  profilePhoto: PropTypes.number
};

export default UserProfileImage;
