add();
function add() {
    console.log(5 + 5);
}
//add();
function add1(a, b) {
    var res = a + b;
    console.log("\n    ---------------------\n    Result is " + res + "\n    ");
}
add1("Sumit", 20);
function add2(a, b) {
    console.log(a + b);
}
add2(1, 2);
//add2("sdfer",2);
function add3(a, b) {
    return (a + b);
}
var res = add3(10, 20);
console.log("\n---------------------------\nResult is " + res + "\n");
console.log(add3(20, 30));
function add4(a) {
    console.log(a);
}
//add4("Sumit");
//anonymous function
var temp = function () {
    console.log("Hello......");
};
//temp();
//Arrow Function/Fat Arrow Function
var temp1 = function () {
    console.log("Hello Hopes do U R Enjoy My Lecture!!!!!");
};
//temp1();
var temp2 = function (a, b) {
    console.log(a + b);
};
//temp2(10,20);
var temp3 = function (a, b) {
    return (a + b);
};
var res1 = temp3(30, 50);
console.log(res1);
var temp4 = function (a, b) {
    return (a + b);
};
console.log(temp4(1, 1));
console.log(temp4("dvzd", "dgsdrg"));
//optional parameter fumction
function add5(a, b) {
    return (a + b);
}
console.log(add5(1, 2));
console.log(add5(1));
function add6(a, b, c) {
    return (a + b + c);
}
console.log(add6(1, 2));
function add7(a, b, c) {
    return (a + b + c);
}
console.log(add7("Sumit"));
console.log(add6(5, 5, 5));
//Default parameter Function
function add8(a, b) {
    if (b === void 0) { b = 10; }
    console.log(a + b);
}
add8(10);
add8(10, 100);
function add9(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 10; }
    console.log(a + b);
}
add9();
add9(10);
//Function Constructor
var fun = new Function("a", "b", "console.log(a+b)");
fun(70, 70);
fun("Sumit", 70);
var fun1 = new Function("a", "b", "return (a+b)");
console.log(fun1(80, 80));
var fun2 = new Function("a", "b", "console.log(\"Addition \"+(a+b))");
console.log(fun2(80, 80));
