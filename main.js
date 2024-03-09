const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  const pathToFile = path.join(__dirname, 'script.py');
  
  res.download(pathToFile, 'script.py', (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
