const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

// регистрация
router.route('/sign_up')
  .post(async (req, res) => {
    try {
      const {
        email, name, password, phone,
      } = req.body;
      if (email && name && password && phone) {
        const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND));
        const currentUser = await User.create({ ...req.body, password: cryptPass });
        req.session.user = { id: currentUser.id, name: currentUser.name, email: currentUser.email };
        res.status(200).json({
          id: currentUser.dataValues.id,
          name: currentUser.dataValues.name,
          email: currentUser.dataValues.email,
          phone: currentUser.dataValues.phone,
        });
      } else {
        res.sendStatus(400);
      }
    } catch (error) {
      res.sendStatus(500);
    }
  });
// Авторизация
router.route('/sign_in')
  .post(async (req, res) => {
    try {
      const { email, password } = req.body;
      const currentUser = await User.findOne({ where: { email } });
      if (currentUser && await bcrypt.compare(password, currentUser.password)) {
        req.session.user = { id: currentUser.id, name: currentUser.name };
        res.status(200).json({
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          phone: currentUser.phone,
        });
      } else {
        res.sendStatus(400);
      }
    } catch (err) {
      res.sendStatus(500);
    }
  });

// выход из системы
router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('smth');
    res.sendStatus(200);
  });

// проверка есть ли сессия
router.route('/check')
  .get((req, res) => {
    // console.log(req.session.user);
    if (req.session.user) {
      res.status(200).json(req.session.user);
    }
  });
  router.route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const currUser = await User.findOne({
        where: {
          id: id
        }
      })
     res.status(200).json({
       name: currUser.name,
       email: currUser.email,
       phone: currUser.phone,
     })
    } catch( err) {
      console.log(err);
    }
  })
  .put(async (req, res) => {
    const { id, userName, userEmail, userPhone, userPass, userNewPass} = req.body;
    const currentUser = await User.findOne({ where: { id: Number(id) } });
    const myresult = await !(bcrypt.compare(userPass, currentUser.password))
    if(userPass.length == 0 || await !(bcrypt.compare(userPass, currentUser.password))) {
      res.sendStatus(400)
    } else  {
      if(!userNewPass) {
        try {
          const updatedUser = await User.update({name: userName, email: userEmail, phone: userPhone}, {
            where: {
              id: Number(id)
            },
            returning: true,
            plain: true
          })
          res.status(202).json(updatedUser[1].dataValues)
        } catch (err) {
          console.log(err);
        }
      } else {
        const hashedPass = await bcrypt.hash(userNewPass, Number(process.env.SALT_ROUND));
        try {
          const updatedUser = await User.update({name: userName, email: userEmail, phone: userPhone, password: hashedPass}, {
            where: {
              id: Number(id)
            },
            returning: true,
            plain: true
          })
          res.status(201).json(updatedUser[1].dataValues)
        } catch(err) {
          console.log(err);
        }
      }
  }
})




module.exports = router
