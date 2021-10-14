import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    layers: [Layer!]
    publishedLayers: [Layer!]
    queryXY(layer: String, type: String, zoom: Int, x: Float, y: Float): String
  }

  extend type Mutation {
    addLayer(
      label: String
      details: String
      timespan: String
      filetype: String
      crs: String
      attributions: String
      filename: String
      type: String
      url: String
      visible: Boolean
      published: Boolean
      apikey: String
      dbtablename: String
    ): Layer!
    updateLayer(
      id: String
      label: String
      details: String
      timespan: String
      filetype: String
      crs: String
      attributions: String
      filename: String
      crossorigin: String
      preload: String
      type: String
      url: String
      visible: Boolean
      published: Boolean
      zindex: Int
      apikey: String
      dbtablename: String
      ): Layer!
    deleteLayer(id: String!): Boolean
  }

  type Layer {
    id: String!
    label: String
    details: String
    timespan: String
    filetype: String
    crs: String
    attributions: String
    filename: String
    crossorigin: String
    preload: String
    type: String
    url: String
    visible: Boolean
    published: Boolean
    zindex: Int
    apikey: String
    dbtablename: String
  }
`;
