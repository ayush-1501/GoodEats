const { spawn } = require('child_process');

function calculateFactorial(req, res) {
    const number = parseInt(req.params.number);
    
    const child = spawn('../factorial');
    
    child.stdin.write(`${number}\n`);
    child.stdin.end();
    
    let result = '';
    
    child.stdout.on('data', (data) => {
        result += data.toString();
    });
    
    child.on('close', () => {
        res.json({ result: parseInt(result) });
    });
}

module.exports = { calculateFactorial };