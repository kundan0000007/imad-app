
window.onload = function(){
    document.getElementById("subm").onclick=function(){
        alert("Hello WOrld");
    };
var img = document.getElementById('madi') ;

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft = 'px';
}
img.onClick = function(){
    var interval = setInterval(moveRight, 100);
};

//counter code
var button = document.getElementById('counter');

button.onClick = function() {
    //create a request object 
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 500){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
    
    //make the requesft
    request.open('GET','http://kkumar00346.imad.hasura-app.io/',true);
    request.send(null);
};
}
;

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit.btn');
submit.onclick = function () {
    //make a request to the server and send the name
    
    //capture a list of name and render it as a list
    var names = ['name1','name2','name3'];
    var list = '';
    for (var i=0; i<names.length;i++)
    {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
    
};




