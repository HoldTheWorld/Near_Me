require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);
const cardRouter = require('./src/routers/cardRouter');
const userRouter = require('./src/routers/userRouter');
const categoryRouter = require('./src/routers/categoryRouter');
const path = require('path')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT ?? 3001;

const app = express();

const sessionConfig = {
  store: new FileStore(),
  key: 'smth', 
  secret: process.env.SESSION_SECRET, 
  resave: false, 
  saveUninitialized: false, 
  httpOnly: true, 
  cookie: { expires: 24 * 60 * 60e3 },
};

const sessionParser = session(sessionConfig);
app.use(sessionParser);
app.use(fileUpload())
app.use(express.json());
app.use(express.static(path.join(process.env.PWD, 'public')))

app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(morgan('dev'));

app.use('/', categoryRouter);
app.use('/api/user', userRouter);
app.use('/api/card', cardRouter);

app.listen(PORT, () => {
  console.log(`Сервер запускается на ${PORT} порту`);
});
