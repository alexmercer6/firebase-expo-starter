import { useEffect, useState } from 'react';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export type QueryFn<T extends FirebaseFirestoreTypes.DocumentData> = (
  query: FirebaseFirestoreTypes.CollectionReference<T>
) => FirebaseFirestoreTypes.Query<T>;

export const useFirestoreRealtimeQuery = <
  T extends FirebaseFirestoreTypes.DocumentData
>(
  collectionPath: string,
  queryFn: QueryFn<T>
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = queryFn(
      firestore().collection(
        collectionPath
      ) as FirebaseFirestoreTypes.CollectionReference<T>
    ).onSnapshot(
      (snapshot) => {
        const documents = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as T)
        );
        setData(documents);
        setIsLoading(false);
      },
      (err) => {
        setError(err);
        setIsLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [collectionPath, queryFn]);

  return { data, error, isLoading };
};
