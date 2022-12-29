Miweather-api

Miweather-api is a web applicaion service that render weather forecast service to user.

Technology Use
-This project is build on nodejs, a javascript framework used to run javascript from backend (server side).

Libraries
Library uses can be found in package.json file and it build on;
  -node 16.x
  -npm  8.x
  
 Setup and Running of the app Locally
 //in your VsCode terminal run
$ git clone https://github.com/Bello-Muhammad/miweather-api.git
//open the clone repository folder created on your machine in Vscode
//Then run the following command in Vscode terminal, or git bash
$ npm install
// to start the server
$ npm run dev
  
 Choice on Storage
 Redis which is an In-memory storage for caching, in that way or application don't have to be retrieving the same information over and over again.
 
Tech Stack
-Client: pug, css and Bootstrap.
-Server: Nodejs, Express, and Redis.

Project Structure
src
  |_ config
  |_ controller
  |_ middleware
  |_ public
  |_ routes
  |_ views

Future Features to be added:
- Live camera of a place
- Nice picture of places
