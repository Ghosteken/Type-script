interface Useri {
    readonly dbid: number,
    email: string,
    userid: number,
    google_id?: number,
    // startTral: () => string 

    //method
    startTral(): string
    getCoupon(coponname:string): number
}

//reopening of the interface
interface Useri{
    githubToken:string
}
//inheritance

interface Admin extends Useri {
    role: 'admin' | 'ta'| 'learner'
}

const hiteshh: Admin = {
    dbid: 22, email: 'h@a.com', userid: 222,
    githubToken: '123',
    startTral: () => {
        return 'started'
    },
    getCoupon: (name: 'sixgod') => {
        return 0
    },
    role: "admin"
}


hiteshh.email ='d@a.com';
