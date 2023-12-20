import { create } from "zustand";

enum MethodPayment {
  "pix",
  "card",
  "billet",
}

interface CheckoutStore {
  show: boolean;
  method: MethodPayment;
};

interface CheckoutState extends CheckoutStore {
    setShow: () => void;
}  

export const useExitPopupStore = create<ExitPopupStore>((set) => ({
  show: true,
  setShowExitPopUp: () => set((state) => ({ show: !state.show })),
}));
