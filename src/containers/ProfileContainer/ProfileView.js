import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../components/Header';
import UserInfo from './components/UserInfo';
import UserContactInfo from './components/UserContactInfo';
import globalStyles from '../../util/globalStyles';
import {user} from '../../util/data'

const email = require('../../assets/images/profile/email.png');
const profilePhoto = require('../../assets/images/profile/headshot1.jpg');
const phoneNumber = require('../../assets/images/profile/phone.png');

const ProfileView = (props) => {
  return (
    <View style={[
      globalStyles.COMMON_STYLES.pageContainer,
      {
        flex: 1,
        backgroundColor: globalStyles.COLORS.BEIGE
      }
    ]}>
      <Header
        isLogoRequired={true}
        customHeaderStyle={{
          height: globalStyles.SCREEN_SIZE.height / 8.5,
          width: globalStyles.SCREEN_SIZE.width,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: globalStyles.COLORS.PRIMARY,
          marginBottom: 5
        }}
      />
      <UserInfo
        profilePhoto={profilePhoto}
        userTitle={user.title}
        userName={user.name}
      />
      <View
        style={{
          flex: 10,
          backgroundColor: globalStyles.COLORS.WHITE
        }}
      >
        <UserContactInfo
          image={email}
          info={user.email}
        />
        <UserContactInfo
          image={phoneNumber}
          info={user.phoneNumber}
        />
      </View>
    </View>
  );
};

export default ProfileView;
