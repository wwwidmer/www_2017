var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('prod', (process.env.PROD || false));

app.locals.RBP = {
	api_prefix: app.get('prod') ? 'https://agile-earth-31601.herokuapp.com/': 'http://127.0.0.1:8000/'
};

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.use(express.static(__dirname + '/public'));


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/blog/', function(request, response) {
    response.render('pages/blog');
});

app.get('/blog/:postid', function(request, response) {
    response.render('pages/post_detail', {post_id: 1})
})

app.listen(app.get('port'), function() {
  console.log('Node (production:', !!(app.get('prod')),') app is running on port', app.get('port'));
});
