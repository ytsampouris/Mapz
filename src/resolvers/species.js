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
    },
  },

  Mutation: {
    addSpecies: combineResolvers(
      isAuthenticated, isAdmin, 
      async ( parent,
      {
        type,
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
        source,
        latin_name,
        taxonomy,
        common_name,
        directive_09
      },
      { models, me },
    ) => {
      const newSpecies = await models.Species.create({
        id: uuid(),
        type,
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
        source,
        latin_name,
        taxonomy,
        common_name,
        directive_09
      });

      return newSpecies;
    }),

    updateSpecies: combineResolvers(
      isAuthenticated, isAdmin,
      async (parent, { id, type, species, family, classification, n2k, code_n2k, iunc, directive_92, bern, bonn, cites, date, source, eunis, latin_name, taxonomy, common_name, directive_09 }, { models, me }) => {
        const speciesUpdate = await models.Species.findById(id);
        return await speciesUpdate.update({ type, species, family, classification, n2k, code_n2k, iunc, directive_92, bern, bonn, cites, date, source, eunis, latin_name, taxonomy, common_name, directive_09 });
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
