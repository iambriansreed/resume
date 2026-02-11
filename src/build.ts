import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import sass from 'sass';
import data from './data';
import App from './app';

const DIR = 'dist';

const html = () => renderToString(React.createElement(App));

const css = sass
    .compile('src/style.scss', {
        style: 'compressed',
    })
    .css.toString();

fs.writeFileSync(
    DIR + '/index.html',
    fs
        .readFileSync('src/index.html', 'utf8')
        .replace('/* title */', data.title)
        .replace('<!-- app -->', html())
        .replace('/* style */', css),
);
