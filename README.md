![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![lang](https://img.shields.io/github/languages/top/imanmansour86/get-moving)
![repo size](https://img.shields.io/github/repo-size/imanmansour86/get-moving)
![last commit](https://img.shields.io/github/last-commit/imanmansour86/get-moving)

# Social-network-API

## Table of Contents

## Description

## Installation

- Go to the app's [repo](https://github.com/imanmansour86/get-moving) in github and clone the app
- Open the app in VS code, navigate to .env file, change the DB_USER and DB_PW based on current user configurations
- From terminal: navigate to app's directoty and run:

  ```md
  $ npm install
  ```

- From terminal: navigate to db folder in the app's directoty and run:

  ```md
  $ mysql -uroot - p
  ```

- Run the schema file:

  ```md
  source schema.sql
  ```

- From terminal: navigate to the app's directoty and run:

  ```md
  $ npm run seed
  ```

- To invoke the app from terminal, run:

  ```md
  $ npm start
  ```

## Usage

Below are some screenshots demonstrating testing the routes in Insomnia

GET routes

- Categroy

![Category]()

## Features

## Modals

![Model]()

## Tests

To test the functionality of the routes, open Insomnia, specifiy the method in the request and enter the URL to be tested: Sincd the app uses app router, to GET routes for all the categories for example, enter URL http://localhost:3001/api/categories/ and hit send. The GET all products URL is http://localhost:3001/api/products, and GET all tags URL is http://localhost:3001/api/tags

## Built With

- [MongoDB](https://docs.mongodb.com/)
- [Expressjs](https://expressjs.com/)

## Author

Iman Mansour

- [Portfolio](https://imanmansour86.github.io/new-portfolio/)
- [Github](https://github.com/imanmansour86)
- [LinkedIn](https://www.linkedin.com/in/iman-mansour-51391515/)
- [Email](mailto:imanmansour86@gmail.com)

## License

This project is licensed under the MIT License
