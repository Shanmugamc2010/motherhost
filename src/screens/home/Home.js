import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors, AppFonts } from "../../themes/AppThemes";
import Icon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeData } from "./HomeData";
import { MHRoundedTextInput } from "../../components/MHRoundedTextInput";
import { DomainCards } from "./homeMicroComponents/DomainCards";
import { HomeTitleText } from "./homeMicroComponents/HomeTitleText";
import { ProductAndServicesCards } from "./homeMicroComponents/ProductAndServicesCards";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/slices/AuthSlice";

const HomeScreenn = () => {
  const token = useSelector(selectToken);
  useEffect(() => {
    console.log('==> step 8', token); //Might multiple time
  },[token])
  const header = () => {
    return (
      <View style={styles.headerView}>
        <View style={styles.menuViewStyle}>
          <Image
            style={styles.logoImaageStyle}
            resizeMode="contain"
            source={require("./../../images/MotherhostHeaderLogo.png")}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            color={AppColors.Primary}
            size={22}
            style={styles.iconStyle}
            name="wallet"
            solid
          />
          <Ionicons
            color={AppColors.Primary}
            size={22}
            style={styles.iconStyle}
            name="notifications-outline"
            solid
          />
          <TouchableOpacity style={styles.cartButtonViewStyle}>
            <Icon
              color={AppColors.White}
              style={styles.cartIconStyle}
              size={12}
              name="shopping-bag"
              solid
            >
              <Text style={styles.cartTextStyle}>{HomeData.CART}</Text>
            </Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const searchHeader = () => {
    return <View style={styles.searchHeaderView}>
        <Text style={styles.findYourTxtStyle}>{HomeData.FIND_UR_PERFECT}</Text>
        <Text style={styles.domainStyle}>{HomeData.DOMAIN_AND}
            <Text style={[styles.domainStyle, styles.hosting]}>{HomeData.HOSTING}</Text>
        </Text>
        <MHRoundedTextInput placeholder={HomeData.SEARCH_FIELD_PLACEHOLDER} />
    </View>
}
  const domainPriceList = () => {
        return <View style={styles.domainViewStyle}>
            <FlatList
        data={['.in', '.com', '.net','.in', '.com', '.net']}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <DomainCards title={item}/>
        )}
      />
        </View>
  }
  const productAndServices = () => {
    return <View style={styles.prductAndServicesStyle}> 
        <HomeTitleText title={HomeData.MY_PRCDUCT_AND_SERVICES} />
        <ProductAndServicesCards title={token} />
        <ProductAndServicesCards title={'3 Tickets'} />

    </View>
}
  return <SafeAreaView style={styles.container}>
    {header()}
    {searchHeader()}
    {domainPriceList()}
    {productAndServices()}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
  },
  headerView: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: 'center',
    padding: 10,
    backgroundColor: AppColors.Secoundary,
    height: 80,
  },
  menuViewStyle:{
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImaageStyle:{ width: 100, height: 50, marginLeft: 8 },
  cartButtonViewStyle: {
    backgroundColor: AppColors.Event,
    marginLeft: 8,
    height: 30,
    width:60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconStyle:{
    backgroundColor: AppColors.Secoundary, marginLeft: 8
  },    
  cartIconStyle: {
    color: AppColors.White
   },
  cartTextStyle: {
   color: AppColors.White,
   marginLeft: 8,
   fontSize: 12,
   fontWeight: '800',
   margin: 5
  },
  searchHeaderView: {
    padding: 10,
    backgroundColor: AppColors.Secoundary
  },
  findYourTxtStyle: {
        fontSize: 24,
        color: AppColors.Primary,
        fontFamily: AppFonts.Light,
        fontWeight: '300',
        marginBottom: 8
  },
  domainStyle: {
    fontSize: 28,
    color: AppColors.Primary,
    fontFamily: AppFonts.Light,
    fontWeight: '700'
},
hosting: {
    color: AppColors.Event,
},
domainViewStyle:{
    flexDirection: 'row',
    backgroundColor: AppColors.Secoundary,
    paddingBottom: 10
},
prductAndServicesStyle:{
  padding: 10
} 
});
export default HomeScreenn;
