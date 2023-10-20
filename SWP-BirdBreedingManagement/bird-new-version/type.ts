
export enum StaffRole { STAFF = "Nhân Viên", MANAGER = "Quản Lý" }

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
    birdId: string;
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
    cageId: string;
    // user?: number;
    location?: string;
    quantity?: number;
    reproductionProcess?: Reproduction_process;
    birdReproduction?: Bird_reproduction[];
}

export interface Reproduction_process {
    processId: string;
    pairingDate?: string; // Date;
    expEggHatchDate?: string; // Date;
    expSwingBranch?: string; // Date;
    expAdultBirdDate?: string; // Date;
    totalEgg?: number;
    failEgg?: number;
    cageId?: number;
    stage?: string;
    isDone?: boolean;
    separateDate?: string; //Date
  }

  export interface Bird_reproduction {
    birdReproductionId: string;
    bird?: Bird;
    processId?: number;
    reproductionRole?: string;
    eggLaidDate?: string; // Date;
    actEggHatchDate?: string; // Date;
    actSwingBranch?: string; // Date;
    actAdultBirdDate?: string; // Date;
    eggType?: string;
    eggStatus?: string;
    isFail?: boolean;
    failDate?: string; // Date;
   
  }

  

/////////////////////
// interface User {
//     id: number;
//     username?: string;
//     email?: string;
//     password?: string;
//     fullName?: string;
//     createdDate?: string; // Date;
//     createdBy?: string;
//     role?: string;
//   }
  
//   interface Birdtype {
//     id: number;
//     name: string;
//     descriptior: string;
//     incubatePeriod?: number;
//     chickPeriod?: number;
//     swingbranchPeriod?: number;
//     lifeExpectancy?: string;
    
//   }
  
//   interface Birdcage_history {
//     id: number;
//     implDate?: string; // Date;
//     birdId?: number;
//     cageId?: number;
//   }
  
//   interface Bird {
//     birdId: number;
//     birdSex?: string;
//     hatchDate?: string; // Date;
//     ageRange?: string;
//     birdMutationNote?: string;
//     birdMutationRate?: number;
//     isAlive?: boolean;
//     birdImage?: string;
//     featherColor?: string;
//     birdWeight?: number;
//     birdType?: Birdtype; 
//     cageId?: Cage;
    
//   }
//   interface Cage {
//     cageId: number;
//     userId?: number;
//     location?: string;
//     quantity?: number;
//   }
  
//   interface Reproduction_process {
//     id: number;
//     pairingDate?: string; // Date;
//     expEggHatchDate?: string; // Date;
//     expSwingBranch?: string; // Date;
//     expAdultBirdDate?: string; // Date;
//     totalEgg?: number;
//     failEgg?: number;
//     cageId?: number;
//     stage?: string;
//     isDone?: boolean;
//     separateDate?: string; //Date
//   }
//   interface Bird_reproduction {
//     birdReproductionId: number;
//     birdId?: Bird;
//     processId?: number;
//     reproductionRole?: string;
//     eggLaidDate?: string; // Date;
//     actEggHatchDate?: string; // Date;
//     actSwingBranch?: string; // Date;
//     actAdultBirdDate?: string; // Date;
//     eggType?: string;
//     eggStatus?: string;
//     isFail?: boolean;
//     failDate?: string; // Date;
   
//   }
  
//   interface Meal {
//     id?: number;
//     birdtypeId: number;
//     foodNorm?: string;
//     food?: string;
//   }
  
  
//   interface CageReal {
//     id: number;
//     user?: User;
//     location?: string;
//     quantity?: number;
//     birds?: Bird[];
//     reproductionProcess?: Reproduction_process;
//     birdReproduction?: Bird_reproduction;
  
//   }