import { create } from "zustand";

export type ExitPopupStoreType = {
  show: boolean;
  setShowExitPopUp: () => void;
};

export const useExitPopupStore = create<ExitPopupStoreType>((set) => ({
  show: true,
  setShowExitPopUp: () => set((state) => ({ show: !state.show })),
}));
