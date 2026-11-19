import mongoose from "mongoose";
import dns from "dns";

// Force Node.js to use Google's DNS to bypass ISP/system DNS
// that blocks mongodb+srv:// SRV record lookups (querySrv ECONNREFUSED fix)
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectMongoDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is required. Set it in Backend/.env before starting the API.");
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectMongoDB;