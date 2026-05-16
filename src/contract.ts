import { NETWORKS, type NetworkName } from './constants';
import { formatContractId, isValidContractName, isValidStacksAddress } from './utils';
import type { ContractIdentifier } from './types';

export interface ReadOnlyCallArgs {
  contract: ContractIdentifier;
  functionName: string;
  network?: NetworkName;
  sender?: string;
}

export function buildReadOnlyUrl(args: ReadOnlyCallArgs): string {
  const { contract, functionName, network = 'mainnet' } = args;
  if (!isValidStacksAddress(contract.address)) {
    throw new Error(`Invalid contract address: ${contract.address}`);
  }
  if (!isValidContractName(contract.name)) {
    throw new Error(`Invalid contract name: ${contract.name}`);
  }
  const base = NETWORKS[network];
  return `${base}/v2/contracts/call-read/${contract.address}/${contract.name}/${functionName}`;
}

export function describeContract(c: ContractIdentifier): string {
  return `Stacks contract ${formatContractId(c.address, c.name)}`;
}
