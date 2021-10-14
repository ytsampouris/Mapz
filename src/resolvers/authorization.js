import { ForbiddenError } from 'apollo-server';
import { combineResolvers, skip } from 'graphql-resolvers';

export const isAuthenticated = (parent, args, { me }) => {
  if (me) {
    return skip;
  } else {
    return new ForbiddenError('Not authenticated as user.');
  }
};

export const isAdmin = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { role } }) => {
    if (role && role === 'admin') {
      return skip;
    } else {
      return new ForbiddenError('Not authorized as admin.');
    }
  },
);
