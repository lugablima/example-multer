import express, { json, urlencoded } from "express";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(cors(), json(), urlencoded({ extended: true }));

const upload = multer({ dest: "uploads/" });

app.post('/sign-up', upload.single("photo"), (req, res) => {
    res.json(req.file);
});

app.listen(5000, () => {
    console.log("The server is running on port 5000");
});