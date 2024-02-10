# Ng ESLint

Angular project for setting up ESLint.

## Run App

Below command will run the project:

```
npm start
```

## Initial Setup

Below command executed to perform initial setup:

```
ng new ng-eslint
```

## ESLint

Add ESLint to project:

```
ng add @angular-eslint/schematics
```

Run command:

```
npm run lint
```

Add new script:

```
"lint-html": "ng lint > eslint/report.html --format html --silent"
```

Add ESLint ignore file `.eslintignore`:

```
eslint/**
```

Refer: https://github.com/angular-eslint/angular-eslint