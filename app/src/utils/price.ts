import { PRECO } from "@/constants";

export const formatPrice = (after: boolean) => {
  const value = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(after ? PRECO.after : PRECO.before / 11);
  return value;
};
