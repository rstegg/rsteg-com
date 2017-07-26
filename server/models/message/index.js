const MessageScheme = DataTypes => ({
  contentType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  }
})

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('messages', MessageScheme(DataTypes))
  Message.freezeTableName = true
  Message.associate = ({ User, Thread }) => {
    Message.belongsTo(User, { foreignKey: { allowNull: true }, onDelete: 'CASCADE' })
    Message.belongsTo(Thread, { foreignKey: { allowNull: true }, onDelete: 'CASCADE' })
  }
  return Message
}
