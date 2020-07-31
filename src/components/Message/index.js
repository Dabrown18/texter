import React from 'react';
import PropTypes from 'prop-types';
import Sender from '../Sender';
import {TouchableOpacity, View} from 'react-native';
import Title from '../Title';
import SubText from '../SubText';
import {styles} from './styles';

const Message = (props) => {
  const {
    senderName,
    date,
    title,
    messagePreview,
    onViewMessage
  } = props;
  return (
    <TouchableOpacity style={styles.messageContainer} onPress={onViewMessage}>
      <Sender senderName={senderName} date={date}/>
      <View style={{flex: 3}}>
        <Title title={title}/>
        <SubText messagePreview={messagePreview}/>
      </View>
    </TouchableOpacity>
  );
};

Message.propTypes = {
  senderName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired,
  messagePreview:  PropTypes.string.isRequired,
  onViewMessage: PropTypes.func.isRequired
};

export default Message;
