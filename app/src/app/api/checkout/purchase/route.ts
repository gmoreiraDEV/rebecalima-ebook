import { NextResponse } from "next/server";
import { Databases, Storage, ID } from "node-appwrite";

import client from "@/lib/appwrite";
import { PURCHASE_DB, SHOP_DB } from "@/constants";

export async function GET() {
  const db = new Databases(client);
  const promise = db.listDocuments(SHOP_DB, PURCHASE_DB);
  const res = await promise.then((res) => res).catch((e) => console.error(e));
  return NextResponse.json(res);
}

export async function POST(req: Request) {
  const { installments, installment_value, charge_id, status, total, payment } =
    await req.json();

  const db = new Databases(client);
  const promise = db.createDocument(SHOP_DB, PURCHASE_DB, ID.unique(), {
    installments,
    installment_value,
    charge_id,
    status,
    total,
    payment,
  });

  const res = await promise.then((res) => res).catch((e) => console.error(e));
  return NextResponse.json(res);
}
