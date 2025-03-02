import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"; // Using react-native-vector-icons
import styles from "./HostingScreenStyles";
import { HostingData } from "./HostingData";

const HostingScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>{HostingData.HOSTING}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.domain}>www.software-tech.com</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Hosting</Text>
          <View style={styles.activeBadge}>
            <Text style={styles.activeText}>Active</Text>
          </View>
        </View>

        {/* Order & Expiry Date */}
        <View style={styles.dateContainer}>
          <View style={styles.dateBox}>
            <Icon name="clock" size={14} color="#aaa" />
            <Text style={styles.dateText}>Order Date</Text>
            <Text style={styles.dateValue}>25 Aug 2024</Text>
          </View>
          <View style={styles.dateBox}>
            <Icon name="clock" size={14} color="#aaa" />
            <Text style={styles.dateText}>Expiry Date</Text>
            <Text style={styles.dateValue}>25 Aug 2025</Text>
          </View>
        </View>

        {/* Usage Section */}
        <Text style={styles.sectionTitle}>Usage</Text>
        <View style={styles.usageContainer}>
          <Text style={styles.usageLabel}>Disk</Text>
          <Text style={styles.usageText}>20 GB of 50 GB Left</Text>
          <View style={styles.progressBar}>
            <View style={styles.diskUsage}></View>
          </View>
        </View>

        <View style={styles.usageContainer}>
          <Text style={styles.usageLabel}>Band Width</Text>
          <Text style={styles.usageText}>20 GB of 50 GB Left</Text>
          <View style={styles.progressBar}>
            <View style={styles.bandwidthUsage}></View>
          </View>
        </View>

        {/* Auto Renew Info */}
        <Text style={styles.autoRenewText}>
          Auto renew every month at midnight till 25 Aug
        </Text>

        {/* Legend */}
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={styles.greenDot} />
            <Text>Over 75%</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={styles.yellowDot} />
            <Text>Above 75%</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={styles.redDot} />
            <Text>Storage Full</Text>
          </View>
        </View>

        {/* Login Control Panel */}
        <TouchableOpacity style={styles.loginButton}>
          <Icon name="external-link-alt" size={14} color="#0057D9" />
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Login to control Panel</Text>
            <Text style={styles.loginSubText}>It will go to external link</Text>
          </View>
        </TouchableOpacity>

        {/* Renew Button */}
        <TouchableOpacity style={styles.renewButton}>
          <Text style={styles.renewText}>Renew your product</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HostingScreen;
