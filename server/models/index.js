module.exports = (sequelize, DataTypes) =>
({
  Message: require('./message')(sequelize, DataTypes),
  Thread: require('./thread')(sequelize, DataTypes),
  Post: require('./post')(sequelize, DataTypes),
  User: require('./user')(sequelize, DataTypes),
})
