Вместо seed
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,phone:string
npx sequelize-cli model:generate --name Favorite --attributes user_id:integer,author_id:integer
npx sequelize-cli model:generate --name Category --attributes title:string,icon:string
npx sequelize-cli model:generate --name Contact --attributes instagram:string,whatsapp:string,telegram:string,user_id:integer
npx sequelize-cli model:generate --name Card --attributes title:string,text:text,image:text,price:integer,category_id:integer,is_active:boolean,user_id:integer,contact_id:integer
npx sequelize-cli model:generate --name Comment --attributes text:text,user_id:integer,card_id:integer
npx sequelize-cli model:generate --name Ad --attributes card_id:integer,date:date
npx sequelize-cli model:generate --name Rating --attributes user_id:integer,card_id:integer,count:integer

<!-- 

Model
id(hasOne)Ad(card_id)
id(hasOne)Contact(card_id)

    this.belongsToMany(User, {
        through: 'Rating', foreignKey: 'card_id'
    });
    this.hasMany(Comment, {
        foreignKey: 'card_id'
    });
    this.hasOne(Contact, {
        foreignKey: 'card_id'
    });
     this.hasOne(Ad, {
        foreignKey: 'card_id'
    });
-->

 Migration  
 id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
onDelete:'CASCADE'

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
