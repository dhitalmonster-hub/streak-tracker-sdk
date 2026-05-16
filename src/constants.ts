export const STACKS_MAINNET = 'https://api.mainnet.hiro.so';
export const STACKS_TESTNET = 'https://api.testnet.hiro.so';

export const DEFAULT_FEE_USTX = 5_000;
export const MICROSTX_PER_STX = 1_000_000;

export const CLARITY_VERSION = 4;

export const SECONDS_PER_DAY = 86_400;
export const MAX_STREAK_LENGTH = 365 * 5;
export const LEADERBOARD_TOP_N = 25;

export const NETWORKS = {
  mainnet: STACKS_MAINNET,
  testnet: STACKS_TESTNET,
} as const;

export type NetworkName = keyof typeof NETWORKS;
