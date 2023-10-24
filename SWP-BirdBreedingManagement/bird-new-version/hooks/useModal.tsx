import { BirdColumn, CageColumn, StaffColumn } from "@/type";
import { create } from "zustand";

export type ModalStyle =
  | "EditStaffForm"
  | "EditBirdForm"
  | "EditCageForm"
  | "EditProcessForm";

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
