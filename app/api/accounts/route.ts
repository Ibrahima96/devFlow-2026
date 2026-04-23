import { Account } from "@/database";
import handleError from "@/lib/handlers/error";
import { ForbiddenError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { AccountSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();
        const accounts = await Account.find();

        return NextResponse.json({ success: true, data: accounts }, { status: 200 });
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}


export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json()
        const validetedData = AccountSchema.parse(body)

        const existingAccount = await Account.findOne({
            provider: validetedData.provider,
            providerAccountId: validetedData.providerAccountId
        });
        if (existingAccount) throw new ForbiddenError("Account already exists");

        const newAccount = await Account.create(validetedData);
        return NextResponse.json({ success: true, data: newAccount }, { status: 201 });
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}
