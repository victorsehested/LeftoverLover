import React from 'react';
import { Text } from 'react-native';
import Card from '../components/Card';
import { View } from 'react-native';

function ProfileScreen({ navigation }) {
    return (
      <View>
        <Text>ProfileScreen</Text>
        <Card title="My Card" expiryDate="12/24" />
      </View>
    );
  }

export default ProfileScreen;