
add();



function add(){
    console.log(5+5);
}

//add();

function add1(a,b){

    let res=a+b;
    console.log(`
    ---------------------
    Result is ${res}
    `);

}

add1("Sumit",20);

function add2(a:number,b:number){

  
    console.log(a+b);
}

add2(1,2);

//add2("sdfer",2);

function add3(a:number,b:number):number
{
    return (a+b);
}

var res=add3(10,20);
console.log(`
---------------------------
Result is ${res}
`)

console.log(add3(20,30));

function add4(a:string):void{
    console.log(a);
}

//add4("Sumit");

//anonymous function

var temp=function(){
    console.log("Hello......");
}

//temp();

//Arrow Function/Fat Arrow Function

var temp1=()=>{
    console.log("Hello Hopes do U R Enjoy My Lecture!!!!!");
}

//temp1();

var temp2=(a:number,b:number)=>{
    console.log(a+b);
}

//temp2(10,20);


var temp3=(a:number,b:number):number=>{
    return (a+b);
}


var res1=temp3(30,50);
console.log(res1);

var temp4=(a:any,b:any):number=>{
    return (a+b);
}

console.log(temp4(1,1));
console.log(temp4("dvzd","dgsdrg"));


//optional parameter fumction

function add5(a:number,b?:number):number{

    return (a+b);
}

console.log(add5(1,2));
console.log(add5(1));

function add6(a:number,b?:number,c?:number):number{

    return (a+b+c);
}

console.log(add6(1,2));


function add7(a:string,b?:string,c?:number):string{

    return (a+b+c);
}

console.log(add7("Sumit"));
console.log(add6(5,5,5));


//Default parameter Function

function add8(a:number,b:number=10){
    
    console.log(a+b);
}

add8(10);
add8(10,100);

function add9(a:number=0,b:number=10){
    
    console.log(a+b);
}

add9();
add9(10);

//Function Constructor

var fun=new Function("a","b","console.log(a+b)");

fun(70,70);
fun("Sumit",70);

var fun1=new Function("a","b","return (a+b)");

console.log(fun1(80,80));

var fun2=new Function("a","b","console.log(\"Addition \"+(a+b))");

console.log(fun2(80,80));


