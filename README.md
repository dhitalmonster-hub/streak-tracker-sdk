# streak-tracker-sdk

TypeScript SDK for on-chain streak tracking on the Stacks blockchain — record check-ins, query streaks, leaderboards.

## Install

```bash
npm install streak-tracker-sdk
```

## Usage

```ts
import { buildReadOnlyUrl, parseContractId } from 'streak-tracker-sdk';

const contract = parseContractId('SP20Z3WPE6PVN1B8APDQNDH5BR1AJNMR25QPCSGFT.streak-tracker');
if (contract) {
  const url = buildReadOnlyUrl({ contract, functionName: 'get-streak' });
  console.log(url);
}
```

## What's inside

- `constants` — network endpoints, project-specific defaults
- `utils` — address/contract-name validation, parsing, formatting, STX conversion
- `contract` — read-only call URL helpers
- `types` — `Streak` and related shapes

## Scripts

```bash
npm test           # vitest run
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # tsup → dist/
```

## License

MIT
