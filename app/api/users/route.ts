import { User } from "@/database";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { UserSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();
        const users = await User.find();

        return NextResponse.json({ success: true, data: users }, { status: 200 });
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}

//create User
export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json()
        const validetedData = UserSchema.safeParse(body)
        if (!validetedData.success) {
            throw new ValidationError(validetedData.error.flatten().fieldErrors);
        }
        const { username, email } = validetedData.data;
        const existingUser = await User.findOne({ email });
        if (existingUser) throw new Error("Email already exists");
        
        const existingUsername = await User.findOne({ username });
        if (existingUsername) throw new Error("Username already exists");
        
        const newUser = await User.create(validetedData.data);
        return NextResponse.json({ success: true, data: newUser }, { status: 200 });
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}


