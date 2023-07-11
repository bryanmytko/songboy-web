import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get("password");
  const url = new URL("/", request.url);
  console.log(url.toString())

  if (process.env.PASSWORD_PROTECT === password) {
    const cookie = serialize("login", "true", {
      path: "/",
      httpOnly: true,
    });

    const response = NextResponse.next();
    response.headers.set("Set-Cookie", cookie);
    return NextResponse.redirect(url);
  } else {
    url.searchParams.append("error", "Incorrect password!");
    return NextResponse.redirect(url);
  }
}