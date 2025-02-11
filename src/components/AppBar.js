import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AppColors} from '../themes/AppThemes';
import {SafeAreaView} from 'react-native-safe-area-context';

export const AppBar = () => {
  return (
    <>
      <SafeAreaView edges={['top']}/>
      <View style={styles.container}>
        <Image
          style={styles.imgLogoStyle}
          source={require('../images/MotherhostHeaderLogo.png')}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: AppColors.Secoundary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogoStyle: {
    width: 150,
    height: 40,
    margin: 12,
  },
});
