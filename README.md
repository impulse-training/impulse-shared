# Impulse Shared

A shared package for Impulse applications containing common types, schemas, and utilities.

## Features

- TypeScript type definitions for Impulse data models
- Yup schemas for validation
- Shared utilities for context management

## Installation

Since this is a local package, you can install it in your projects using npm's local path feature:

```bash
npm install --save ../impulse-shared
```

Or add it to your package.json:

```json
"dependencies": {
  "impulse-shared": "file:../impulse-shared"
}
```

## Usage

```typescript
// Import types
import { UserContext, BehaviorContext, ActivityLog } from 'impulse-shared';

// Import schemas for validation
import { validateUserContext, behaviorSchema } from 'impulse-shared';

// Import utilities
import { getUserContext, updateBehaviorContext } from 'impulse-shared';
```

## Development

To build the package:

```bash
npm run build
```

This will compile the TypeScript code to JavaScript in the `dist` directory.
