import { create } from "zustand";

export type ModalStyle = "EditStaffForm" | "EditBirdForm"

type StaffColumn = {
    id: string,
    username: string;
    email: string;
    fullname: string;
}

type BirdColumn = {
    id: string,
    username: string;
    email: string;
    fullname: string;
}


interface ModalData {
    data?: StaffColumn | BirdColumn
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