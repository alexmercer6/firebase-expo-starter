import React, { useState } from 'react';
import { Text, TextInput, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { registerUser } from '@/firebase-functions/authentication/registerUser';
import { View } from '../Themed';
import { usePathname } from 'expo-router';

export function Register() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const currentRoute = usePathname();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await registerUser(email, password, currentRoute);
      alert('Registration successful!');
    } catch (error: any) {
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <Text variant="labelSmall">E-MAIL</Text>
        <TextInput
          style={styles.input}
          inputMode="email"
          placeholder="Enter Your Email"
          onChangeText={(value) => setEmail(value)}
        />
        <Text variant="labelSmall">PASSWORD</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter Your Password"
          onChangeText={(value) => setPassword(value)}
        />
        <Text variant="labelSmall">CONFIRM PASSWORD</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Confirm Your Password"
          onChangeText={(value) => setConfirmPassword(value)}
        />
      </View>
      <Button
        style={{ marginBottom: 20, paddingVertical: 5, borderRadius: 30 }}
        mode="contained"
        onPress={handleRegister}
      >
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  container: {
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'transparent',
  },
});
