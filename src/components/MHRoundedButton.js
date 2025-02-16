import React from 'react';
import {StyleSheet, TouchableOpacity, Text,KeyboardAvoidingView, ScrollView, Platform,} from 'react-native';
import {AppColors} from '../themes/AppThemes';

export const MHRoundedButton = props => {
  const {buttonTitle, onPress} = props;
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
      style={styles.buttonContainer}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
    </ScrollView>
    </KeyboardAvoidingView>
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
