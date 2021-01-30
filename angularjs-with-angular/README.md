# AngularJS + Angular

## Install Angular 2+ Dependencies

### Install Angular 2+
`npm install @angular/common @angular/compiler @angular/core @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router @angular/upgrade`

### Install core-js + types
`npm install core-js`

`npm install @types/core-js --save-dev`

### Install rxjs
`npm install rxjs`

### Install zone
`npm install zone.js` 

## Install Angular 2+ Dev Dependencies

### Install Angular Compiler CLI
`npm install @angular/compiler-cli --save-dev`

### Install NG Tools Webpack
`npm install @ngtools/webpack --save-dev`

### Install Node Types
`npm install @types/node --save-dev`

### Install Angular2 Template Loader
`npm install angular2-template-loader --save-dev`

### Install Awesome Typescript Loader
`npm install awesome-typescript-loader --save-dev`

### Install Null Loader
`npm install null-loader --save-dev`

### Install Raw Loader
`npm install raw-loader --save-dev`

### Install RimRaf
`npm install rimraf --save-dev`

### Install Webpack Bundle Analyzer
`npm install webpack-bundle-analyzer --save-dev`

---

## Preparing for a Webpack build

1) Change every component's `templateUrl` to point to the relative path: 
    e.g. `templateUrl: 'customer/customer.html'` to `templateUrl: './customer.html',`

2) Fix usage of global variables

3) Add module and moduleResolution to the `tsconfig.json`
```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "moduleResolution": "Node"
  }
}
```

4) Give webpack all the angularjs files that we have so we'll reference that in a single file
`index.ts`.