module.exports = (sequelize, DataTypes) =>
  ({
    Post: require('./post')(sequelize, DataTypes),
  })
