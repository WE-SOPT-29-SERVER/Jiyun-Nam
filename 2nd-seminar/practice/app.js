const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//라우트 폴더안에 있는것 가져오는거
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//express 실행
const app = express();

//set은 설정하는 것, 거의 쓸 일 x
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); 

//use는 미들웨어 사용하는 것, 괄호 안에있는게 다 미들웨어
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


//이 앱을 모두 export해야 함. express를 담고있고 미들웨어를 사용한 상태. 적용한 것 까지 export. www파일에서 import됨
module.exports = app;
