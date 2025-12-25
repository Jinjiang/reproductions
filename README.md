# Component Library

A cross-framework component library demonstrating identical Button components implemented in both Vue 3 and React, with shared utilities, comprehensive tests, and development tooling.

## 📁 Project Structure

```
src/
├── MyVueComponent.vue          # Vue 3 button component
├── MyReactComponent.tsx         # React button component
├── utils.ts                     # Shared utility functions
├── index.ts                     # Public API exports
├── MyVueComponent.spec.ts       # Vue component tests
├── MyReactComponent.spec.tsx    # React component tests
└── index.spec.ts                # Utility function tests

examples/
├── index.html                   # Example page
├── main.ts                      # Vue & React mount points
└── MyReactExamples.tsx          # React example wrapper

scripts/
└── compile.js                   # Build and watch script
```

## 🎨 Components

### MyVueComponent

A Vue 3 button component with the following features:

- **Props:**
  - `label` (default: "Click me") - Button text
  - `variant` ("primary" | "secondary", default: "primary") - Button style
  - `disabled` (default: false) - Disable the button

- **Behavior:**
  - Tracks click count with internal state
  - Displays click counter when > 0
  - Supports both variants with distinct styling
  - Disabled state prevents clicks

**Usage:**
```vue
<MyVueComponent label="Submit" variant="primary" />
```

### MyReactComponent

A React button component with identical behavior to the Vue version:

- **Props:**
  - `label` (default: "Click me") - Button text
  - `variant` ("primary" | "secondary", default: "primary") - Button style
  - `disabled` (default: false) - Disable the button

- **Behavior:**
  - Tracks click count using `useState` hook
  - Displays click counter when > 0
  - Supports both variants with distinct styling
  - Disabled state prevents clicks

**Usage:**
```tsx
import MyReactComponent from './MyReactComponent';

<MyReactComponent label="Submit" variant="primary" />
```

## 🛠️ Shared Utilities

The `utils.ts` file provides shared functions used by both components:

```typescript
// Increment counter value
incrementCounter(current: number): number

// Reset counter to zero
resetCounter(): number

// Format button label with optional prefix
formatButtonLabel(label: string, prefix?: string): string

// Validate button variant
isValidVariant(variant: string): boolean
```

## 📦 Installation

```bash
pnpm install
```

## 🚀 Available Scripts

### Development

Watch mode compilation for TypeScript/TSX and Vue files:

```bash
pnpm dev
```

Automatically compiles changes in `src/` and `examples/` directories.

### Build

Compile source code and generate TypeScript declaration files:

```bash
pnpm build
```

Outputs to `dist/` directory with:
- Compiled JavaScript files
- TypeScript declaration files (`.d.ts`)

### Test

Run tests using Vitest:

```bash
pnpm test
```

Tests include:
- Utility function tests
- Vue component tests
- React component tests
- Click counter behavior
- Disabled state validation
- Variant prop handling

### Preview

View the example page in a browser:

```bash
pnpm preview
```

Opens `examples/index.html` showing:
- Vue button component demo
- React button component demo
- Feature highlights
- Interactive examples

## 🧪 Testing

This project uses **Vitest** for unit testing with the following test coverage:

- **Utility Tests** (`src/index.spec.ts`): 4 test suites
- **Vue Component Tests** (`src/MyVueComponent.spec.ts`): 7 test suites
- **React Component Tests** (`src/MyReactComponent.spec.tsx`): 7 test suites

Run tests with:
```bash
pnpm test
```

## 📝 Development Workflow

1. **Add new features:**
   - Edit components in `src/`
   - Update utilities if needed
   - Add tests alongside code

2. **Watch changes:**
   ```bash
   pnpm dev
   ```

3. **Verify tests pass:**
   ```bash
   pnpm test
   ```

4. **Build for production:**
   ```bash
   pnpm build
   ```

5. **Preview examples:**
   ```bash
   pnpm preview
   ```

## 🔧 Configuration Files

- **tsconfig.json** - TypeScript compiler options
- **vitest.config.ts** - Vitest test runner configuration
- **vite.config.ts** - Vite preview server configuration
- **scripts/compile.js** - Custom compilation script for Vue and TypeScript

## 📚 Technology Stack

- **Vue 3** - Component framework (JavaScript)
- **React 18** - Component framework (JavaScript)
- **TypeScript** - Type safety
- **Vitest** - Unit testing
- **Vite** - Build tool and preview server
- **tsx** - TypeScript executor
- **vue-simple-compiler** - Vue template compilation
- **@vitejs/plugin-vue** - Vue 3 Vite plugin
- **@vitejs/plugin-react** - React Vite plugin

## 🎯 Key Features

✨ **Framework Agnostic Design** - Same component logic in Vue and React

🧪 **Comprehensive Tests** - 18+ test cases covering all functionality

📦 **TypeScript First** - Full type safety with declaration files

🎨 **Consistent Styling** - Identical visual appearance across frameworks

🔄 **Shared Utilities** - Reusable logic functions

📖 **Developer Friendly** - Clear documentation and examples

🚀 **Modern Tooling** - Vitest, Vite, and TypeScript

## 📄 License

MIT
