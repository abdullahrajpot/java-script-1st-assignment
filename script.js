// Alert Name ...................................................................................................

document.getElementById("alertName").onclick = function () {
    
    alert('Abdullah Tariq');


    document.getElementById("output").innerHTML = "";
}

// Alert Number .................................................................................................

document.getElementById("alertNumber").onclick = function () {

    alert(+923007965044);

    
    document.getElementById("output").innerHTML = "";
}

// Show Variables Names .........................................................................................

document.getElementById("variableNames").onclick = function () {

    document.getElementById("statement").innerHTML = "";

    document.getElementById("output").innerHTML = "";

    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and  <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string \"Floribundas\" to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li></ul>";

    document.getElementById("output").innerHTML = html;
}

// Show camelCaseExamples .......................................................................................

document.getElementById("camelCaseExamples").onclick = function () {

    document.getElementById("statement").innerHTML = "";

    document.getElementById("output").innerHTML = "";

    let html = "<h3>Examples</h3><ul><li><code>User</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>";

    document.getElementById("output").innerHTML = html;
}

// Sum 2 Numbers ................................................................................................

document.getElementById("sum2Numbers").onclick = function () {

    document.getElementById("statement").innerHTML = "";

    document.getElementById("output").innerHTML = "";

    let num1 = 400;

    let num2 = 100;

    let sum = num1 + num2;
    
    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let sum = num1 + num2;"

    document.getElementById("statement").innerHTML = statement; 

    document.getElementById("output").innerHTML = "<p class='text-center'>" + sum + "</p>";
}

// Subtract 2 Numbers ...........................................................................................

document.getElementById("subtract2Numbers").onclick = function () {

    document.getElementById("statement").innerHTML = "";

    document.getElementById("output").innerHTML = "";

    let num1 = 400;

    let num2 = 100;
    
    let subtract = num1 - num2;

    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let subtract = num1 - num2;"

    document.getElementById("statement").innerHTML = statement;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + subtract + "</p>";
}

// Multiply 2 Numbers ...........................................................................................

document.getElementById("multiply2Numbers").onclick = function () {

    document.getElementById("statement").innerHTML = "";

    document.getElementById("output").innerHTML = "";

    let num1 = 25;

    let num2 = 10;

    let multiply = num1 * num2;

    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let multiply = num1 * num2;"

    document.getElementById("statement").innerHTML = statement;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + multiply + "</p>";
}

// Divide 2 Numbers .............................................................................................

document.getElementById("divide2Numbers").onclick = function () {

    document.getElementById("statement").innerHTML = "";

    document.getElementById("output").innerHTML = "";

    let num1 = 64;

    let num2 = 8;

    let divide = num1 / num2;

    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let divide = num1 / num2;"

    document.getElementById("statement").innerHTML = statement;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + divide + "</p>";
}

// calculateSomeNumbers .........................................................................................

document.getElementById("calculateSomeNumbers").onclick = function () {

    document.getElementById("statement").innerHTML = "";

    document.getElementById("output").innerHTML = "";

    let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);

    let statement = "let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);";

    document.getElementById("statement").innerHTML = statement;

    document.getElementById("output").innerHTML = "<p class='text-center'>" + someCalculation + "</p>";
}

// Clear Statement ..............................................................................................

document.getElementById("clearStatementButton").onclick = function () {

    document.getElementById("statement").innerHTML = "";

}

// Clear Output / Result ........................................................................................

document.getElementById("clearOutputButton").onclick = function () {

    document.getElementById("output").innerHTML = "";
    
}