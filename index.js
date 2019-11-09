const express = require('express');
const app = express();

// ? javascript library to generate qr code
var QRCode = require('qrcode')

app.get('/nodejs', async (req, res) => {
    console.time('nodejs')

    for (let index = 0; index < req.query.no; index++) {
        let qrCode = await QRCode.toDataURL('testing')
    }
    console.timeEnd('nodejs')
    res.send('done');
});

//! include c++ addon
const addon = require('bindings')('addon.node');

app.get('/cpp', (req, res) => {
    console.time('cpp')
    //! use c++ function
    addon.processData(req.query.no, () => {
        //! response from c++
        console.timeEnd('cpp')
        res.send('done');
    })
});

app.listen(3000, () => console.log('listening on port 3000!'));