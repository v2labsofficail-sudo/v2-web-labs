// app/api/leads/route.ts

import { NextResponse } from "next/server";

import crypto from "crypto";

function generateSignature(
  requestBodyString: string,
  timestamp: string,
  appKey: string,
  signSecret: string,
) {
  const rawAppKeyBytes = Buffer.from(appKey, "hex");
  const timestampBytes = Buffer.from(timestamp);
  const signSecretBytes = Buffer.from(signSecret, "hex");

  const combinedBytes = Buffer.concat([
    rawAppKeyBytes,
    timestampBytes,
    signSecretBytes,
  ]);

  const dynamicKey = crypto
    .createHash("sha256")
    .update(combinedBytes)
    .digest();

  return crypto
    .createHmac("sha256", dynamicKey)
    .update(requestBodyString)
    .digest("hex");
}

export async function POST(req: Request) {
  const payload = await req.json();

  const APP_KEY = process.env.CLIENT_APP_KEY!;
  const SECRET = process.env.API_SIGN_SECRET!;

  const timestamp = Math.floor(Date.now() / 1000).toString();


  const requestBodyString = JSON.stringify(payload);

  const signature = generateSignature(
    requestBodyString,
    timestamp,
    APP_KEY,
    SECRET
  );

  const response = await fetch(
    `http://madhavsolutions.tech/api/leads`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-App-Key": APP_KEY,
        "X-Timestamp": timestamp,
        "X-Signature": signature,
      },
      body: requestBodyString,
    }
  );

  return NextResponse.json(await response.json());
}