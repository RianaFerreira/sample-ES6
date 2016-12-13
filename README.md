# React Redux Todo Application with Higher Order Components
Sample todo application that uses react to organise component, share state with redux, and use the Firebase NoSQL database as a JSON store.

## Setup the JS development environment
_Download and install the [Node web server](https://nodejs.org) the installation includes NPM_

```
$ node -v  
$ npm -v
```

_Download webpack, it bundles all 3rd party dependencies including Babel which transpiles JSX to JS_

```
$ npm install -g webpack@1.12.13  
$ npm rebuild node-sass  
$ webpack -v
```

## Setup the project repository
```
$ git clone git@github.com:RianaFerreira/sample-ES6.git  
$ git init  
$ git remote add origin git@github.com:RianaFerreira/sample-ES6.git  
$ git push -u origin master
```

## Configure [Firebase](https://console.firebase.google.com/) for development and test
_The config folder has been included in the .gitignore file_
* Create test and development databases
* Copy the configuration values for each DB into the respective env files.

```
$ mkdir config
$ cd config
$ touch development.env  
$ touch test.env
```

* Add the development and test database env variables

## Pull in the project modules and run the server locally
```
$ npm install
$ webpack -w
$ node server.js
```

## Run the tests
`$ npm test`

## Design
* [Zurb Foundation] (http://foundation.zurb.com/sites/docs/)
* [Adobe Color] (https://color.adobe.com/Color-Theme-6-color-theme-8723202/)

## Testing References
* [Expect] (https://github.com/mjackson/expect) assertions
* [Expect Cheatsheet] (http://ricostacruz.com/cheatsheets/expectjs.html)
* [Mocha] (https://mochajs.org/) break tests up into sections
* [Karma] (https://karma-runner.github.io/1.0/index.html) runs all the tests

## NPM required testing modules
* karma
* karma-chrome-launcher
* karma-mocha
* karma-mocha-reporter
* karma-sourcemap-loader
* karma-webpack
* mocha
* expect
* deep-freeze-strict

## NPM redux modules
* [redux](https://www.npmjs.com/package/redux)
* [react-redux](https://www.npmjs.com/package/react-redux)
* [redux-thunk](https://www.npmjs.com/package/redux-thunk)

## [momentjs](http://momentjs.com/)
Manage and nicely format time values.

## [uuid](https://www.npmjs.com/package/uuid)
Generates unique identifiers.

## [node ENV file](https://www.npmjs.com/package/node-env-file)
Environment variable management.

## [nodemon](https://www.npmjs.com/package/nodemon)
Automatically restart node server as scripts are changed.
