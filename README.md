# Fullstack Project

This is an example project that consists in a frontend in NGINX / React and a backend in Spring Boot with Swagger.
```
NGINX > url:/*    :> frontend  React / Webpack 
        url:/api/ :> backend   Spring Boot
        
```
## Backend

Spring Boot service that uses Swagger Springfox to auto-generate the definition of the REST API.
In addition, it includes a Groovy integration to evaulate interpreted code in this programming language.

It is built with Gradle. Aditionally it creates a Docker image by running the command "gradle build dockerBuildImage".

## Frontend

A React project with webpack.

## DevOps

It consists in a Docker Compose file that creates 2 containers. One for backend and other one for Nginx server.
Nginx is resposible to serve the webpack file with the UI and forward the requests from frontend to backend with URL /api/*.
```
docker-compose up backend > frontend to create the containers and start them.
docker-compoe down --rmi all > to stop and delete the containers. 
```
