import { create } from "zustand";

export type ModalStyle = "EditStaffForm" | "EditBirdForm";

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
  isAlive?: boolean;
  image: string;
  featherColor: string;
  weight: number;
};

interface ModalData {
  bird?: BirdColumn;
  staff?: StaffColumn;
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
