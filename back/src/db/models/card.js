const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({
      Comment, Contact, Ad, User, Category, adress
    }) {
      this.belongsToMany(User, {
        through: 'Rating', foreignKey: 'card_id',
      });
      this.hasMany(Comment, {
        foreignKey: 'card_id',
      })
      // this.hasOne(Contact, {
      //   foreignKey: 'card_id',
      // })
      this.hasOne(Ad, {
        foreignKey: 'card_id',
      });
      this.belongsTo(Category, {
        foreignKey: 'id',
      });
      this.belongsTo(User, {
        foreignKey: 'id',
      })
      // this.belongsTo(Contact, {
      //   foreignKey: 'id',
      // })
    }
  }
  Card.init({
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    image: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    instagram: DataTypes.TEXT,
    whatsapp: DataTypes.TEXT,
    telegram: DataTypes.TEXT,
    adress: DataTypes.TEXT,
    // contact_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
