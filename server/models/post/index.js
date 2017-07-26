const PostScheme = DataTypes => ({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  keywords: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: true,
  }
})

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('posts', PostScheme(DataTypes))
  Post.freezeTableName = true
  Post.associate = ({ User }) => {
    Post.belongsTo(User, { foreignKey: { allowNull: true }, onDelete: 'CASCADE' })
  }
  return Post
}
