const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ received: true, data: req.body });
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Webhook server running on port 3000');
});
