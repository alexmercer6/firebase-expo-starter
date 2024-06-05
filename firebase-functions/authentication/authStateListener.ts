import { router, usePathname } from 'expo-router';
import { firebase } from '@react-native-firebase/auth';
import { Platform } from 'react-native';

export const authStateListener = (
  setIsLoading: (isLoading: boolean) => void
  // currentRoute: ReturnType<typeof usePathname>
) => {
  firebase.auth().onAuthStateChanged((user) => {
    setIsLoading(false);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;

      if (Platform.OS === 'ios') {
        setTimeout(() => {
          router.replace('/(tabs)/');
          // }
        }, 1);
        return;
      } else {
        setImmediate(() => {
          router.replace('/(tabs)/');
          // }
        });
        return;
      }

      // ...
    } else {
      // User is signed out
      // ...
      return router.replace('/');
    }
  });
};
