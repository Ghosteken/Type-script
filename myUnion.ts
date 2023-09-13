let score:number | string = 33


type User = {
    name: string,
    id: number
}


type Admin = {
    username : string,
    id: number
}

//an object or var

let hitesh: User | Admin = {name: 'hitesh', id:565}

//can be redefined here to admin
hitesh = {username: 'hitesh', id:65}

// function getDBid(id:number | string) {
//         //ai calls
//         console.log(`DBID: ${id}`);
// }

getDBid(3)
function getDBid(id:number | string) {
    if (typeof id === 'string') {
        id.toLowerCase()
    }
}

//array

const data : number[] = [1,2,3]

const data2 : (string | number)[] = ['1', '2', 3]

//strict assignment
let pi:3.14 = 3.14

let seatAllotment:  'asile' | 'midddle' 

// seatAllotment =  'crew'