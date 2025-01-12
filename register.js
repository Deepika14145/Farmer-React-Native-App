// register.js
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function Register({ navigation }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleRegister = () => {
    const { firstName, lastName, mobile, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !mobile || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert('Success', 'Registration successful!');
    navigation.navigate('Login'); // Navigate back to Login
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.header}>Get started!</Text>

      <TextInput
        placeholder="First Name"
        style={styles.input}
        value={formData.firstName}
        onChangeText={(text) => handleInputChange('firstName', text)}
      />
      <TextInput
        placeholder="Last Name"
        style={styles.input}
        value={formData.lastName}
        onChangeText={(text) => handleInputChange('lastName', text)}
      />
      <TextInput
        placeholder="Mobile Number"
        style={styles.input}
        keyboardType="phone-pad"
        value={formData.mobile}
        onChangeText={(text) => handleInputChange('mobile', text)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(text) => handleInputChange('confirmPassword', text)}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Create an account</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#00C853',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
  },
  loginLink: {
    color: '#00C853',
    fontWeight: 'bold',
  },
});
