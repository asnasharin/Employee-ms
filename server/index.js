import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { EmployeeModel } from './utils/db.js';

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT"],
    credentials: true
}));

mongoose.connect('mongodb://127.0.0.1:27017/employee');

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.find({ email: email })
        .then(users => {
            if (users.length > 0) {
                const user = users[0]; // Assuming email is unique, get the first user
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("password is incorrect");
                }
            } else {
                res.json("No record found");
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json("An error occurred");
        });
});

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employee => res.json(employee))
        .catch(err => {
            console.log(err);
            res.status(500).json("An error occurred");
        });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
