document.title = "New title";

var para = document.createElement("P");                       // Create a <p> element
var t = document.createTextNode("This is a paragraph");       // Create a text node
para.appendChild(t);                                          // Append the text to <p>
document.body.appendChild(para);   