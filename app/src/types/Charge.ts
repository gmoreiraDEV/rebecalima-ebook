import { PaymentToken } from "./PaymentToken";

export enum Payment {
  "credit_card",
  "banking_billet",
  "pix",
}

export enum ChargeStatus {
  "waiting",
}

type ChargeItem = {
  name: string;
  value: number;
  amount: number;
};

type Customer = {
  name: string;
  cpf: string;
  email: string;
  birth: string;
  phone_number: string;
};

type BillingAddress = {
  street: string;
  number: string;
  neighborhood: string;
  zipcode: string;
  city: string;
  complement: string;
  state: string;
};

type CardPayment = {
  customer: Customer;
  installments: number;
  payment_token: PaymentToken;
  billing_address: BillingAddress;
};

export interface ChargeCardRequest {
  items: ChargeItem[];
  payment: {
    credit_card: CardPayment;
  };
}

export interface ChargeCardResponse {
  code: number;
  data: {
    installments: number;
    installment_value: number;
    charge_id: string;
    status: ChargeStatus.waiting;
    total: number;
    payment: Payment.credit_card;
  };
}

type BilletPayment = {
  customer: Omit<Customer, "birth"> & BillingAddress;
  installments: number;
  expire_at: Date;
  configurations?: {
    fine: number;
    interest: number;
  };
  message: string;
};

export interface ChargeBilletRequest {
  items: ChargeItem[];
  payment: {
    banking_billet: BilletPayment;
  };
}

export interface ChargeBilletResponse {
  code: number;
  data: {
    barcode: string;
    pix: {
      qrcode: string;
      qrcode_image: string;
    };
    link: string;
    billet_link: string;
    pdf: {
      charge: string;
    };
    expire_at: Date;
    charge_id: string;
    status: ChargeStatus.waiting;
    total: number;
    payment: Payment.banking_billet;
  };
}
