import mongoose from "mongoose"

try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Connect Database");
} catch (error) {
    console.log("Error Connecting Database: " + error);
}