import React from 'react';
import { Button } from 'react-native';

function LoginScreen({ navigation }) {
    return (
      <Button>
        onPress={() => {
          title="Login"
          navigation.navigate('MapScreen');
        }}
        Go somewhere
      </Button>
    );
  }

export default LoginScreen;