import { NextResponse } from "next/server";
import getPaymentToken from "@/lib/getPaymentToken";

export async function POST(req: Request) {
  const { brand, number, cvv, expirationMonth, expirationYear } =
    await req.json();

  const card = {
    brand,
    number,
    cvv,
    expirationMonth,
    expirationYear,
    reuse: true,
  };

  const token = await getPaymentToken(card);

  return NextResponse.json(token);
}
