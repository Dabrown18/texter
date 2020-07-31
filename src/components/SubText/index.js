import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {styles} from './styles';

const SubText = ({messagePreview}) => {
  return (
    <Text style={styles.previewStyling}>
      {messagePreview}
    </Text>
  );
};

SubText.propTypes = {
  messagePreview: PropTypes.string.isRequired
};

export default SubText;
