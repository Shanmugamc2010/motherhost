import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppColors } from "../../../themes/AppThemes";
import Icon from "react-native-vector-icons/Entypo";
export const ProductAndServicesCards = (props) => {
  const { title } = props;
  return (
    <View style={styles.productServicesConatainer}>
        <Text style={styles.ptitleTextStyle}>{title}</Text>
        <Icon name="chevron-small-right" size={22} color={AppColors.Gray}  />
    </View>
  );
};

const styles = StyleSheet.create({
  productServicesConatainer: {
    flexDirection: 'row',
    backgroundColor: AppColors.White,
    padding: 15,
    borderRadius: 12,
    shadowColor: AppColors.Gray,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderColor: AppColors.LightGray,
    borderWidth: 0.5,
    marginBottom: 10
  },
  ptitleTextStyle: {
    flex:1,
    color: AppColors.Event,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left'
  }
});
