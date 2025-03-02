import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppColors } from "../../../themes/AppThemes";

export const DomainCards = (props) => {
  const { title, price, strikePrice, isOfferLabel = false } = props;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.titleViewStyle}>
        <Text style={styles.titleTxtStyle}>{title}</Text>
      </View>
      <View style={styles.priceViewStyle}>
        <Text style={styles.strikePriceStyle}>799.0</Text>
        <Text style={styles.priceLabelTextStyle}>499.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 85,
    height: 100,
    backgroundColor: AppColors.White,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: AppColors.Event,
    margin: 10
  },
  titleViewStyle: {
    flex: 0.75,
    borderBottomColor: AppColors.Event,
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTxtStyle: {
    fontSize: 28,
    fontWeight: "700",
    color: AppColors.Primary,
    textAlign: "center",
  },
  priceViewStyle: {
    height: 30,
    padding: 8,
    borderBottomColor: AppColors.Event,
  },
  strikePriceStyle: {
    fontSize: 8,
    fontWeight: "600",
    color: AppColors.Primary,
    textAlign: "center",
  },
  priceLabelTextStyle: {
    fontSize: 14,
    fontWeight: "600",
    color: AppColors.Event,
    textAlign: "center",
  },
});
