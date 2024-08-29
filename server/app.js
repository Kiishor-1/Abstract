if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const database = require('./config/db');
const cardRoutes = require('./routes/Card')
const footerRoutes = require('./routes/footerRoutes');

database.dbConnect();

// Middleware
app.use(
    cors({
        origin: process.env.FRONT_END,
        credentials: true,
    })
);
app.use(express.json());

// Routes
app.use('/api/cards', cardRoutes);
app.use('/api/footer', footerRoutes);

app.get("/", (req, res) => {
    res.send('standard root');
});

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
