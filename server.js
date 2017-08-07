var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
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
    };
    
    
    
function createTemplete (data){
    var title = data.title;
     var heading = data.heading;
    var date = data.data;
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
    
    return htmlTemplete;
    
}













app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-one',function(req,res)
{
    res.send(createTemplete(articleOne));
});

app.get('/Article-two',function(req,res)
{
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/Article-three',function(req,res)
{
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
