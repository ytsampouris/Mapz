# Deployment

Create a .env file with the following information:
DATABASE=gis
DB_NAME=gis
DATABASE_URL=XXX.XXX.X.XXX
API_HOST_URL=http://XXX.XXX.X.XXX
PORT=XXXX
PGHOST=XXX.XXX.X.XXX
DATABASE_USER=postgres
DATABASE_PASSWORD=astrongpassword
CREATE_INITIAL_TABLES=false -> set to true if you deploy for the first time in order to create the tables in postgres, after that you can set to false again.
SECRET=asdlplplfwfwefwekwself.2342.dawasdq -> The SECRET is just a random string for your authentication

Thanks to:

# fullstack-apollo-express-postgresql-boilerplate

[![Build Status](https://travis-ci.org/the-road-to-graphql/fullstack-apollo-express-postgresql-boilerplate.svg?branch=master)](https://travis-ci.org/the-road-to-graphql/fullstack-apollo-express-postgresql-boilerplate) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-graphql/fullstack-apollo-express-postgresql-boilerplate.svg)](https://greenkeeper.io/)

A full-fledged Apollo Server with Apollo Client starter project with React and Express. [Read more about it in this tutorial to build it yourself](https://www.robinwieruch.de/graphql-apollo-server-tutorial/).

**Family of universal fullstack repositories:**

Server Applications:

- [Node.js with Express + MongoDB](https://github.com/the-road-to-graphql/fullstack-apollo-express-mongodb-boilerplate)
- [Node.js with Express + PostgreSQL](https://github.com/the-road-to-graphql/fullstack-apollo-express-postgresql-boilerplate)

Client Applications:

- [React Client](https://github.com/the-road-to-graphql/fullstack-apollo-react-boilerplate)
- [React Native Client](https://github.com/morenoh149/fullstack-apollo-react-native-boilerplate)
