import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './register'; // Import the Register screen

// Login Component
function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in both email and password.');
      return;
    }

    try {
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);
      Alert.alert('Success', 'Login information saved!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save login information.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Top Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require('./assets/loginlogo.png')} 
          style={styles.illustration}
        />
      </View>

      {/* Login Section */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginHeader}>Login</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Icon name="email-outline" size={20} color="#999" />
          <TextInput
            placeholder="Email ID"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Icon name="lock-outline" size={20} color="#999" />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Or Login With */}
        <Text style={styles.orText}>Or, login with ...</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="facebook" size={24} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
        </View>

        {/* Register Link */}
        <Text style={styles.registerText}>
          New to the app?{' '}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

// Navigation Setup
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  illustration: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  loginContainer: {
    flex: 1,
  },
  loginHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#00C853',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#aaa',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    marginHorizontal: 10,
    padding: 10,
  },
  registerText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
  },
  registerLink: {
    color: '#00C853',
    fontWeight: 'bold',
  },
});
