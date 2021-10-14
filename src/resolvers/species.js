import jwt from 'jsonwebtoken';
import { combineResolvers } from 'graphql-resolvers';
import { AuthenticationError, UserInputError } from 'apollo-server';
import { uuid } from 'uuidv4';
import { isAdmin, isAuthenticated } from './authorization';

export default {
  Query: {
    species: async (parent, args, { models }) => {
      console.log('getting species table');
      return await models.Species.findAll();
    }
  },

  Mutation: {
    addSpecies: combineResolvers(
      isAuthenticated, isAdmin, 
      async ( parent,
      {
        species,
        family,
        classification,
        n2k,
        code_n2k,
        iunc,
        directive_92,
        bern,
        bonn,
        cites,
        date,
        source
      },
      { models, me },
    ) => {
      const newSpecies = await models.Species.create({
        id: uuid(),
        species,
        family,
        classification,
        n2k,
        code_n2k,
        iunc,
        directive_92,
        bern,
        bonn,
        cites,
        date,
        source
      });

      return newSpecies;
    }),

    updateSpecies: combineResolvers(
      isAuthenticated, isAdmin,
      async (parent, { id, species, family, classification, n2k, code_n2k, iunc, directive_92, bern, bonn, cites, date, source, eunis }, { models, me }) => {
        const speciesUpdate = await models.Species.findById(id);
        return await speciesUpdate.update({ species, family, classification, n2k, code_n2k, iunc, directive_92, bern, bonn, cites, date, source, eunis });
      },
    ),

    deleteSpecies: combineResolvers(
      isAuthenticated, isAdmin,
      async (parent, { id }, { models }) => {
        return await models.Species.destroy({
          where: { id },
        });
      },
    ),
  }
};
