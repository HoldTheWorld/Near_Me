const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: 'id', as: 'bayer',
      })
      this.belongsTo(User, {
        foreignKey: 'id', as: 'seller',
      })
    }
  }
  Favorite.init({
    user_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favorite',
  })
  return Favorite
}
