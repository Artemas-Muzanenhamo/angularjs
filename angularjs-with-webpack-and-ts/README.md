# AngularJS with Webpack + Typescript

## Pre-Requisites
- npm (installed on your machine globally)

## How to start the application
- To start the application, run: `npm start`.

## Dependencies for AngularJS + Webpack + Typescript
In order to get AngularJS working with Webpack + Typescript you will need to add the following dependencies:

### Install TypeScript
`npm install typescript --save`
* Since we will be using TypeScript instead of JavaScript.

### Install TypeScript Type Definitions
`npm install tsd --save`
* We will need this for our Typed Definitions of our TypeScript code.

### Install AngularJS and Types
`npm install angular --save`
* Instead of adding the AngularJS CDN in the `index.html`, we will no longer use that approach, and we will let webpack inject that for us during the build stage.

`npm install @types/angular --save-dev`
* Since we will be working with AngularJS in TypeScript, we would want our AngularJS code to be typed as well
so that our AngularJS syntax will include objects with types. E.g. `angular.module()` object is of type `IModule`.

### Install Webpack and Types
`npm install webpack --save`
* We will need this for bundling up our code into a single minified source JS file that we will serve to the browser.

`npm install @types/webpack`

### Install Babel Dependencies and Types
`npm install babel babel-core babel-loader babel-plugin-angularjs-annotate babel-preset-es2015`
* This is a JavaScript compiler that is mainly used to convert `es2015` code into a backwards compatible
version of JavaScript in current or older browser environments.

`npm install @babel/core @babel/preset-typescript`