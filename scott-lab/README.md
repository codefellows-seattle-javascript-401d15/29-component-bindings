![cf](https://i.imgur.com/7v5ASc8.png) Lab 28 - Angular CRUD
======

## To Submit this Assignment
  * create a fork of this repository
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `.eslintrc`
  * `.babelrc`
  * `.gitignore`
  * `package.json`
    * create an npm `build` script for running `webpack`
    * create an npm `build-watch` script for running `webpack-dev-server --inline --hot`
    * create an npm `test` script for running karma and all associated tests
    * create an npm `test-watch` script for running karma on file system changes
    * create an npm `lint` script for linting your JS with `eslint`
  * **ignore the build directory**
  * `webpack.config.js`
    * this should include all of the production environment configurations used in lecture code
  * `karma.config.js`

## Slugram Backend
  * Use the same backend slugram server that you set up for lab27

## Description
  * Create these directories to organize your code:
    * app
    * app/config
    * app/view
    * app/view/home
    * app/view/landing
    * app/scss
    * app/scss/lib
    * app/scss/lib/base
    * app/scss/lib/layout
    * app/scss/lib/theme
    * app/service
    * app/component
    * app/component/gallery
    * app/component/gallery/create-gallery
    * app/component/landing
    * app/component/navbar
  * include a **main.scss**
  * include an `.scss` partial for your `create-gallery` and `navbar` components
  * style your application to meet the `create-gallery` mockup provided in the `wireframes` directory of this repo

## Functional Requirements
  * Create a component for displaying a user's
  saved galleries (name and description)
  * This should contain functionality that allows the user to be able to add additional galleries
  * Style your application to meet the mockup specifications provided in the `wireframes` directory of this repo

## Caveats
* this should trigger a **PUT** request to the `slugram` API and remove update the gallery in the database and on the page
  * use lecture-27-angular-auth NOT lecture-28-angular-crud as starter code for this lab. Feel free to use the lecture 28 code as a reference, but *DO NOT* turn in lecture 28 code as your own.

## Bonus
* Add the ability to **delete** a gallery
  * this should have a button that will trigger a **DELETE** request to the `slugram` API and remove the gallery from the page
* Add the ability to **update** a gallery

## Other Use Notes
* Password must be 8 characters
* Username must be 5 characters
