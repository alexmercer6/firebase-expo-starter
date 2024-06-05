import { router, usePathname } from 'expo-router';
import { firebase } from '@react-native-firebase/auth';
import { useRoute } from '@react-navigation/native';

export const loginUser = async (
  email: string,
  password: string,
  currentRoute: ReturnType<typeof usePathname>
) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      'message' in error
    ) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Incorrect email or password.');
    }
  }
};
