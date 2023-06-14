import { NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";

const bodySchema = z.object({
  baz: z.string(),
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    await bodySchema.parseAsync(body);

    return NextResponse.json({
      status: 200,
      data: { foo: "bar" },
    });
  } catch (e) {
    if (e instanceof ZodError) {
      return NextResponse.json({
        status: 400,
        data: { error: e.issues },
      });
    }

    return NextResponse.json({
      status: 500,
      data: { error: "Something went wrong" },
    });
  }
};
