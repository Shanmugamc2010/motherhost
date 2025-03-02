import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./DomainScreenStyles";
import { DomainData } from "./DomainScreenData";

const DOMAIN_OPTIONS = [
  {
    id: "1",
    title: "Register a New Domain",
    icon: "globe",
  },
  {
    id: "2",
    title: "Transfer your domain from another register",
    icon: "exchange-alt",
  },
  {
    id: "3",
    title: "I will use my existing domain & update my name servers",
    icon: "user",
  },
];

const DomainScreen = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderDomainOption = ({ item }) => (
    <TouchableOpacity style={styles.domainCard} onPress={() => toggleExpand(item.id)}>
      <View style={styles.domainInfo}>
        <Icon name={item.icon} size={24} color="#007AFF" style={styles.icon} />
        <Text style={styles.domainText}>{item.title}</Text>
      </View>
      <Icon
        name={expandedId === item.id ? "chevron-up" : "chevron-down"}
        size={16}
        color="#555"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{DomainData.DOMAIN}</Text>
        <TouchableOpacity>
          <Icon name="shopping-cart" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Find your perfect Domains</Text>

      {/* Domain Options */}
      <FlatList
        data={DOMAIN_OPTIONS}
        renderItem={renderDomainOption}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Offer Card */}
      <View style={styles.offerCard}>
        <View style={styles.offerTag}>
          <Text style={styles.offerText}>OFFER</Text>
        </View>
        <Text style={styles.offerTitle}>Special Offer for you</Text>
        <Text style={styles.offerDiscount}>Domain 50% Off</Text>
        <Text style={styles.offerCode}>Code : MOTHERHOST25</Text>
        <Text style={styles.offerValidity}>* Valid 20th December</Text>
        <Text style={styles.offerConditions}>* Conditions apply</Text>
      </View>
    </View>
  );
};

export default DomainScreen;
