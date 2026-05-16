import { describe, it, expect } from 'vitest';
import {
  STACKS_MAINNET,
  STACKS_TESTNET,
  DEFAULT_FEE_USTX,
  MICROSTX_PER_STX,
  CLARITY_VERSION,
  NETWORKS,
} from '../src/constants';

describe('constants', () => {
  it('exposes the mainnet and testnet endpoints', () => {
    expect(STACKS_MAINNET).toMatch(/^https:\/\//);
    expect(STACKS_TESTNET).toMatch(/^https:\/\//);
  });
  it('uses sensible defaults', () => {
    expect(DEFAULT_FEE_USTX).toBeGreaterThan(0);
    expect(MICROSTX_PER_STX).toBe(1_000_000);
    expect(CLARITY_VERSION).toBe(4);
  });
  it('maps network names', () => {
    expect(NETWORKS.mainnet).toBe(STACKS_MAINNET);
    expect(NETWORKS.testnet).toBe(STACKS_TESTNET);
  });
});
