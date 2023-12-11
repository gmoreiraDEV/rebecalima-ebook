import { create } from "zustand";

type ExitPopupStore = {
  show: boolean;
  setShowExitPopUp: () => void;
};

export const useExitPopupStore = create<ExitPopupStore>((set) => ({
  show: true,
  setShowExitPopUp: () => set((state) => ({ show: !state.show })),
}));
