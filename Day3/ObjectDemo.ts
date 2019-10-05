//json
//SOAP vs REST
//simple Object/JSON
var person={
    firstname:"Sumit",
    lastname:"Raokhande",
    id:1
}

console.log(person.firstname);
console.log(person.lastname);
console.log(person.id);

var Empolyee={
    firstname:"Hefshine",
    lastname : "PVT LTD ",
    fulname : (fname,lname)=>{
        return (fname+" "+lname);
    }
};
console.log(`
--------------------
Empolyee Full Name is ${Empolyee.fulname(Empolyee.firstname,Empolyee.lastname)}
`);

var calsal={
    basicsal:50000,
    hra:8000,
    ta:5000,
    totalsal:(bs,hra,ta)=>{
        return (bs+hra+ta);
    }
};

console.log(`
---------------------Salary Calculation-------------
    ${calsal.totalsal(calsal.basicsal,calsal.hra,calsal.ta)}
`);

//multitype array

var multiobj=[
    {
        firstname:"Arun",
        lastname:"Pawar",
        id:1
    },
    {
        firstname:"Suyog",
        lastname:"Shinde"
    },
    {
        firstname:"Sumit",
        lastname:"Raokhande"
    }
];

console.log(`
-------------Information-------------
${multiobj[0].firstname}
`);

for (let index = 0; index < multiobj.length; index++) {
    
    console.log(`
    ---------------------
    ${multiobj[index].firstname}
    ${multiobj[index].lastname}
    ${multiobj[index].id}
    `);

    
}

for (let index = 0; index < multiobj.length; index++) {
        console.log(`
    ----------Print All Object -----------
    ${multiobj[index]}   
    `);

}
var jsonobj={
    status:"success",
    data:[
        {
            productname:"Perfume",
            brand:"Renuka Group",
            price:120,
            quantity:"30ml"
        },
        {
            productname:"Utane",
            brand:"Renuka Group",
            price:30,
            quantity:"30gm"
        },
        {
            productname:"Shahi Utane",
            brand:"Renuka Group",
            price:50,
            quantity:"30gm"
        }
    ],
    error:"Error is occur"
}

var temp=jsonobj.status;

if(temp==="success"){
    console.log("Status is "+jsonobj.status);
}

for (let index = 0; index < jsonobj.data.length; index++) {
    console.log(`
    ----------------
    ${jsonobj.data[index].productname}
    ${jsonobj.data[index].brand}
    `);
    
}


