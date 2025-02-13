import React from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { services, myProductAndSeervicesData } from '../myProductAndServices/MyProductAndServicesData';
import { styles } from '../myProductAndServices/MyProductAndServicesStyles';

   
    const ServiceCard = ({ website, serviceType, status, orderDate, expiryDate, validity, price }) => {
    return (
        <View style={styles.card}>
      <Text style={styles.website}>{website}</Text>
      <View style={styles.row}>
        <Text style={styles.serviceType}>{serviceType}</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>

      {/* Order & Expiry Date Headers */}
      <View style={styles.dateHeaderRow}>
        <Text style={styles.dateHeader}>{myProductAndSeervicesData.ORDER_DATE}</Text>
        <Text style={styles.dateHeader}>{myProductAndSeervicesData.EXPIRY_DATE}</Text>
      </View>

      {/* Order & Expiry Dates */}
      <View style={styles.dateRow}>
        <Text style={styles.dateText}>{orderDate}</Text>
        <Text style={styles.dateText}>{expiryDate}</Text>
      </View>
      <View style={styles.bottomData}>
      <View style={styles.secDateHeaderRow}>
        <Text style={styles.dateHeader}>{myProductAndSeervicesData.TAX_RATE}</Text>
      </View>
      <View style={styles.secDateRow}>
        <Text style={styles.secDateText}>{validity}</Text>
        <Text style={styles.secDateText}>{price}</Text>
      </View>
      </View>
    </View>
    );
};

function ServiceScreen({ navigation }) {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{myProductAndSeervicesData.MY_PRODUCT_AND_SERVICES}</Text>
            </View>
            <View style={styles.headerSubtitle}>
                <Text >{myProductAndSeervicesData.ALL_SERVICES}</Text>
            </View>


            {/* Service List */}
            <FlatList
                data={services}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ServiceCard {...item} />}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

export default ServiceScreen;
