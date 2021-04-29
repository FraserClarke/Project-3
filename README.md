# Create React Express App

## Project Requirements

- Must use ReactJS in some way (even if minimal)
- Must use a Node and Express Web Server
- Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM
- Must have both GET and POST routes for retrieving and adding new data
- Must be deployed using Heroku (with Data)
- Must utilize at least two libraries, packages, or technologies that we haven’t discussed
- Must allow for or involve the authentication of users in some way
- Must have a polished frontend/UI
- Must have folder structure that meets MVC Paradigm
- Must meet good quality coding standards (indentation, scoping, naming)
- Must not expose sensitive API key information on the server

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
