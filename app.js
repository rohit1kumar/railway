const express = require('express');
const mongoose = require('mongoose');
const signup = require('./routes/user');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('working');
});
app.use('/register', signup);

const url = process.env.MONGODB_URL || 'mongodb://localhost:27017/registration';
mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.log("Error: ", error.message));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});