import React from 'react';
import { StyleSheet,Text, View } from "react-native"
import { AppColors } from "../../../themes/AppThemes"

export const HomeTitleText = (props) => {
    return <Text style={styles.homeTitleTextStyle}>{props.title}</Text>
}

const styles = StyleSheet.create({
    homeTitleTextStyle: {
        color: AppColors.Text,
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10
    }
})