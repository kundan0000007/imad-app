
var img = document.getElementById('madi') ;

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft = 10;
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
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
    
    //make the requesft
    request.open('GET','http://kkumar00346.imad.hasura-app.io/counter',true);
    request.send(null);
};