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
    console.time(`cpp-${req.query.no}`)
    // console.log('request received');

    addon.processData(req.query.no, () => {
        //! response from c++
        console.timeEnd(`cpp-${req.query.no}`)
        res.send('done');
    })

    // console.log(`call initiated`);

});

// //! multi threading
// app.get('/cppParallel', (req, res) => {
//     console.time('cppParallel')
//     let counter = 0
//     //! hard coded for 10,000 example
//     for (let i = 0; i < 10; i++) {
//         //! use c++ function
//         addon.processData(req.query.no / 10, () => {
//             //! response from c++
//             counter++;
//             if (counter == 10) {
//                 console.timeEnd('cppParallel')
//                 res.send('done');
//             }
//         })
//     }
// });

app.listen(3000, () => console.log('listening on port 3000!'));