const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const fileUpload = require('express-fileupload');

const usersRouter = require('./controllers/users.controller.js'); //handle user signup / login/ logout
const productsRouter = require('./controllers/products.controller.js') //handle admin functionallity of products put/patch/delete
const ordersRouter = require('./controllers/orders.controller.js') //handle user order

const app = express();

//passport config
require('./auth/passport-conf.js')(passport);

// const env = require("./env/development-env");
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser('passport'));
app.use(fileUpload());

//define express session properties
app.use(session({
  secret: 'passport',
  cookie: { maxAge: 10000 * 60,
            httpOnly: true
          },
 resave: false,
 saveUninitialized: false,
 store: new MongoStore({url: 'mongodb://localhost:27017/supermarket'})
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());


//route to users controller
app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/products', productsRouter);

//declare and initialize port and mongo path variables
const port = process.env.PORT || 4000;
const mongoPathway = 'mongodb://localhost:27017/supermarket';

app.use(express.static('./dist/supermarket-front'));

//listen to port
const listen = () => {
  app.listen(port, () => {
    console.log(`Server Up! port ${port}`);
  });
}

//init by first connecting to mongo and then listening using the listen function
const init = async () => {
  try{
    mongoose.connect(mongoPathway, {useNewUrlParser: true}, err => {
      listen()
    });
    // mongoose.set('debug', true);
  }
  catch(err) {
    console.log(err)
  }
}


app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/supermarket-front', 'index.html'))
})

init();
