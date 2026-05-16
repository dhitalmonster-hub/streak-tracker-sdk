import { MICROSTX_PER_STX } from './constants';
import type { ContractIdentifier } from './types';

const STACKS_ADDRESS_RE = /^S[PT][0-9A-HJKMNP-Z]{38,40}$/;
const CONTRACT_NAME_RE = /^[a-zA-Z][a-zA-Z0-9\-]{0,127}$/;

export function microStxToStx(usx: number): number {
  return usx / MICROSTX_PER_STX;
}

export function stxToMicroStx(stx: number): number {
  return Math.round(stx * MICROSTX_PER_STX);
}

export function isValidStacksAddress(addr: string): boolean {
  if (typeof addr !== 'string') return false;
  return STACKS_ADDRESS_RE.test(addr);
}

export function isValidContractName(name: string): boolean {
  if (typeof name !== 'string') return false;
  return CONTRACT_NAME_RE.test(name);
}

export function parseContractId(id: string): ContractIdentifier | null {
  const parts = id.split('.');
  if (parts.length !== 2) return null;
  const [address, name] = parts;
  if (!isValidStacksAddress(address) || !isValidContractName(name)) return null;
  return { address, name };
}

export function formatContractId(address: string, name: string): string {
  return `${address}.${name}`;
}

export function truncateAddress(addr: string, prefix = 4, suffix = 4): string {
  if (!addr || addr.length <= prefix + suffix + 3) return addr;
  return `${addr.slice(0, prefix)}...${addr.slice(-suffix)}`;
}
