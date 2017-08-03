const crypto = require('crypto')

const UserScheme = DataTypes => ({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salt: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^([a-zA-Z]+)[0-9]*\.*[a-zA-Z0-9]+$|^[a-zA-Z]+[0-9]*$/
    }
  },
  verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  permalink: {
    type: DataTypes.STRING,
    allowNull: false
  },
  verifyToken: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIP: true,
    }
  },
  dob: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  verifyNeeded: {
    type: DataTypes.JSONB,
    allowNull: true
  }
})

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', UserScheme(DataTypes))
  User.freezeTableName = true
  User.associate = ({ Message, Thread }) => {
    User.belongsTo(Thread, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
    User.hasMany(Message, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
  }
  User.prototype.validPassword = password => {
    const testhash = crypto.createHash('md5').update(password + this.salt).digest('hex')
    if (testhash === this.password) {
      return true
    }
    return false

  }
  return User
}
