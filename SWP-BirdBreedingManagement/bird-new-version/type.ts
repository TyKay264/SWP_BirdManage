

export enum StaffRole { staff = "STAFF", maneger = "MANAGER" }

export interface Staff {
    id: string,
    username: string,
    email: string,
    password?: string,
    fullName: string,
    createdBy?: string,
    createdDate?: string,
    role: StaffRole
}

// export interface BirdType {
//     id: string,
//     name: string,
//     incubate: number,
//     chick: number,
//     swingBranch: number,
//     lifeExpectancy?: string,
//     description?: string
// }

// export interface Cage {
//     id: string,
//     location: string;
//     quantity: number;
// }


// export interface Bird {
//     id: string;
//     birdType: BirdType,
//     cage: Cage

// }