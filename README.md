[![Build]()](https://github.com/oti4me/order-api/workflows/Test/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/0e435a5f1ac834bc670d/maintainability)](https://codeclimate.com/github/oti4me/order-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0e435a5f1ac834bc670d/test_coverage)](https://codeclimate.com/github/oti4me/order-api/test_coverage)
# Order API

## Introduction

**`Order API`** is a simple API for making orders

#### Expected features

- Add order.
- Get orders.
- Get a single order.
- Update order.
- Delete order.

## Installation and Setup

- Install NodeJs
- Navigate to a directory of your choice on the `terminal`.
- Clone this repository on that directory.

  > git clone https://github.com/oti4me/order-api.git

- Navigate to the repo's folder on your computer
- `cd order-api/`
- Install the application's dependencies using `npm install`

  #### Note

    - In order to begin using, you need to have [NodeJs](https://nodejs.org) and **npm** installed on your system.
    - Consult env.example for env variables to setup firebase
    - In other to interact effectively with the endpoints, install and use [Postman](https://www.getpostman.com/)

- Run the app
    - `npm run dev`
    - Running the command above will run the app at `localhost:3001` or the port provided with the PORT env variable.
    - or by using the docker command `docker-composer up --build`, the app will start on port `8081` or any port set with `APP_DOCKER_PORT` env variable

## Dependencies

- See Package.json for reference

## Tests

- The tests were written using **[Mocha](https://www.npmjs.com/package/mocha)** , **[Chai](https://www.npmjs.com/package/chai)** as it's assertion library and **[Supertest](https://www.npmjs.com/package/supertest)**.
- To run the tests, navigate to the project's folder.
- Issue the following command on the terminal `npm test`
- If the tests are successful, they will complete without failures or errors.

## Technologies

- [ECMAScript 2020](https://v8.dev/features/tags/es2020): This is the newest version of JavsScript with new features such as Nullish coalescing, Optional chaining and globalThis and many more.

# Coding Style

- Airbnb

# Language

- JavaScript

## Api Documentation

[Coming soom]()

## Contributions

Contributions are always welcome. If you are interested in enhancing the features in the project, follow these steps below:

- Fork the project to your repository then clone it to your local machine.
- Create a new branch and make features that will enhance it.
- If the you wish to update an existing enhancement submit a pull request.
- If you find bugs in the application, create a `New Issue` and let me know about it.
- If you need clarification on what is not clear, contact me via mail [h.otighe@gmail.com](mailto:h.otighe@gmail.com)

## Author

    Henry Otighe
