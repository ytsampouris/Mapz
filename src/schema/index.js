import { gql } from 'apollo-server-express';

import userSchema from './user';
import messageSchema from './message';
import layerSchema from './layer';
import speciesSchema from './species';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, messageSchema, layerSchema, speciesSchema];
