const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({
      Card, Favorite, Contact, Comment,
    }) {
      this.belongsToMany(Card, {
        through: 'Rating', foreignKey: 'user_id',
      })
      this.hasMany(Favorite, {
        foreignKey: 'user_id',
      })
      this.hasMany(Favorite, {
        foreignKey: 'author_id',
      })
      this.hasMany(Contact, {
        foreignKey: 'user_id',
      })
      this.hasMany(Card, {
        foreignKey: 'user_id',
      })
      this.hasMany(Comment, {
        foreignKey: 'user_id',
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  })
  return User
}
