import { model, Schema } from "mongoose";

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

const User = model("User", userSchema);

export default User;
