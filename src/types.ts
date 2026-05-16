export interface ContractIdentifier {
  address: string;
  name: string;
}

export interface Streak {
  user: string;
  currentStreak: number;
  longestStreak: number;
  lastCheckInAt: number;
}

export interface TxOptions {
  fee?: number;
  nonce?: number;
  postConditions?: unknown[];
}
