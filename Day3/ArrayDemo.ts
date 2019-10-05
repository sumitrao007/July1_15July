var arr=[1,2,3,4];

var arr1:string[]=["Sumit","Kiran","Spruha"];

arr1.forEach((element,i) => {
    console.log(element);
    console.log(i);
});


var arr3:number[]=[];
arr3.push(12);
arr3.push(14);
arr3.push(15);
arr3.push(13);
//LIFo=Last in First Out
arr3.forEach(element=>{
    console.log(element);
});
var temp=arr3.pop();
console.log("Poped value is "+temp);
console.log(arr3);

var arr4:number[]=[];

arr4.push(20);
arr4.push(30);
arr4.push(40);
arr4.push(50);

console.log(arr4);

arr4.splice(2,1);
//console.log("Deleted One Element in array "+arr4);

arr4.splice(2,0,60,90,100);
//console.log("Added Element in array "+arr4);
arr4.splice(3,0,110);
// console.log("Added Element in array "+arr4);
// console.log("---------------------------");

console.log(arr4);
arr4.splice(3,1,111,112);

//console.log("Added Element in array "+arr4);

var temp1:number[]=arr4.slice(2,4)

// console.log(`
//     ${arr4}
// ------------------
//     ${temp1}
// `);

var temp2=arr4.slice();

// console.log(`
//     ${arr4}
// -------Without passing Index-----------
//     ${temp2}
// `);

//It is not Possible plz Check it on your end also
var temp3=arr4.slice(0,2) && arr4.slice(3,5);

// console.log(`
//     ${arr4}
// -------With passing Index 2 Times -----------
//     ${temp3}
// `);

//rest parameter function

function myrestpara(...num:number[]){

    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        console.log(`
        -----------------------
        ${element}
        `);        
    }
}

//myrestpara(11,12);
//myrestpara(11,12,13,14,15,16,17,18,19,20);

//tuple

var arr5:any[]=[1,"Sumit",true,10.2,"Hefshine"]

console.log(arr5);

var arr6:number[]=[1,2,3,4,5];

  var temp4= arr6.map(element=>{
        return element*element;
    });
console.log(arr6);
console.log("--------------------------");
console.log(temp4);


var temp5=arr6.map((element,index)=>{

    if(index==2){
        return element*element;
    }else{
        return element;
    }

});
console.log(`
------------------Temp 5 ----------------------
        ${temp5}
`);

function getsquare(num:number):number{
    return (num*num);
}

var temp6=arr6.map(getsquare);

console.log(`
------------------Temp 6 ----------------------
        ${temp6}
`);


