// // import fs from "fs";

// // const jsonFile = "./src/landing_Page/user.json";

// // try {
// // 	const data = fs.readFileSync(jsonFile, "utf-8");
// // 	const parsedData = JSON.parse(data);
// // 	console.log("Valid JSON:", parsedData);
// // } catch (error) {
// // 	console.error("Invalid JSON:", error.message);
// // }
import animationuser1 from "./user.json" assert { type: "json" };

// If you want to manually parse, you can stringify it and then parse again
const animationuser = JSON.parse(JSON.stringify(animationuser1));
