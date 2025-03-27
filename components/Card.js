import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card({ title, expiryDate, imageUrl }) {
  return (
    <View style={styles.card}>
      {/* Left Icon */}
      <View style={styles.ImageContainer}>
        <Image 
        style={styles.Image}
        source={{ uri: imageUrl }}/>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.expiry}>Exp. {expiryDate}</Text>
      </View>

      {/* Right Arrow */}
      <Ionicons name="arrow-forward" size={20} color="#A0A0A0" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    paddingRight: 20,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
    Image: {
        width: 75,
        height: 75,
        borderRadius: 5,
    },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  expiry: {
    fontSize: 14,
    color: '#6B7280', // Gray color
  },
}); 