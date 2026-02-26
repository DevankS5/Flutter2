import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Try to detect from CF-IPCountry header or x-vercel-ip-country
  const cfCountry =
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-vercel-ip-country") ||
    "";

  const currency = cfCountry === "IN" ? "INR" : "USD";

  return NextResponse.json({ currency, country: cfCountry });
}
