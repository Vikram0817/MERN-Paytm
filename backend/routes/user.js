const { Router } = require("express");
const User = require("../db");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const { JWT_SECRET } = require("../config");

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
});

const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string()
});

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
    const body = req.body;
    
    const { success } = signupSchema.safeParse(body);
    const dbCheck = await User.findOne({ username: body.username });
    
    if (success && !dbCheck) {
        await User.create(body);
        const token = jwt.sign({ userId: body._id }, JWT_SECRET);
        // Corrected: Use res.json instead of json.res
        res.json({ message: "User created successfully", token: token });
    } else {
        res.status(411).json({ message: "Email already taken / Incorrect inputs" });
    }
});

userRouter.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    const { success } = signinSchema.safeParse(req.body);

    if (!success) {
        res.status(411).json({ msg: "Invalid credentials" });
        return;
    }

    const check = await User.findOne({ username, password });
    
    if (check) {
        const token = jwt.sign({ userId: check._id }, JWT_SECRET);
        res.json({ token: token });
    } else {
        res.status(411).json({ msg: "User not found" });
    }
});

module.exports = userRouter;