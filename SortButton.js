import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SortButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.sortButton} onPress={onPress}>
      <Text style={styles.sortButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sortButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  sortButtonText: {
    fontWeight: 'bold',
  },
});

export default SortButton;