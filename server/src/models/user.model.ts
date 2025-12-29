import { Model, Schema } from "mongoose";
import { hashPassword } from "../utils/bcrypt.js";

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
});

userSchema.pre("save", async function () {
	if (!this.isModified("password")) return;

	this.password = await hashPassword(this.password);
});

const User = new Model('User', userSchema);

export default User;