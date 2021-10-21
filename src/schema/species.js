import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    species: [Species!]
  }

  extend type Mutation {
    addSpecies(
      type: String
      species: String
      family: String
      classification: String
      n2k: String
      code_n2k: String
      iunc: String
      directive_92: String
      bern: String
      bonn: String
      cites: String
      date: String
      source: String
      eunis: String
      latin_name: String
      taxonomy: String
      common_name: String
      directive_09: String
    ): Species!
    updateSpecies(
      id: String
      type: String
      species: String
      family: String
      classification: String
      n2k: String
      code_n2k: String
      iunc: String
      directive_92: String
      bern: String
      bonn: String
      cites: String
      date: String
      source: String
      eunis: String
      latin_name: String
      taxonomy: String
      common_name: String
      directive_09: String
    ): Species!
    deleteSpecies(id: String): Boolean
  }

  type Species {
    id: String
    type: String
    species: String
    family: String
    classification: String
    n2k: String
    code_n2k: String
    iunc: String
    directive_92: String
    bern: String
    bonn: String
    cites: String
    date: String
    source: String
    eunis: String
    latin_name: String
    taxonomy: String
    common_name: String
    directive_09: String
  }
`;
