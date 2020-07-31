import React from 'react';
import {View, Text, Image} from 'react-native'
import globalStyles from '../../../../util/globalStyles';

const UserContactInfo = ({image, info}) => {
  return (
    <View
      style={{
        backgroundColor: globalStyles.COLORS.WHITE,
        borderBottomColor: globalStyles.COLORS.LIGHT_GREY,
        borderBottomWidth: 0.5,
        width: globalStyles.SCREEN_SIZE.width,
        height: globalStyles.SCREEN_SIZE.height * .08,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Image style={{marginLeft: 15}} source={image}/>
      <Text
        style={[
          globalStyles.COMMON_STYLES.text,
          {
            fontSize: globalStyles.SCREEN_SIZE.width * .055,
            marginRight: 15
          }
        ]}
      >
        {info}
      </Text>
    </View>

  );
};

export default UserContactInfo;
