const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to read from JSON file and return data
app.get('/api/users', (req, res) => {
  fs.readFile('./alertIRJsonFile.json', 'utf8', (err, jsonData) => {
    if (err) {
      res.status(500).json({ error: 'Error reading data file' });
    } else {
      const data = JSON.parse(jsonData);
      res.json(data.users);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});