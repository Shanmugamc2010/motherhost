import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './SidebarStyles';
import menuItems from './SidebarData';

const Sidebar = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Ramnath Krishnamoorthy</Text>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(item.screen)}>
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Signout</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.blueLine} />
    </View>
  );
};

export default Sidebar;