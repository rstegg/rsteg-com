module.exports = (sequelize, DataTypes) =>
({
  Message: require('./model/message')(sequelize, DataTypes),
  Thread: require('./model/thread')(sequelize, DataTypes),
  User: require('./model/user')(sequelize, DataTypes),
})
