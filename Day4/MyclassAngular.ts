export class MyAngular{
    

constructor(private firstname:string,public lastname:string){

}

display(){
    console.log(`
    ------------Display Info---------------
    First Name ${this.firstname}
    Last Name ${this.lastname}

    ----------------------------
    

    `);
}

}