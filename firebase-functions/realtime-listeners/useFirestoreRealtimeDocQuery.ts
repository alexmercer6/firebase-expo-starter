import { useEffect, useState } from 'react';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export const useFirestoreRealtimeDocumentQuery = <
  T extends FirebaseFirestoreTypes.DocumentData & { id: string }
>(
  collectionPath: string,
  documentId: string
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const docRef = firestore()
      .collection(collectionPath)
      .doc(documentId) as FirebaseFirestoreTypes.DocumentReference<T>;

    const unsubscribe = docRef.onSnapshot(
      (doc) => {
        if (doc.exists) {
          setData({ id: doc.id, ...doc.data() } as T);
        } else {
          setData(null);
        }
        setIsLoading(false);
      },
      (err) => {
        setError(err);
        setIsLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [collectionPath, documentId]);

  return { data, error, isLoading };
};
