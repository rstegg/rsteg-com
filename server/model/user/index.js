const crypto = require('crypto')

module.exports = (sequelize, DataTypes) =>
  sequelize.define('users', {
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
    verify_token: {
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
    ip_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIP: true,
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
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
  }, {
    freezeTableName: true,
    classMethods: {
      associate () {
        this.belongsTo(sequelize.models['threads'], { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
        this.hasMany(sequelize.models['messages'], { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
      }
    },
    instanceMethods: {
      validPassword(password) {
        const testhash = crypto.createHash('md5').update(password + this.salt).digest("hex");
        if (testhash === this.password) {
          return true;
        } else {
          return false;
        }
      }
    }
  })
