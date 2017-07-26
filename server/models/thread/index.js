module.exports = (sequelize, DataTypes) => {
  const Thread =
    sequelize.define('threads', {
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      owner: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    })
  Thread.freezeTableName = true
  Thread.associate = ({ User, Message }) => {
    Thread.hasMany(User, { foreignKey: { allowNull: true }, onDelete: 'CASCADE' })
    Thread.hasMany(Message, { foreignKey: { allowNull: true }, onDelete: 'CASCADE' })
  }
  return Thread
}
