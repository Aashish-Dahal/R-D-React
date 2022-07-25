import React, {useState, useEffect} from 'react';

import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from './src/components/screens/AuthComponent';
import LoginScreen from './src/components/screens/LoginComponent';
import RegisterScreen from './src/components/screens/RegisterComponent';
import HomeScreen from './src/components/screens/HomeComponent';
import auth from '@react-native-firebase/auth';
import AddScreen from './src/components/screens/AddScreen';
import EditScreen from './src/components/screens/EditScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [note, setNote] = useState([]);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const Navigator = () => {
    if (!user) {
      return (
        <Stack.Navigator>
          <Stack.Group
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Auth" component={AuthScreen}></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen
              name="Register"
              component={RegisterScreen}></Stack.Screen>
          </Stack.Group>
        </Stack.Navigator>
      );
    }
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'My Notes',
          }}
          name="Home"
          component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          options={{
            title: 'Add Note',
          }}
          name="Add"
          component={AddScreen}></Stack.Screen>
        <Stack.Screen
          options={{
            title: 'Edit Note',
          }}
          name="Edit"
          component={EditScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
