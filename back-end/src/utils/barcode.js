const jsBarcode = require('jsbarcode');
const { createCanvas } = require('canvas');
const fs = require('fs');

const canvas = createCanvas();

const generateBarcodePNG = (text) => {

    jsBarcode(canvas, text);

    const id = Math.random().toString(36).substr(2, 9);
    const filePath = `${__dirname}/../../dist/${id}.png`;
    const out = fs.createWriteStream(filePath);

    const stream = canvas.createPNGStream();

    stream.pipe(out);

    return new Promise((resolve, reject) => {

        out.on('finish', () => {
            
            console.log('The PNG file was created.');

            resolve(filePath);
        });

        out.on('error', (err) => {

            console.error(err);

            reject(err);
        });
    });
}

module.exports = {
    generateBarcodePNG
}