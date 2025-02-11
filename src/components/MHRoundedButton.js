import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {AppColors} from '../themes/AppThemes';

export const MHRoundedButton = props => {
  const {buttonTitle} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Text
      style={styles.buttonContainer}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.Primary,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonContainer: {
        color: AppColors.White,
        fontSize: 14,
      },
});
