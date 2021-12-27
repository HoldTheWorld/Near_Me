const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Ad extends Model {
    static associate({ Card }) {
      this.belongsTo(Card, {
        foreignKey: 'id',
      })
    }
  }
  Ad.init({
    card_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Ad',
  })
  return Ad
}
