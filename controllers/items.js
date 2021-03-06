const express = require('express');
const itemsRouter = express.Router();


const Item = require('../models/item');





itemsRouter.get('/seed', async (req, res) => {
    const data = [{
            name: 'Xbox 360',
            brand: 'Microsoft',
            description: `The console works fine but the tray is sticky. It
             comes with a headset, av cable, and power adapter and the controller.`,
            qty: 5
        },
        {
            name: 'Airpod Pro Left Earbud',
            brand: 'Apple',
            description: `Works well but I lost my case and other earbud so I have just the left one remaining.
            `,
            qty: 1
        },
        {
            name: 'Macbook Pro',
            brand: 'Apple',
            description: 'tbd',
            qty: 1
        },
        {
            name: 'Air Filter',
            brand: 'Veva',
            description: 'tbd',
            qty: 1
        },
    ];
    await Item.deleteMany({});
    await Item.create(data);
    res.redirect('/items');
});


itemsRouter.get('/destroy-data', async (req, res) => {
    await Item.deleteMany({});
    res.redirect('/items');
});


// Index Route
itemsRouter.get('/', (req, res) => {
    Item.find({}, (err, items) => {
        res.render('index.ejs', {
            items
        });
    });
});


// New Route
itemsRouter.get('/new', (req, res) => {
    res.render('new.ejs');
});


// Delete Route

itemsRouter.delete('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, deletedItem) => {
        res.redirect('/items');
    });
});

// Update route

itemsRouter.put('/:id', (req, res) => {
    req.body.sold = !!req.body.sold; // !!'on' === true || !!undefined === false
    Item.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true
        },
        (err, item) => {
            res.redirect(`/items/${req.params.id}`)
        });
});


// Create Route
itemsRouter.post('/', (req, res) => {
    console.log(req.body)
    if (req.body.sold === 'on') {
        req.body.sold = true;
    } else {
        req.body.sold = false;
    }
    Item.create(req.body, (err, item) => {
        res.redirect('/items');
    });
});


// Edit route

itemsRouter.get('/:id/edit', (req, res) => {
    Item.findById(req.params.id, (err, item) => {
        res.render('edit.ejs', {
            item
        });
    });
});


// Show route

itemsRouter.get('/:id', (req, res) => {

    Item.findById(req.params.id, (err, item) => {
        res.render('show.ejs', {
            item
        });
    });
});


module.exports = itemsRouter;