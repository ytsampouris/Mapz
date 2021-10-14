
import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import { uuid } from 'uuidv4';
import { isAdmin, isAuthenticated } from './authorization';
import { sequelize } from '../models';

export default {
  Query: {
    layers: combineResolvers(
      isAuthenticated,
      async (parent, args, { models }) => {
      return await models.Layer.findAll();
    }),
    publishedLayers: async (parent, args, { models }) => {
      return await models.Layer.findAll({
        where: {
          published: true
        },
      });
    },
    queryXY: async (parent, { layer, type, zoom, x, y }, { models }) => {
      let result, query, radius;
      console.log(zoom, typeof(zoom))
      // set radius depending on zoom
      if(zoom <= 13) {
        radius = 1500;
      }
      if(zoom === 14) {
        radius = 450;
      }
      if(zoom === 15) {
        radius = 150;
      }
      if(zoom === 16) {
        radius = 40;
      }
      if(zoom === 17) {
        radius = 12;
      }
      if(zoom >= 18) {
        radius = 3;
      }
      if (type === "Point") {
        query = `select * from query_point_layer_by_xy('${layer}', ${radius}, ${x}, ${y});`
        // console.log(query);
        result = await sequelize.query(query);
      }
      if (type === "Line") {
        query = `select * from query_line_layer_by_xy('${layer}', ${radius}, ${x}, ${y});`
        result = await sequelize.query(query);
      }
      if (type === "Polygon") {
        query = `select * from query_polygon_layer_by_xy('${layer}', ${x}, ${y});`
        result = await sequelize.query(query);
      }
      if (type === "Raster") {
        query = `SELECT ST_Value(rast, ST_SetSRID(ST_MakePoint(${x}, ${y}),3857)) AS val FROM ${layer} WHERE ST_Intersects(rast, ST_SetSRID(ST_MakePoint(${x}, ${y}),3857));`
        result = await sequelize.query(query);
      }
      return JSON.stringify(result);
    },
  },

  Mutation: {
    addLayer: combineResolvers(
      isAuthenticated,
      async ( parent,
      {
        label,
        details,
        timespan,
        filetype,
        crs,
        attributions,
        filename,
        type,
        url,
        visible,
        published,
        apikey,
        dbtablename
      },
      { models, secret },
    ) => {
      const layer = await models.Layer.create({
        id: uuid(),
        label,
        details,
        timespan,
        filetype,
        crs,
        attributions,
        filename,
        type,
        url,
        visible,
        published,
        apikey,
        dbtablename
      });
      console.log('addLayer: ', dbtablename);
      return layer;
    }
    ),

    updateLayer: combineResolvers(
      isAuthenticated,
      async (parent, { 
        id,
        label,
        details,
        timespan,
        filetype,
        crs,
        attributions,
        filename,
        crossorigin,
        preload,
        type,
        url,
        visible,
        published,
        zindex,
        apikey,
        dbtablename
      }, { models }) => {
        const layer = await models.Layer.findById(id);
        console.log('updateLayer:: ', layer, dbtablename, published);
        return await layer.update({
          id,
          label,
          details,
          timespan,
          filetype,
          crs,
          attributions,
          filename,
          crossorigin,
          preload,
          type,
          url,
          visible,
          published,
          zindex,
          apikey,
          dbtablename
        });
      },
    ),

    deleteLayer: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models, me }) => {
        console.log('me in deleteLayer: ', me)
        return await models.Layer.destroy({
          where: { id },
        });
      },
    ),
  }
};
