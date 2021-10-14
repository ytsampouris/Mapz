import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    species: [Species!]
  }

  extend type Mutation {
    addSpecies(
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
    ): Species!
    updateSpecies(
      id: String
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
    ): Species!
    deleteSpecies(id: String): Boolean
  }

  type Species {
    id: String
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
  }
`;
