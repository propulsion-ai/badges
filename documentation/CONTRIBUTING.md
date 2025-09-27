# Contributing to Badge Generator

We love your input! We want to make contributing to Badge Generator as easy and transparent as possible.

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Setting Up Development Environment

```bash
# Clone your fork
git clone https://github.com/your-username/badge-generator.git
cd badge-generator

# Install dependencies
npm install

# Run tests
npm test

# Run development server
npm run dev

# Build the project
npm run build
```

## Project Structure

```
badge-generator/
├── src/
│   ├── components/    # React components
│   ├── utils/         # Utility functions
│   └── types/         # TypeScript type definitions
├── tests/             # Test files
├── examples/          # Usage examples
└── docs/              # Documentation
```

## Testing

We use Jest for testing. Please write tests for any new features or bug fixes.

```bash
npm test                # Run all tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Generate coverage report
```

## Code Style

- We use TypeScript for type safety
- Follow existing code patterns
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

## Commit Guidelines

We follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Maintenance tasks

Example:
```
feat: add ghost variant to Badge component
fix: correct color contrast calculation
docs: update README with new examples
```

## Pull Request Process

1. Update the README.md with details of changes to the interface
2. Update the documentation with any new features
3. The PR will be merged once you have approval from maintainers

## Any Questions?

Feel free to open an issue for discussion!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.