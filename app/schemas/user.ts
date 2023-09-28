import mongoose from "mongoose";

const UserCredentials = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            default: "na",
            required: true
        },
        badges: {
            type: String,
            default: "na",
            required: true
        }
    },
    { timestamps: true }
);

const Credentials = mongoose.models.UserCredentials || mongoose.model("UserCredentials", UserCredentials);

export default Credentials;