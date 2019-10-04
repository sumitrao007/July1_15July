var a = [1, 2, 3, 4];
for (var index = 0; index < a.length; index++) {
    //const element = a[index];
    console.log(a[index]);
}
//for each
// a.forEach((element1,i)=> {
//     console.log(`
//     -------------
//     a[${i}]=${element1}
//     `);
// });
var a1 = [10, 20, 30, 40, 50];
a1.forEach(function (element1, i) {
    console.log("\n    -------------\n    a[" + element1 + "]\n    \n    ");
});
