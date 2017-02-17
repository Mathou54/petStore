# Pet Store

Prototype of a pet store application in Angular and Java.

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
2. `mvn install` in the `src/man/java` folder;

Then, a jar is produce in `src/man/java/target` folder.

## Run the application

Once the jar is generated, `java -jar petstore.jar`, with `petstore.jar` the path to the generated jar, start the server.

It can be accessed with the URL [http://localhost:8080/](http://localhost:8080/).
Localhost can be replaced with any address referring to the computer launching the jar.