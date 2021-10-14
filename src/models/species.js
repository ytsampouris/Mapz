const species = (sequelize, DataTypes) => {
  const Species = sequelize.define('species', {
    id: {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4,
      primaryKey: true
    },
    species: {
      type: DataTypes.STRING
    },
    family: {
      type: DataTypes.STRING
    },
    classification: {
      type: DataTypes.STRING
    },
    n2k: {
      type: DataTypes.STRING
    },
    code_n2k: {
      type: DataTypes.STRING
    },
    iunc: {
      type: DataTypes.STRING
    },
    directive_92: {
      type: DataTypes.STRING
    },
    bern: {
      type: DataTypes.STRING
    },
    bonn: {
      type: DataTypes.STRING
    },
    cites: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
    },
    source: {
      type: DataTypes.STRING
    },
    eunis: {
      type: DataTypes.STRING
    }
  });
  return Species;
};

export default species;