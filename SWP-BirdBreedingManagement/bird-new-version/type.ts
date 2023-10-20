
export enum StaffRole { STAFF = "Nhân Viên", MANAGER = "Quản Lý" }

export enum BirdType { than = "Chích chòe than", lua = "Chích chòe lửa" }

export interface Staff {
    id: string,
    username: string,
    email: string,
    password: string,
    fullName: string,
    createdBy?: string,
    createdDate?: string,
    role: StaffRole
}

export interface Birdtype {
    id?: number;
    name?: string;
    description?: string;
    incubate?: number;
    chick?: number;
    swingBranch?: number;
    lifeExpectancy?: string;

}
export interface Bird {
    id: number;
    sex: string;
    hatchDate?: string; // Date;
    ageRange?: string;
    mutation?: string;
    mutationRate?: number;
    isAlive?: boolean;
    image?: string;
    featherColor?: string;
    weight?: number;
    birdType?: Birdtype;
    cage?: Cage;
}
export interface Cage {
    cageId: number;
  //  userId?: number;
    location?: string;
    quantity?: number;
}