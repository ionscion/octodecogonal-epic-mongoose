# 18 NoSQL: Social Network API

## Description
This application is a social network API that uses a NoSQL database. It is a RESTful API that allows users to create, update, and delete users and thoughts in a database. Users can also add and remove friends to a user’s friend list and create and delete reactions to thoughts.

Note, this application does not have a front end. It is tested using Insomnia.

Also, instead of a Delete route for the Reactions, we are using a Put route to update the reaction array. This is because we are not deleting the reaction, but rather removing it from the array.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [API Routes](#api-routes)
* [Walkthrough Video](#walkthrough-video)
* [Questions](#questions)

## Installation
To install the necessary dependencies, run the following command:
`npm install`

## Usage
To start the server, run the following command:
`npm start` or `node server.js`

## API Routes
The following API routes are available:
Users:
- GET /api/users
- GET /api/users/:id
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id
- POST /api/users/:userId/friends/:friendId
- DELETE /api/users/:userId/friends/:friendId
Thoughts:
- GET /api/thoughts
- GET /api/thoughts/:id
- POST /api/thoughts
- PUT /api/thoughts/:id
- DELETE /api/thoughts/:id
- POST /api/thoughts/:thoughtId/reactions
- PUT /api/thoughts/:thoughtId/reactions/:reactionId

## Walkthrough Video

The following video shows the API routes being tested in Insomnia:

Tbd link to demo:

## Questions
If you have any questions about the repo, open an issue or contact me directly at github.com/ionscion. You can find more of my work at github.com/ionscion.

