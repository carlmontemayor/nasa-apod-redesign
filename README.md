# NASA Astronomy Picture of the Day

![CI/CD Badge](https://github.com/carlmontemayor/nasa-apod-redesign/actions/workflows/node.js.yml/badge.svg)

This is a new redesign of the existing APOD application that NASA owns. This is for accessibility and to give the current website a cool new look.

## Technologies
- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Continuous Integration + Continuous Deployment Technologies
- Vercel for deployments
- Github Actions for integration
- Git pre-commit and pre-push with Husky

### Husky Demo (for pre-commits and pre-pushes)
`Husky` is a cool tool. It formats and lints your code before every commit and push.
![Husky Demo](https://github.com/carlmontemayor/nasa-apod-redesign/docs/husky-demo.gif)

## Test Coverage
Here is a picture of the current test coverage (should be added as a badge, but I think a screenshot should suffice).
![Test Coverage snapshot](https://github.com/carlmontemayor/nasa-apod-redesign/docs/test-coverage.png)

Here is another picture of the tests passing.
![Tests Passing](https://github.com/carlmontemayor/nasa-apod-redesign/docs/tests-passing.png)

## Testing Technologies
- Jest
- React Testing Library

## Running Locally
Before running, please make sure you have `node` installed (v14 and above).

First, clone the repo.
```bash
git clone https://github.com/carlmontemayor/nasa-apod-redesign.git
```

Move into the aproppriate directory
```bash
cd nasa-apod-redesign
```

Then, install the required packages.
```bash
npm install 
```

Lastly, run it locally with the following command.
```bash
npm run dev
```
