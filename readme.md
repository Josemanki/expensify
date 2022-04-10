# Expensify

Expense tracker built with React, Redux and Firebase. The application is being tested using Jest and Enzyme.

## Features

The app uses Firebase authentication in order to assign an account to a certain email, which automatically logs in and can add expenses straight away. The whole expense tracking is built over a realtime database powered by Firebase too.

## How to run locally

- Clone the repository to your local computer
- Set up a Firebase project at [Firebase](https://firebase.google.com/) and get your environment variables from it.
- Change `.env.template` file and fill it with the data, rename it to `.env.development`.
- Optionally set up a separate project in Firebase with new credentials for testing, the env file with follow the same format, but called `.env.test`.
- Run `npm run dev-server` in your console and test away!
