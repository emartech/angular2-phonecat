# Angular 2 Phonecat
[![Dependency Status](https://david-dm.org/emartech/angular2-phonecat.svg)](https://david-dm.org/emartech/angular2-phonecat)
[![devDependency Status](https://david-dm.org/emartech/angular2-phonecat/dev-status.svg)](https://david-dm.org/emartech/angular2-phonecat?type=dev)

Angular 2 port of the 
[original Angular Phonecat application](https://github.com/angular/angular-phonecat) with Webpack.

### Introduction

For those not knowing the original repository, it is a phone listing application
where you can filter the list on the main page and view detailed description on phones at the details page.

### Technical details

It consists of 3 different entry points.

- ```src/app/main.ts``` is the main entry point and holds the application logic
- ```src/app/vendor.ts``` is where the third party libraries reside like angular itself
- ```src/app/styles.ts``` consists of required stylesheets for the pretty display

Templates are given with ```templateUrl``` and required at transpile time with the help of ```angular2-template-loader```.
It gives the ability to be used with AOT (Ahead of Time Compilation).

### Getting started

```bash
git clone https://github.com/emartech/angular2-phonecat.git
cd angular2-phonecat
npm i
npm start
```

Now the application is running, open your browser and visit the link ```http://localhost:4000```.
