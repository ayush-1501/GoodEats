const express = require('express');
const factorialController = require('./controllers/factorialController');
const additionController = require('./controllers/additionController');

const app = express();

app.get('/factorial/:number', factorialController.calculateFactorial);
app.get('/add/:num1/:num2/:num3', additionController.addNumbers);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});