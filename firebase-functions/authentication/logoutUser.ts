import { clearSecureStore } from '@/utils/clearSecureStore';
import { firebase } from '@react-native-firebase/auth';

export const logoutUser = async () => {
  await clearSecureStore();
  firebase.auth().signOut();
};
