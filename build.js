const childProcess = require('child_process');

if (process.platform !== 'darwin') return;
childProcess.execSync('swift build --configuration=release');
childProcess.execSync('mv .build/release/do-not-disturb .');
