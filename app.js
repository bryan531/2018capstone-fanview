const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      exphbs = require('express-handlebars'),
      expressValidator = require('express-validator'),
      favicon = require('serve-favicon');
      flash = require('express-flash'),
      multer = require('multer'),
      session = require('express-session'),
      passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      mongo = require('mongodb'),
      mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fanviewdb');
const db = mongoose.connection,
      app = express();




db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Successfully connected to database.');
});




app.use(favicon(path.join(__dirname,'public','images','logo.png')));



// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, '/public')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));

const routes = require('./routes/index');
const users = require('./routes/users');
const stadiums = require('./routes/stadiums');


// Bodyparser / Cookieparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());





app.use(session({
  secret: 'mg57713qwpo3ejfrsd10dg129391',
  saveUninitialized: true,
  resave: true
}));



app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(function (req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



app.use('/', routes);
app.use('/users', users);
app.use('/stadiums', stadiums);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});







const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


