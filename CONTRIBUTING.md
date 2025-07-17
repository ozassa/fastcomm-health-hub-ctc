# Contributing to FastComm Health Connect Hub

Thank you for your interest in contributing to FastComm Health Connect Hub! This document provides guidelines and information for contributors.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- npm 9.x or higher
- Git

### Local Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/fastcomm-health-hub-ctc.git
   cd fastcomm-health-hub-ctc
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env.local` file based on `.env.example`

5. Start development server:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branches

- `main`: Production-ready code
- `develop`: Development branch for integration
- `feature/*`: New features
- `bugfix/*`: Bug fixes
- `hotfix/*`: Critical production fixes

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/). Format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test changes
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `build`: Build system changes

Examples:
```
feat(auth): add OAuth2 authentication
fix(api): resolve CORS issue in production
docs(readme): update installation instructions
```

### Pull Request Process

1. Create a feature branch from `develop`
2. Make your changes
3. Add tests for new functionality
4. Update documentation if needed
5. Run tests and linting:
   ```bash
   npm run test:run
   npm run lint
   npm run type-check
   ```
6. Commit using conventional commits
7. Push to your fork
8. Create a Pull Request

### Code Style

- We use Prettier for code formatting
- ESLint for code quality
- TypeScript for type safety

Run formatters:
```bash
npm run format
npm run lint:fix
```

### Testing

- Write unit tests for new features
- Ensure all tests pass
- Maintain test coverage above 80%

```bash
npm run test:run
npm run test:coverage
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── __tests__/      # Component tests
├── pages/              # Page components
├── constants/          # Static data
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── utils/              # Helper functions
└── assets/             # Static assets
```

## Coding Guidelines

### React Components

- Use functional components with hooks
- Prefer TypeScript interfaces for props
- Follow the existing component patterns
- Use shadcn/ui components when possible

### State Management

- Use React hooks for local state
- Use TanStack Query for server state
- Prefer composition over inheritance

### Styling

- Use Tailwind CSS classes
- Follow the existing design system
- Ensure responsive design
- Test across browsers

### Performance

- Optimize images and assets
- Use lazy loading where appropriate
- Minimize bundle size
- Follow React performance best practices

## Security

- Never commit sensitive data
- Validate all user inputs
- Follow OWASP guidelines
- Use HTTPS in production
- Implement proper authentication

## Documentation

- Update README.md for significant changes
- Add JSDoc comments for complex functions
- Update API documentation
- Include examples in documentation

## Issue Reporting

When reporting issues:

1. Use the issue templates
2. Provide detailed reproduction steps
3. Include environment information
4. Add relevant logs or screenshots
5. Label appropriately

## Feature Requests

When requesting features:

1. Use the feature request template
2. Explain the use case
3. Provide mockups if helpful
4. Consider implementation complexity
5. Check for existing similar requests

## Release Process

1. Features are merged to `develop`
2. `develop` is merged to `main` for release
3. Semantic versioning is used
4. Releases are automated via GitHub Actions
5. Changelog is automatically generated

## Getting Help

- Check existing issues and documentation
- Ask questions in discussions
- Contact maintainers: @ozassa
- Email: faleconosco@ctctech.com.br

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be recognized in our README and release notes. Thank you for helping improve FastComm Health Connect Hub!