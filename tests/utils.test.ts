import { describe, it, expect } from 'vitest';
import {
  microStxToStx,
  stxToMicroStx,
  isValidStacksAddress,
  isValidContractName,
  parseContractId,
  formatContractId,
  truncateAddress,
} from '../src/utils';

describe('microStxToStx / stxToMicroStx', () => {
  it('converts micro to STX', () => {
    expect(microStxToStx(1_000_000)).toBe(1);
    expect(microStxToStx(500_000)).toBe(0.5);
  });
  it('round-trips', () => {
    expect(stxToMicroStx(microStxToStx(1_234_567))).toBe(1_234_567);
  });
});

describe('isValidStacksAddress', () => {
  it('accepts mainnet SP addresses', () => {
    expect(isValidStacksAddress('SP20Z3WPE6PVN1B8APDQNDH5BR1AJNMR25QPCSGFT')).toBe(true);
  });
  it('rejects garbage', () => {
    expect(isValidStacksAddress('')).toBe(false);
    expect(isValidStacksAddress('not-an-address')).toBe(false);
  });
});

describe('isValidContractName', () => {
  it('accepts standard names', () => {
    expect(isValidContractName('streak-tracker')).toBe(true);
    expect(isValidContractName('counter1')).toBe(true);
  });
  it('rejects empty or leading digit', () => {
    expect(isValidContractName('')).toBe(false);
    expect(isValidContractName('1bad')).toBe(false);
  });
});

describe('parseContractId / formatContractId', () => {
  it('parses valid id', () => {
    const got = parseContractId('SP20Z3WPE6PVN1B8APDQNDH5BR1AJNMR25QPCSGFT.streak-tracker');
    expect(got?.name).toBe('streak-tracker');
  });
  it('returns null for malformed', () => {
    expect(parseContractId('garbage')).toBeNull();
  });
  it('formats round-trip', () => {
    const id = formatContractId('SP20Z3WPE6PVN1B8APDQNDH5BR1AJNMR25QPCSGFT', 'x');
    expect(id).toContain('.x');
  });
});

describe('truncateAddress', () => {
  it('truncates long addresses', () => {
    const addr = 'SP20Z3WPE6PVN1B8APDQNDH5BR1AJNMR25QPCSGFT';
    const r = truncateAddress(addr);
    expect(r).toBe(`${addr.slice(0, 4)}...${addr.slice(-4)}`);
  });
  it('returns short address as-is', () => {
    expect(truncateAddress('short')).toBe('short');
  });
});
