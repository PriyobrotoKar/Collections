import mongoose, { models, Schema } from "mongoose";

const UserCredentials = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

const Credentials = models.UserCredentials || mongoose.model("userCredentials", UserCredentials);
export default Credentials;