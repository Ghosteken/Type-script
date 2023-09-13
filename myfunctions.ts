import { log } from "console";

function addTwo(num: number): number{
    return num + 2;
    //return 'hello world';
    
}

function getUer(val:string) {
    return val.toLocaleUpperCase()    
}


let loginuser = (name:string, email:string, isfetched:boolean = false) => {}

loginuser('name', 'email',false)


getUer('foo')


addTwo(5) 

// function getvalue(myval:number):string | boolean {
//     if (myval > 0) {
//         return true
//     }
//     return '00 ok'
// }

const gethello = (s:string):string =>{
    return ''
}

const heros = ['thor','starbot','goddam']

heros.map((hero):string =>{
    return `${hero}`

})

function consoleError(errmsg:string):void {
    console.log(errmsg);
        
}

//or

function handleError(errmsg:string):never {
    throw new Error(errmsg);    
}





export {}