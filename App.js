import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Importing all screens
import MapScreen from './screens/MapScreen';
import PostScreen from './screens/PostScreen';
import ProfileScreen from './screens/ProfileScreen';
import CameraPostScreen from './screens/CameraPostScreen';
import LoginScreen from './screens/LoginScreen';
//ProductScreens
import PaprikaProductScreen from './screens/PaprikaProductScreen';
import PaprikaProductTwoScreen from './screens/PaprikaProductTwoScreen';
import PalleProductScreen from './screens/PalleProductScreen';
import UlrikProductScreen from './screens/UlrikProductScreen';
import LarsProductScreen from './screens/LarsProductScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          // Define icons based on the route name
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Post food') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      
      <Tab.Screen name="Home" component={MapScreen} />
      <Tab.Screen name="Post food" component={CameraPostScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Other SCreens */}
        <Stack.Screen name="PostScreen" component={PostScreen} />
        <Stack.Screen name="PaprikaProductScreen" component={PaprikaProductScreen} />
        <Stack.Screen name="PaprikaProductTwoScreen" component={PaprikaProductTwoScreen} />
        <Stack.Screen name="PalleProductScreen" component={PalleProductScreen} />
        <Stack.Screen name="UlrikProductScreen" component={UlrikProductScreen} />
        <Stack.Screen name="LarsProductScreen" component={LarsProductScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
