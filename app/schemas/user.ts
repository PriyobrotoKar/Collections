import mongoose from "mongoose";

const UserCredentialsSchema = new mongoose.Schema(
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

const Credentials = mongoose.models.UserCredentials || mongoose.model("UserCredentials", UserCredentialsSchema);

export default Credentials;