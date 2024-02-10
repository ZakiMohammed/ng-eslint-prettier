# Ng ESLint Prettier

Angular project for setting up ESLint + Prettier.

## Run App

Below command will run the project:

```
npm start
```

## Install Prettier

Add Prettier to the project as dev dependency:

```
npm install --save-dev --save-exact prettier
```

## Configuration File

Create a Prettier configuration file `.prettierrc` to control the Prettier configurations at project level.

``` json
{
  "singleQuote": true,
  "bracketSameLine": true,
  "endOfLine": "auto",
  "overrides": [
    {
      "files": ["*.html", "*.ts"],
      "options": {
        "printWidth": 120
      }
    },
    {
      "files": "*.html",
      "options": {
        "parser": "html"
      }
    },
    {
      "files": "*.component.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
```

Here, we are updating some of the few settings:

- `singleQuotes`: Setting the to `true` to follow JS recommendation of using single quotes for string.
- `bracketSameLine`: Setting the to `true` to make end of closing brackets appearing on the same line.
- `endOfLine`: Setting the to `auto` to make the end of line to work as per environment.
- `overrides`: Overriding settings for `.html` and `.ts` file `printWidth` size to `120` as SonarLint allows 120.

Read more from here [Options Prettier](https://prettier.io/docs/en/options).

## Ignore File

Create a Prettier ignore file `.prettierignore` to control which file to avoid for formatting.

```
package.json
package-lock.json
dist
/.angular/cache
lint-*
```

Add a prettier command to run for entire project to format all of the files at once, this command can be handy to use in order to format the entire project.

``` json
{
  "scripts": {
    "prettier:write": "prettier --config .prettierrc --write .",
    "prettier:check": "prettier --config .prettierrc --check ."
  }
}
```
___

# Prettier Rule for ESLint

Understand the philosophy of formatting with ESLint + Prettier from: [Formatting Philosophy](https://github.com/angular-eslint/angular-eslint/blob/main/docs/FORMATTING_RULES.md).

These 2 packages are required for adding Prettier rule to ESLint:

1. **ESLint Config Prettier**: https://github.com/prettier/eslint-config-prettier (personally recommended as it keeps linting and formatting as separate responsibilities)
1. **ESLint Plugin Prettier**: https://github.com/prettier/eslint-plugin-prettier (runs prettier within ESLint so you get feedback on violations from prettier itself rather

Add `eslint-config-prettier` to project:

```
npm install --save-dev eslint-config-prettier
```

Add `eslint-plugin-prettier` and `prettier` to project:

```
npm install --save-dev eslint-plugin-prettier
npm install --save-dev --save-exact prettier
```

Add Prettier rules to `.eslintrc.json`:

``` json
{
  "plugins": [
    "prettier"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "extends": [
        ...
        "plugin:prettier/recommended"
      ],
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        ...
        "plugin:prettier/recommended"
      ],
    }
  ]
}
```

Here, we are adding the prettier rule to the `extends` array for `.ts` and `.html` files.