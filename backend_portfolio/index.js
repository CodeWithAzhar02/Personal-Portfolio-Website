const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Portfolio Backend is running');
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate request
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // TODO: Integrate Nodemailer here
    console.log("Received contact form submission:", { name, email, subject, message });

    res.status(200).json({ message: "Email sent successfully (simulated)" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
