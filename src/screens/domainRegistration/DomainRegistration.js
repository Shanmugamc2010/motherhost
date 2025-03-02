import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
import styles from "./DomainRegistrationStyles";
import { DomainRegData } from "./DomainRegistrationData";

const DomainRegistrationScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [nameServer1, setNameServer1] = useState("Name Server 1");
  const [nameServer2, setNameServer2] = useState("Name Server 2");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
         {/*  <Ionicons name="arrow-back" style={styles.backIcon} /> */}
        <Text style={styles.title}>{DomainRegData.DOMAIN_REG}</Text>
      </View>
      <View style={styles.secondContainer}>
      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.domainText}>{DomainRegData.SITE}</Text>
        <View style={styles.row}>
          <Text style={styles.eventColor}>{DomainRegData.DOMAIN_REG}</Text>
          <Text style={styles.activeBadge}>{DomainRegData.ACTIVE}</Text>
        </View>

        {/* Order & Expiry Dates */}
        <View style={styles.dateRow}>
          <View>
          <Image
        source={{ uri: 'https://example.com/image.jpg' }}
        accessibilityLabel="Description of the image"
      />
            <Text style={styles.label}>{DomainRegData.ORDER_DATE}</Text>
            <Text style={styles.value}>25 Aug 2024</Text>
          </View>
          <View>
          <Image
        source={{ uri: 'https://example.com/image.jpg' }}
        accessibilityLabel="Description of the image"
      />
            <Text style={styles.label}>{DomainRegData.EXPIRY_DATE}</Text>
            <Text style={styles.value}>25 Aug 2025</Text>
          </View>
        </View>

        {/* Name Servers */}
        <View style={styles.nameServers}>
          <Text style={styles.domainText}>{DomainRegData.NAME_SERVERS}</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
          <FontAwesome name="pencil" style={styles.editIcon} />
          </TouchableOpacity>
          <View style={styles.servers}>
          <Text style={styles.label}>Name Server 1</Text>
          <Text style={styles.value}>lnx1.motherhost.com</Text>
          </View>
          <View style={styles.servers}>
          <Text style={styles.label}>Name Server 2</Text>
          <Text style={styles.value}>lnx1.motherhost.com</Text>
          </View>
          </View>

        {/* Pricing */}
        <View style={styles.taxRate}>
        <Text style={styles.label}>{DomainRegData.TAX_RATE}</Text>
        <View style={styles.validity}>
        <Text style={styles.value}>{DomainRegData.VALIDITY} </Text>
        <Text style={styles.value}>{DomainRegData.AMOUNT}</Text>
        </View>
        </View>       
        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{DomainRegData.RENEW}</Text>
        </TouchableOpacity>
      </View>
      </View>
            {/* Bottom Sheet Modal */}
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} style={styles.bottomModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{DomainRegData.NAME_SERVERS}</Text>

          <TextInput
            style={styles.modalInput}
            placeholder="Name Server 1"
            value={nameServer1}
            onChangeText={setNameServer1}
          />

          <TextInput
            style={styles.modalInput}
            placeholder="Name Server 2"
            value={nameServer2}
            onChangeText={setNameServer2}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.updateText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default DomainRegistrationScreen;
