// controllers/additionController.js
const { spawn } = require('child_process');

function addNumbers(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const num3 = parseInt(req.params.num3);

    const child = spawn('C:/Users/AYUSH/OneDrive/Desktop/new/addition');

    child.stdin.write(`${num1} ${num2} ${num3}\n`);
    child.stdin.end();

    let result = '';

    child.stdout.on('data', (data) => {
        result += data.toString();
    });

    child.on('close', () => {
        res.json({ result: parseInt(result) });
    });
}

module.exports = { addNumbers };
