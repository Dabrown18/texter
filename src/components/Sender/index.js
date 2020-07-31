import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../../util/globalStyles';
import {Text, View} from 'react-native';
import {styles} from './styles';
import FooterIcon from '../FooterIcon';

const Sender = ({senderName, date}) => {
  return (
    <View style={styles.senderContainer}>
      <Text style={[styles.senderName, globalStyles.COMMON_STYLES.text]}>
        {senderName}
      </Text>
      <Text style={[styles.senderDate, globalStyles.COMMON_STYLES.text]}>
        {date}
      </Text>
    </View>
  );
};

Sender.propTypes = {
  senderName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Sender;
