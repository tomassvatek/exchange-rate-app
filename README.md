# Exchange Rate App

The app main purpose is to display the latest currency exchange rates from the [Czech National Bank](https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt) and convert the amount from CZK to the selected currency. You can see the app live at [https://exchange-rate-app.vercel.app/](https://exchange-rate-app.vercel.app/).

## How to run the project

1. `yarn install`
2. `yarn dev`
3. `vercel dev` (The commmand requires Vercel CLI to be installed. You can install it with `yarn global add vercel`)
4. The app will be available at [http://localhost:5177](http://localhost:5177)

## Technologies & Libraries

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Query](https://react-query.tanstack.com/)
- [Styled Components](https://styled-components.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Babel](https://babeljs.io/)
- [Vercel Serverless Functions](https://vercel.com/docs/serverless-functions/introduction)

## Requirements

1. When the application starts, retrieve the latest currency exchange rates from the [Czech National Bank](https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt).
2. Parses the downloaded data and clearly displays it to the user in the UI.
3. Add a simple form, into which the customer can enter an amount in CZK and select a currency, and after submitting (clicking a button or in real-time) sees the amount entered in CZK converted into the selected currency.

## Future improvements

- Open combo box when clicking on the input
- Better error handling (log errors to Sentry or similar)
- Nice loading state
