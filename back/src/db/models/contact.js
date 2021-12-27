const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    // static associate({ User, Card }) {
    //   this.belongsTo(User, {
    //     foreignKey: 'id',
    //   })
    //   this.hasMany(Card, {
    //     foreignKey: 'contact_id',
    //   })
    // }
  }
  Contact.init({
    instagram: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    telegram: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Contact',
  })
  return Contact
}
