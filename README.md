# Pet Store

[![Build Status](https://travis-ci.org/Mathou54/petStore.svg?branch=master)](https://travis-ci.org/Mathou54/petStore)

Prototype of a pet store application in Angular and Java.

[https://m-petstore.herokuapp.com/pet](https://m-petstore.herokuapp.com/pet)

## Prerequisites

Having NodeJs (v6.9+, with NPM), Java (v1.8) and Maven (v3.3+) installed.

## Installation

### Front-end

In order to download all dependencies to build the front-end, run `npm install` in the `src/man/angular` folder.

### Back-end

In order to download all dependencies to build the back-end, run `mvn install` in the `src/man/java` folder.

## Build the application

Execute the following commands in order to build properly the application:

1. `node_modules/.bin/ng` (or `node_modules/.bin/ng.cmd` for windows) in the `src/man/angular` folder;
2. `mvn install` in the `src/man/java` folder.

Then, a jar is produce in `src/man/java/target` folder.

## Run the application

Once the jar is generated, `java -jar petstore.jar`, with `petstore.jar` the path to the generated jar, start the server.

It is also possible to run `mvn spring-boot:run` in `src/man/java` folder to start it.

It can be accessed with the URL [http://localhost:8080/](http://localhost:8080/).
Localhost can be replaced with any address referring to the computer launching the jar.

## Organization of the pet store

### Front-end

The front-end contains all the `HTML`, `CSS` and `Angular` components to display, fetch and send the pet data.
It consume the back-end REST API explained in the next part.

* `http://localhost:8080/pet` let you access the list of all pets;
* `http://localhost:8080/pet/1` with `1` an ID, let you access the detail of a pet;
* `http://localhost:8080/pet/1/edit`  with `1` an ID, let you edit the detail of a pet;
* `http://localhost:8080/pet/create` let you create a pet.

#### List of pets

This list behaviour can be found at `src/main/angular/src/app/pet/list` folder.
It contain a component managing the list of pets. The subfolder `pet` manage a pet of this list.

#### Pet's detail

The detail of a pet behaviour can be found at `src/main/angular/src/app/pet/pet-detail` folder.

#### Pet's creation

The creation of a pet behaviour can be found at `src/main/angular/src/app/pet/pet-create` folder.

#### Edit a pet

The edition of a pet behaviour can be found at `src/main/angular/src/app/pet/pet-edit` folder.

#### Pet service

The pet service can be found at `src\main\angular\src\app\services\pet\pet.service.ts` and regroup the http calls to the back-end.
It also contain the handling of any http error returned by the server defined in `http-errors.service.ts`.

### Back-end

#### Controllers

The controllers can be found at `src/main/java/src/main/java/com/petstore/controllers`.

The `PetController` class maps the REST URL to the java pet service.

The `ApplicationController` allow the front-end part to change the url to any /pet URL and subURL
and still redirect to the index.html page, allowing browser refresh.

#### Services

The services can be found at `src/main/java/src/main/java/com/petstore/services`.

It contain the `CrudService` interface containing all basic CRUD operations.

The `PetService` interface extends the `CrudService` for the `Pet` entity.

The `PetServiceImpl` class contain the implementations of the `PetService`.
It is created to call the right repository.

#### Repositories

The repositories can be found at `src/main/java/src/main/java/com/petstore/repositories`.

It contain the `PetRepository`. It extends `CrudRepository` in order to access the database and perform the CRUD operations.

#### Model

The model can be found at `src/main/java/src/main/java/com/petstore/model`.

It contain the Pet entity stored into the database.
