// // const User ={ 
// //     name: 'name',
// //     email: 'email',
// //     isActive: false,
// // }

import { type } from "os"


// // function createUser({name:string,isfetched:boolean}){

// // } 

// // let newUser = {name:'hitesh', isPaid:false, email:'h@hitesh.com',}

// // // when passing to objects, arguments must be simmilar

// // createUser({name:'nameo',isfetched:false})

// // function createCourse(): {name:string,price:number}{
// //     return {name:'nextjs',price:655}
// // }

// //TYPE Aliases

// type User = {
//     name:string,
//     email:string,
//     isActive:boolean
// }

// //type Mystring = string

// function createUser(user: User):User{
//     return {name:'',email:'',isActive:true}
// }

// createUser({name:'',email:'',isActive:true})

type User = {
    readonly _id:string
    name:string,
    email:string,
    isActive:boolean
    //optional datatype or property name
    credcardDetails?:number
}

type cardNumber = {
    cardNumber:string
}

type cardDate = {
    cardDate:string
}

 

type cardDetails = cardNumber & cardDate & {
    cvv:number
}


let myUser: User = {
    _id:'51183',
    name:'h',
    email:'h@h.com',
    isActive:false

} 

myUser.email = 'h@dh.com'
// myUser._id = '5118'


export {}