import * as SecureStore from 'expo-secure-store';

export const clearSecureStore = async () => {
  await SecureStore.deleteItemAsync('profileId');
  await SecureStore.deleteItemAsync('pin');
};
