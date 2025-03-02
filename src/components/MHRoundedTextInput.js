import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {AppColors, AppFonts} from '../themes/AppThemes';

export const MHRoundedTextInput = props => {
  const {title, placeholder} = props;
  return (
    <View styles={styles.container}>
      <Text style={styles.titleTxtStyle}>{title}</Text>
      <TextInput style={styles.textInputStyle}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  titleTxtStyle: {
    fontSize: 14,
    fontFamily: AppFonts.SemiBold,
    color: AppColors.Text,
    fontWeight: '800',
  },
  textInputStyle: {
    margin: 10,
    fontSize: 14,
    backgroundColor: AppColors.White,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    borderColor: AppColors.Event,
    borderWidth: 0.5,
    paddingHorizontal: 25,
    marginBottom: 20,
    // Shadow for iOS
    shadowColor: AppColors.Event, // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Offset for shadow
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 4, // Blur radius

    // Elevation for Android
    elevation: 5, // Creates the shadow effect on Android
  },
});
