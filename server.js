var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user:  'kkumar00346',
    database: 'kkumar00346',
    host: 'db.imad.hasura-app.io',
    password: process.env.DB_PASSWORD,
};

var app = express();
app.use(morgan('combined'));

var articles = {
        'article-one': {
            title: 'Article one | kd003',
            heading: 'Article one',
            date: 'august 7, 2017',
            content: `
                    <p> 
            This is my first article.this is my first article.this is my first article.this is my first article. this is my first article.
                    This is my first article.this is my first article.this is my first article.
                     </p> 
                     <p> 
            This is my first article.this is my first article.this is my first article.this is my first article. this is my first article.
                    This is my first article.this is my first article.this is my first article.
                     </p> 
                     <p> 
            This is my first article.this is my first article.this is my first article.this is my first article. this is my first article.
                    This is my first article.this is my first article.this is my first article.
                     </p> `
            },
        'article-two': {
            title: 'Article two | kd003',
            heading: 'Article two',
            date: 'august 7, 2017',
            content: `
                    <p> 
            This is my two article.this is my first article.this is my first article.this is my first article. this is my first article.
                    This is my first article.this is my first article.this is my first article.
                     </p> 
                     <p> 
            This is my two article.this is my first article.this is my first article.this is my first article. this is my first article.
                    This is my first article.this is my first article.this is my first article.
                     </p> 
                     <p> 
            This is my two article.this is my first article.this is my first article.this is my first article. this is my first article.
                    This is my first article.this is my first article.this is my first article.
                     </p> `
        },
        'article-three': {
            title: 'Article three | kd003',
            heading: 'Article three',
            date: 'august 7, 2017',
            content: `
                    <p> 
            This is my third article.this is my first article.this is my first article.this is my first article. this is my first article.
                    This is my first article.this is my first article.this is my first article.
                     </p> 
                     <p> 
            This is my third article.this is my first article.this is my first article.this is my first article. this is my first article.
                    This is my first article.this is my first article.this is my first article.
                     </p> 
                     <p> 
            This is my third article.this is my first article.this is my first article.this is my first article. this is my first article.
                    This is my first article.this is my first article.this is my first article.
                     </p> `
        }
};
    
    
function createTemplate (data){
    var title = data.title;
     var heading = data.heading;
    var date = data.date;
    var content = data.content;
            var htmlTemplete = `
           <html>
                <head>
                    <title>
                        ${title}
                    </title>
                    <meta name="viewport" content="width_device-width,initial-scale-1"/>
                    <link href="/ui/style.css" rel="stylesheet" />
                </head>
            <body >
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
            </body>
            </html>
    `;
    
    return htmlTemplate;
    
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res)
{
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


var pool = new Pool(config);
app.get('/test-db',function (req, res){
    //make a select request
    //return a response with the results
    pool.query('SELECT * FROM test', function (err, result){
        if(err){
            res.status(500).send(err.toString());
        } else{
            res.send(JSON.stringify(result));
        }
    });
});







var counter = 0;
app.get('/counter', function(req,res) {
    counter = counter + 1;
   res.send(counter.toString()); 
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-names', function(req,res) {
    //get the name from the request
    var name = req.query.name;//1000
    
    names.push(name);
    //json:javascript object notation
    res.send(JSON.stringify(names));
    
});





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(80,function () {
  console.log(`IMAD course app listening on port ${port}!`);
});





