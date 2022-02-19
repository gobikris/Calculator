//DOM task to create a Calculator

//Initially all the inputs inside the calculator is created using createElement
let div = document.createElement("div");
div.className = "calculator-grid";
document.body.style.backgroundColor = "pink";



div.id = "cal";
document.getElementsByTagName("body")[0].appendChild(div);

var innerDiv = document.createElement("div");
innerDiv.className = "output";
div.appendChild(innerDiv);

var input = document.createElement("input");
input.className = "inp";
input.id = "input";
input.value = "";
innerDiv.appendChild(input);

var btn = document.createElement("button");
btn.className = "clear"
btn.id = "btnC";
btn.textContent = "C";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "number";
btn.id = "←";
btn.value = "←";
btn.textContent = "←";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis.";
btn.className="operator"
btn.value = ".";
btn.textContent = ".";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis*";
btn.className = "operator";
btn.value = "*";
btn.textContent = "x";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "number";
btn.id = "dis7";
btn.value = "7";
btn.textContent = "7";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "number";
btn.id = "dis8";
btn.value = "8";
btn.textContent = "8";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "number";
btn.id = "dis9";
btn.value = "9";
btn.textContent = "9";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis/";
btn.className = "operator";
btn.value = "/";
btn.textContent = "/";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "number";
btn.id = "dis4";
btn.value = "4";
btn.textContent = "4";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "number";
btn.id = "dis5";
btn.value = "5";
btn.textContent = "5";
div.appendChild(btn)

var btn = document.createElement("button");
btn.className = "number";
btn.id = "dis6";
btn.value = "6";
btn.textContent = "6";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis-";
btn.className = "operator";
btn.value = "-";
btn.textContent = "-";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "number";
btn.id = "dis1";
btn.value = "1";
btn.textContent = "1";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "number";
btn.id = "dis2";
btn.value = "2";
btn.textContent = "2";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "number";
btn.id = "dis3";
btn.value = "3";
btn.textContent = "3";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis+";
btn.className = "operator";
btn.value = "+";
btn.textContent = "+";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "number";
btn.id = "dis0";
btn.value = "0";
btn.textContent = "0";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "number";
btn.id = "dis00";
btn.value = "00";
btn.textContent = "00";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "span-two";
btn.id = "equal";
btn.textContent = "=";
div.appendChild(btn);

//Declaring a condition by passing a function for the clear button
document.getElementById("btnC").onclick = function () { clear() };

function clear()
{
document.getElementById("input").value = ""
}

//Declaring a condition by passing a function for the back button
document.getElementById("←").onclick = function () {back()}
function back() {
    var value = document.getElementById("input").value;
    document.getElementById("input").value = value.substr(0, value.length - 1);
}

//Declaring a condition by passing a function for the equal button
document.getElementById("equal").onclick = function () { equal() };
function equal() {
    let x = document.getElementById("input").value;
    let y = eval(x);
    document.getElementById("input").value = y;
}

//Finally executing all the elements
document.getElementById("dis.").onclick = function () { dis('.')}
document.getElementById("dis*").onclick = function () { dis('*')}
document.getElementById("dis7").onclick = function () { dis('7')}
document.getElementById("dis8").onclick = function () { dis('8')}
document.getElementById("dis9").onclick = function () { dis('9')}
document.getElementById("dis/").onclick = function () { dis('/')}
document.getElementById("dis4").onclick = function () { dis('4')}
document.getElementById("dis5").onclick = function () { dis('5')}
document.getElementById("dis6").onclick = function () { dis('6')}
document.getElementById("dis-").onclick = function () { dis('-')}
document.getElementById("dis1").onclick = function () { dis('1')}
document.getElementById("dis2").onclick = function () { dis('2')}
document.getElementById("dis3").onclick = function () { dis('3')}
document.getElementById("dis+").onclick = function () { dis('+')}
document.getElementById("dis0").onclick = function () { dis('0')}
document.getElementById("dis00").onclick = function() { dis('00')}
document.getElementById("input").onkeypress = function typing(event){
         let show = document.getElementById("input");
         if(event.key==="Enter"){
             (show.value==="") ? alert("Enter Numbers to CALCULATE"): equal();
        }
         else if(!(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*")){
             alert("type only numbers");
            event.preventDefault();
        }
    }

function dis(val) {
    document.getElementById("input").value += val
}