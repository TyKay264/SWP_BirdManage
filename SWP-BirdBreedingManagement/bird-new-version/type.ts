export enum StaffRole {
  STAFF = "Nhân Viên",
  MANAGER = "Quản Lý",
}

// export enum BirdType {
//   than = "than",
//   lua = "lua",
// }

export interface Staff {
  userId: string;
  username: string;
  email: string;
  password: string;
  fullName: string;
  createdBy?: string;
  createdDate?: string;
  role: StaffRole;
}

export interface Birdtype {
  typeId: string;
  name: string;
  description?: string;
  incubate?: number;
  chick?: number;
  swingBranch?: number;
  lifeExpectancy?: string;
}
export interface Bird {
  birdId: string;
  sex: string;
  hatchDate: Date; // Date;
  swingBranchDate: Date;
  adultBirdDate: Date;
  ageRange: string;
  mutation: string;
  mutationRate: number;
  superReproduct: number;
  isAlive: boolean;
  image: string;
  featherColor: string;
  weight: number;
  birdType: Birdtype;
  cage: Cage;
  cageId?: string;
  father?: Bird;
  mother?: Bird;
  birdTypeName: string;
  descendants?: Bird;
}
export interface Cage {
  cageId: string;
  location: string;
  quantity: number;
  available: boolean;
  reproductionProcess?: Reproduction_process;
  birdReproduction?: Bird_reproduction[];
  user: Staff;
  bird: Bird[];
}

export interface Reproduction_process {
  processId: string;
  pairingDate?: string; // Date;
  eggLaidDate?: string;

  expEggHatchDate?: string; // Date;
  expSwingBranchDate?: string; // Date;
  expAdultBirdDate?: string; // Date;

  totalEgg?: number;
  failEgg?: number;
  stage?: string;
  isDone: boolean;
  separateDate?: string; //Date
  cage: Cage;
  eggsList: Bird_reproduction[];
  cageId: string;
  birdTypeName: string;
  // cockReproduction: Bird_reproduction;
  // henReproduction: Bird_reproduction;
  henId: string;
  cockId: string;
}
export interface Bird_reproduction {
  reproductionId: string;
  bird: Bird;
  processId?: string;
  reproductionRole?: string;
  eggLaidDate: string; // Date;
  actEggHatchDate?: string; // Date;
  actSwingBranch?: string; // Date;
  actAdultBirdDate?: string; // Date;

  expEggHatchDate?: string; // DATE
  expSwingBranchDate?: string; // DATE
  expAdultBirdDate?: string; // DATE

  eggType?: string;
  eggStatus: string;
  fail: boolean;
  failDate?: string; // Date;
  reproductionProcessId: string;
}

export interface BirdTypeProccess {
  typeId: string;
  name: string;
  description?: string;
  incubate?: number;
  chick?: number;
  swingBranch?: number;
  lifeExpectancy?: string;
  hen: Bird[];
  cock: Bird[];
}

export interface DashBoard {
  totalBird: number;
  totalMutation: number;
  totalProcess: number;
  totalEgg: number;
  totalUser: number;
  totalAdult: number;
  totalSwingbranch: number;
  totalBaby: number;
  top5Birds: Bird[];
  totalEggIn7Day: {
    perDay: {
      eggLaidDate: string;
      totalSucessEgg: number;
      totalFailEgg: number;
    }[];
  };
  reproduction_process: Reproduction_process[];
}

/******** COLUMN TABLE ********/
export type StaffColumn = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  createdAt?: string;
  role: string;
};

export type BirdColumn = {
  birdId: string;
  type: string;
  sex: string;
  cageId: string;
  location: string;
  hatchDate: string;
  ageRange: string;
  mutation: string;
  mutationRate: number;
  isAlive: boolean;
  image: string;
  featherColor: string;
  weight: number;
};

export type CageColumn = {
  cageId: string;
  user?: string;
  location: string;
  quantity: number;
  available: boolean;
};

export type ProcessColumn = {
  id: string;
  motherId: string;
  fatherId: string;
  cage: string;
  type: string;
  isDone: boolean;
  eggList: Bird_reproduction[];
};

export type EggColumn = {
  birdId: string;
  reproductionId: string;
  eggLaidDate?: string;
  eggStatus: string;

  actEggHatchDate?: string;
  actSwingBranch?: string;
  actAdultBirdDate?: string;

  expEggHatchDate?: string;
  expSwingBranchDate?: string;
  expAdultBirdDate?: string;
};
