import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import globalStyles from '../../../../util/globalStyles';
import {styles} from './styles';

const Conversation = ({message, customStyle, customTextStyle}) => {

  return (
    <View
      style={[styles.messengerContainer, customStyle]}
    >
      <Text
        style={[
          globalStyles.COMMON_STYLES.text,
          styles.messageText,
          customTextStyle
        ]}
      >
        {message}
      </Text>
    </View>
  );
};

Conversation.propTypes = {
  message: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  customTextStyle: PropTypes.object
};

export default Conversation;
