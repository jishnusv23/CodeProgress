import mongosee from "mongodb";
import { config } from "dontenv";
config();

export default async () => {
  console.log(process.env.MOGNOU_URL);
  try {
    await mongosee.connect(String(process.env.MOGNOU_URL).trim(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected successfully");
  } catch (err) {
    console.error('mongodb Connection throw error',err);
    throw new Error(err.message)
    
  }

};
