import { NextResponse } from "next/server";
import EFI from "sdk-typescript-apis-efi";
import { Databases, ID } from "node-appwrite";

import { credentialsEFI } from "@/lib/EFI";
import client from "@/lib/appwrite";
import { PURCHASE_DB, SHOP_DB } from "@/constants";
const efi = new EFI(credentialsEFI);
const db = new Databases(client);

export async function POST(req: Request) {
  const { payment } = await req.json();
  
  const chargeCreate: Promise<{ installments: string
    installment_value: string
    charge_id: string
    status: string
    total: string
    payment: string }> = efi
    .createOneStepCharge([], payment)
    .then((res: Promise<{
      installments: string
      installment_value: string
      charge_id: string
      status: string
      total: string
      payment: string      
    }>) => {
      return res
    })
    .catch((error: Promise<any>) => {
      console.log(error);
    });

    const saveCharge = db.createDocument(SHOP_DB, PURCHASE_DB, ID.unique(), {
      chargeCreate.installments
      chargeCreate.installment_value,
      chargeCreate.charge_id,
      chargeCreate.status,
      chargeCreate.total,
      chargeCreate.payment,
    });
  
    const res = await saveCharge.then((res) => res).catch((e) => console.error(e));
   
  return NextResponse.json(res);
}
