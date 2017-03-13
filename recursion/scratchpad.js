document.title = "JS Recusion";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "monospace";
document.body.style.width = "10000px";
document.body.style.whiteSpace = "nowrap";
document.body.style.overflowX = "scroll";
document.body.style.overflowY = "scroll";

var links = document.createElement("div");
links.appendChild(newlink("Fibonacci", "https://oeis.org/A000045"))
links.appendChild(newlink("Pell", "https://oeis.org/A000129"))
links.appendChild(newlink("Tribonacci", "https://oeis.org/A000073"))
document.body.appendChild(links);
links.style.textAlign = "left";


var FibDiv = document.createElement("div");
document.body.appendChild(FibDiv); 


var PellDiv = document.createElement("div");
document.body.appendChild(PellDiv); 
PellDiv.style.marginTop = "400px";


var TribDiv = document.createElement("div");
document.body.appendChild(TribDiv);
TribDiv.style.marginTop = "500px";

function newlink(series, link){                         //function for the hrefs
    var a = document.createElement("a");
    var words = document.createTextNode(series);
    a.appendChild(words);
    a.href = link;
    
    a.style.margin = "20px";
    return a;
}

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
        var left = createPell(n - 1, color - 110011);
        var right = createPell(n - 2, color - 110011);
        
        value = (2 * left.value) + right.value;
        
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

function createTrib(n, color){
    var value;
    var div = document.createElement("div");
    var background = "#" + color;
    div.style.backgroundColor = background;
    if(n < 2){
        if(n <= 0){
         value = 0;
        }
        else if(n == 1){
            value = 1;
        }
         var p = document.createElement("p");
        p.textContent = "Trib("+n+") = " + value;
        div.appendChild(p);
    }
    else{
        var left = createTrib(n - 1, color - 111100);
        var mid = createTrib(n - 2, color - 111100);
        var right = createTrib(n - 3, color - 111100);
        
        value = left.value + right.value + mid.value;
        
        var p = document.createElement("p");
        p.textContent = "Trib("+n+") = " + value;
        div.appendChild(p);
        
        left.html.style.float =  "left";
        left.html.style.display = "inline-block";
        left.html.style.width = "33%";
        
        mid.html.style.float = "right";
        mid.html.style.display = "inline-block";
        mid.html.style.width = "33%";
        
        right.html.style.float = "right";
        right.html.style.display = "inline-block";
        right.html.style.width = "33%";
        
        div.appendChild(left.html);
        div.appendChild(mid.html);
        div.appendChild(right.html);
    }
    
    return {'value': value, 'html': div}
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

Fib(6, FibDiv);
Pell(6, PellDiv);
Trib(6, TribDiv);