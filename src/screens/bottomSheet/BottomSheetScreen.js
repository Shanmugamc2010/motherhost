import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import styles from './BottomSheetStyles';
import { BottomSheetData } from './BottomSheetData';

const BottomSheet = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Button to Open Bottom Sheet */}
      <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>{BottomSheetData.BOTTOM_SHEET}</Text>
      </TouchableOpacity>

      {/* Bottom Sheet Modal */}
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => setIsVisible(false)}
        style={styles.modal}
      >
        <View style={styles.sheetContent}>
          {/* Drag Handle */}
          <View style={styles.dragHandle} />
          
          {/* Menu Items */}
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>{BottomSheetData.INVOICE}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>{BottomSheetData.ABOUT_US}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>{BottomSheetData.CREATE_TICKET}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default BottomSheet;
