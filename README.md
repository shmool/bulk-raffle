# Raffle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Add participants

Go to `/participants` to add the participants list.
Each participant should have email, name and surname, separated by tabs.
The participants are separated by newline.
Participants already exist in the system will not be added (unique by email).

## Raffle

Go to the home route to raffle. Winners are removed from the raffle list.

## Persistence

The lists of participants and winners are stored in local storage.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
