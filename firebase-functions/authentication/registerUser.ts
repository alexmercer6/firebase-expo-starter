// import { auth } from '@/firebaseConfig';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { loginUser } from './loginUser';
import { firebase } from '@react-native-firebase/auth';
import { usePathname } from 'expo-router';

export const registerUser = async (
  email: string,
  password: string,
  currentRoute: ReturnType<typeof usePathname>
) => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    // Signed up
    const user = userCredential.user;
    await loginUser(email, password, currentRoute);
  } catch (error) {
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      'message' in error
    ) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }
};
