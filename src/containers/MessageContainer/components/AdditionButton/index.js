import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const AdditionButton = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

export default AdditionButton;
