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
  ageRange: string;
  mutation: string;
  mutationRate: number;
  isAlive: boolean;
  image: string;
  featherColor: string;
  weight: number;
  birdType: Birdtype;
  cage: Cage;
}
export interface Cage {
  cageId: string;
  location: string;
  quantity: number;
  reproductionProcess?: Reproduction_process;
  birdReproduction?: Bird_reproduction[];
  user: Staff;
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
  reproductionId: string;
  bird?: Bird;
  processId?: string;
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
