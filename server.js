const { spawn } = require('child_process');
const ls = spawn('java', ['-jar', 'wiremock-standalone-2.7.1.jar']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});