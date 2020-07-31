import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../../util/globalStyles';
import {Text} from 'react-native';
import {styles} from './styles';

const Title = ({title}) => {
  return (
    <Text style={[
      styles.titleStyle,
      globalStyles.COMMON_STYLES.text
    ]}>
      {title}
    </Text>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
