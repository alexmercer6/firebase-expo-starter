import { FirestoreTimestamp } from '@/types/sharedTypes';

export const formatFirestoreTimestamp = (
  timestamp: FirestoreTimestamp
): string => {
  return timestamp.toDate().toLocaleString();
};
