import { model, models, Schema } from "mongoose";

interface IUser {
    name: string;
    username: string;
    email: string;
    password: string;
    image: string;
    bio: string;
    location: string;
    porfolio: string;
    reputation: number;
}
const UserSchema = new Schema<IUser>({
    name: { type: String, require: true },
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    image: { type: String, require: true },
    bio: { type: String },
    location: { type: String },
    porfolio: { type: String },
    reputation: { type: Number, default: 0 }
}, { timestamps: true })

const User = models?.User || model<IUser>("User", UserSchema);

export default User;