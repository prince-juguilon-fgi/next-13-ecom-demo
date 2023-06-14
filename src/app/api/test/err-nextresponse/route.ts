import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json("This route is not implemented", {
    status: 500,
  })
};
