import { create } from "zustand";

export type ModalStyle = "EditStaffForm" | "EditBirdForm" | "EditCageForm";

type StaffColumn = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  createdAt?: string;
  role: string;
};

type BirdColumn = {
  birdId: string;
  type: string;
  sex: string;
  cage?: string;
  hatchDate: string;
  ageRange: string;
  mutation: string;
  mutationRate: number;
  isAlive: boolean;
  image: string;
  featherColor: string;
  weight: number;
};

type CageColumn = {
  cageId: string;
  user?: string;
  location: string;
  quantity: number;
};

interface ModalData {
  bird?: BirdColumn;
  staff?: StaffColumn;
  cage?: CageColumn;
}

interface ModalStore {
  type: ModalStyle | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalStyle, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
