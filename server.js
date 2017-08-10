var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
    
    
function createTemplete (data){
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
    
    return htmlTemplete;
    
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res)
{
    var articleName = req.params.articleName;
    res.send(createTemplete(articles[articleName]));
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
app.get('/submit-names/:name',function(req,res) {
    //get the name from the request
    var name = req.params.name;//1000
    
    names.push(name);
    //json:javascript object notation
    res.send(JSON.stringkfy(names));
    
});





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});





