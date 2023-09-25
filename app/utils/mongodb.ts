import mongoose from "mongoose";

export const Connection = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODBURL}`);
        console.log("Database Connected")
    } catch (error) {
        console.log(error);
    }
};