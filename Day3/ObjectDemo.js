//json
//SOAP vs REST
//simple Object/JSON
var person = {
    firstname: "Sumit",
    lastname: "Raokhande",
    id: 1
};
console.log(person.firstname);
console.log(person.lastname);
console.log(person.id);
var Empolyee = {
    firstname: "Hefshine",
    lastname: "PVT LTD ",
    fulname: function (fname, lname) {
        return (fname + " " + lname);
    }
};
console.log("\n--------------------\nEmpolyee Full Name is " + Empolyee.fulname(Empolyee.firstname, Empolyee.lastname) + "\n");
var calsal = {
    basicsal: 50000,
    hra: 8000,
    ta: 5000,
    totalsal: function (bs, hra, ta) {
        return (bs + hra + ta);
    }
};
console.log("\n---------------------Salary Calculation-------------\n    " + calsal.totalsal(calsal.basicsal, calsal.hra, calsal.ta) + "\n");
//multitype array
var multiobj = [
    {
        firstname: "Arun",
        lastname: "Pawar",
        id: 1
    },
    {
        firstname: "Suyog",
        lastname: "Shinde"
    },
    {
        firstname: "Sumit",
        lastname: "Raokhande"
    }
];
console.log("\n-------------Information-------------\n" + multiobj[0].firstname + "\n");
for (var index = 0; index < multiobj.length; index++) {
    console.log("\n    ---------------------\n    " + multiobj[index].firstname + "\n    " + multiobj[index].lastname + "\n    " + multiobj[index].id + "\n    ");
}
for (var index = 0; index < multiobj.length; index++) {
    console.log("\n    ----------Print All Object -----------\n    " + multiobj[index] + "   \n    ");
}
var jsonobj = {
    status: "success",
    data: [
        {
            productname: "Perfume",
            brand: "Renuka Group",
            price: 120,
            quantity: "30ml"
        },
        {
            productname: "Utane",
            brand: "Renuka Group",
            price: 30,
            quantity: "30gm"
        },
        {
            productname: "Shahi Utane",
            brand: "Renuka Group",
            price: 50,
            quantity: "30gm"
        }
    ],
    error: "Error is occur"
};
var temp = jsonobj.status;
if (temp === "success") {
    console.log("Status is " + jsonobj.status);
}
for (var index = 0; index < jsonobj.data.length; index++) {
    console.log("\n    ----------------\n    " + jsonobj.data[index].productname + "\n    " + jsonobj.data[index].brand + "\n    ");
}
