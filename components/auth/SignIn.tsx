import { Text, TextInput, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { View } from '../Themed';
import React, { useState } from 'react';
import { loginUser } from '@/firebase-functions/authentication';
import Colors from '@/constants/Colors';
import { Link, usePathname } from 'expo-router';

export function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const currentRoute = usePathname();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.inputContainer}>
        <Text variant="labelSmall">E-MAIL</Text>
        <TextInput
          style={styles.input}
          inputMode="email"
          placeholder="Enter your email address"
          onChangeText={(value) => setEmail(value)}
          autoCapitalize="none"
        />
        <Text variant="labelSmall">PASSWORD</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter your password"
          onChangeText={(value) => setPassword(value)}
          autoCapitalize="none"
        />

        {/* TODO: Set up password reset */}
        <Link href="/">
          <Text>Forgot your password?</Text>
        </Link>
      </View>
      <View style={{ alignSelf: 'center' }}>
        <Link href="/register">
          <Text variant="bodyMedium">Don't have an account? Click here!</Text>
        </Link>
      </View>

      <Button
        style={{ marginVertical: 20, paddingVertical: 5, borderRadius: 30 }}
        mode="contained"
        onPress={() => loginUser(email, password, currentRoute)}
        accessibilityLabel="Login button"
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
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.light.text,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  forgotPassword: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
});
