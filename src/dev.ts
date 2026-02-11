//@ts-check
import { execSync } from 'child_process';
import express from 'express';
import fs from 'fs';
import open from 'open';

// remove dist/index.html redirect to pdf

const DIR = 'dist';

fs.writeFileSync(
    DIR + '/index.html',
    fs
        .readFileSync(DIR + '/index.html', 'utf8')
        .replace('<meta http-equiv="Refresh" content="0; URL=/Resume_Reed_Brian.pdf" />', ''),
);

const app = express();
app.use(express.static('dist'));

app.listen(3002, async () => {
    console.log('App is running on http://localhost:3002');
    await open('http://localhost:3002', { wait: true });
});

fs.watch(
    'src',
    {
        recursive: true,
    },
    async function (_event, filename) {
        if (!filename) return;

        console.log('rebuilding');
        execSync('npm run build', { stdio: 'inherit' });

        fs.writeFileSync(
            DIR + '/index.html',
            fs
                .readFileSync(DIR + '/index.html', 'utf8')
                .replace('<meta http-equiv="Refresh" content="0; URL=/Resume_Reed_Brian.pdf" />', ''),
        );

        console.log('rebuild done');

        console.log('Changes detected, rebuilding...');
        console.log('App is running on http://localhost:3002');
    },
);
