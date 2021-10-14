const layer = (sequelize, DataTypes) => {
  const Layer = sequelize.define('layer', {
    id: {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV1,
      primaryKey: true
    },
    label: {
      type: DataTypes.TEXT
    },
    details: {
      type: DataTypes.TEXT
    },
    timespan: {
      type: DataTypes.STRING
    },
    filetype: {
      type: DataTypes.STRING
    },
    crs: {
      type: DataTypes.STRING
    },
    attributions: {
      type: DataTypes.TEXT
    },
    filename: {
      type: DataTypes.STRING
    },
    crossorigin: {
      type: DataTypes.STRING
    },
    preload: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.TEXT
    },
    visible: {
      type: DataTypes.BOOLEAN
    },
    published: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    zindex: {
      type: DataTypes.INTEGER
    },
    apikey: {
      type: DataTypes.TEXT
    },
    dbtablename: {
      type: DataTypes.STRING
    },
  });
  return Layer;
};

export default layer;