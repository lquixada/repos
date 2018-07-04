Facebook Repos<br>
[![Build Status](https://travis-ci.org/lquixada/repos.svg?branch=master)](https://travis-ci.org/lquixada/repos)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
================

An explorer app for Facebook projects in Github.


### Installation

```
$ git clone https://github.com/lquixada/repos.git
$ cd repos
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
$ nvm install
$ nvm use
$ yarn # or npm install
```


### Getting Started

In order to run the app in development mode, run:

```
$ yarn dev
```

And go to http://localhost:3000/. Please note that in dev mode bundles will be served from memory whereas in prod mode it will be served from disk.

To run all specs and lints, run:

```
$ yarn test
```

For production environment, the commands are:

```
$ yarn build
$ yarn start
```

Facebook Repos will be ready on http://localhost:3000/.


### Folder Structure

* **logs/**: all generated log files will be placed here
* **src/**: all source files
	* **client/**: entry point for the browser app (SPA)
	* **public/**: assets files such as images and reset.css
	* **server/**: entry point for the node app
	* **shared/**: common codebase for both client and server (95% of the code is here)
	* **app.js**: well, this is actually the real entry point for the node app
* **tasks/**: shell tasks that complex enough to not be a npm task
* **web/**: distributable files for the web (server and client) created through `yarn build`


### Stack

* **App**: react, redux, redux-saga, react-router
* **Style**: styled-components
* **Tests**: jest
* **Lint**: standard
* **Utils**: npm, webpack, babel
* **CI**: [TravisCI](https://travis-ci.org/lquixada/repos/)
* **Infra**: [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)



### License

repos is licensed under the [MIT license](https://github.com/lquixada/repos/src/master/LICENSE) © [Leonardo Quixadá](https://twitter.com/lquixada/)


### Author

|[![@lquixada](https://avatars0.githubusercontent.com/u/195494?v=4&s=96)](https://github.com/lquixada)|
|:---:|
|[@lquixada](http://www.github.com/lquixada)|
