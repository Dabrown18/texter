import React from 'react';
import {View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import globalStyles from '../../../../util/globalStyles';
import UserProfileImage from './UserProfileImage';

const UserInfo = (props) => {
  const {
    profilePhoto,
    userName,
    userTitle
  } = props;

  return (
    <View
      style={{
        flex: 7,
        backgroundColor: globalStyles.COLORS.BEIGE,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <UserProfileImage profilePhoto={profilePhoto}/>
      <Text
        style={[
          globalStyles.COMMON_STYLES.text,
          {
            fontSize: globalStyles.SCREEN_SIZE.width * .08,
            marginBottom: 10
          }
        ]}
      >
        {userName}
      </Text>
      <Text
        style={[
          globalStyles.COMMON_STYLES.text,
          {
            fontSize: globalStyles.SCREEN_SIZE.width * .06,
          }
        ]}
      >
        {userTitle}
      </Text>

    </View>
  );
};

UserInfo.propTypes = {
  profilePhoto: PropTypes.number,
  userName: PropTypes.string.isRequired,
  userTitle: PropTypes.string
};

export default UserInfo;
