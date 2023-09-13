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

const hiteshh: Useri = {
    dbid: 22, email: 'h@a.com', userid: 222,
    startTral: () => {
        return 'started'
    },
    getCoupon: (name:'sixgod', ) => {
        return 0 
    }
}


hiteshh.email ='d@a.com';
