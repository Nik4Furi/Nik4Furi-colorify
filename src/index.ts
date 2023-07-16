
//---------------- To log the messages according to the function call----------------X
export class log{

    //----------- Show success messages
    static success(msg:string){
        console.log(`%c ${msg} `,`color:green`);
    }

    //----------- Show error messages
    static danger(msg:string){
        console.log(`%c ${msg} `,`color:red`);
    }

    //----------- Show info messages
    static info(msg:string){
        console.log(`%c ${msg} `,`color:balck; background:yellow`);
    }
}