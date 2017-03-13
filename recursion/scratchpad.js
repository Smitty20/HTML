document.title = "JS Recusion";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "monospace";
document.body.style.width = "40000px";
document.body.style.whiteSpace = "nowrap";
document.body.style.overflowX = "scroll";
document.body.style.overflowY = "scroll";


var FibDiv = document.createElement("div");
document.body.appendChild(FibDiv); 

var PellDiv = document.createElement("div");
document.body.appendChild(PellDiv); 

var TribDiv = document.createElement("div");
document.body.appendChild(TribDiv);



function createFib(n, color){
    var value;
    var div = document.createElement("div");
    var background = "#" + color;
    div.style.backgroundColor = background;
    if(n < 2){
        if(n == 0){
         value = 0;
        }
        else if(n == 1){
            value = 1;
        }
         var p = document.createElement("p");
        p.textContent = "fib("+n+") = " + value;
        div.appendChild(p);
    }
    else{
        var left = createFib(n - 1, color - 1111);
        var right = createFib(n - 2, color - 1111);
        
        value = left.value + right.value;
        
        var p = document.createElement("p");
        p.textContent = "fib("+n+") = " + value;
        div.appendChild(p);
        
        left.html.style.float =  "left";
        left.html.style.display = "inline-block";
        left.html.style.width = "50%";
        
        right.html.style.float = "right";
        right.html.style.display = "inline-block";
        right.html.style.width = "50%";
        
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    
    return {'value': value, 'html': div}
}
    
function createPell(n, color){
    var value;
    var div = document.createElement("div");
    var background = "#" + color;
    div.style.backgroundColor = background;
    if(n < 2){
        if(n == 0){
         value = 0;
        }
        else if(n == 1){
            value = 1;
        }
         var p = document.createElement("p");
        p.textContent = "Pell("+n+") = " + value;
        div.appendChild(p);
    }
    else{
        var left = createPell(n - 1, color - 1111);
        var right = createPell(n - 2, color - 1111);
        
        value = left.value + right.value;
        
        var p = document.createElement("p");
        p.textContent = "Pell("+n+") = " + value;
        div.appendChild(p);
        
        left.html.style.float =  "left";
        left.html.style.display = "inline-block";
        left.html.style.width = "50%";
        
        right.html.style.float = "right";
        right.html.style.display = "inline-block";
        right.html.style.width = "50%";
        
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    
    return {'value': value, 'html': div}
}

function createTrib(){
    
}

var Fib = function (n, node){
    var content = createFib(n, 999999);
    node.appendChild(content.html);
}

var Pell = function (n, node){
    var content = createPell(n, 999999);
    node.appendChild(content.html);
} 

var Trib = function (n, node){
    var content = createTrib(n, 999999);
    node.appendChild(content.html);
} 

Fib(11, FibDiv);
Pell(11, PellDiv);