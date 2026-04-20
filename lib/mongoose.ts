import mongoose from "mongoose";
import logger from "./logger";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null };
    
}

const dbConnect = async () => {
    if (cached.conn) return cached.conn;

    cached.conn = await mongoose.connect(MONGODB_URI, {
        dbName: "devflow",
    });
    logger.info("MongoDB connected");
    return cached.conn;
};

export default dbConnect;
