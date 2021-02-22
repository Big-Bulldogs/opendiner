const db = require("../models");


module.exports = function(app){
    app.post('/newuser', ({body}, res) => {
        db.User.create(body)
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json(err);
        });
    });

    app.post('/newrestaurant', ({body}, res) => {
        db.Restaurant.create(body)
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json(err);
        });
    });

    app.get('/user', (req, res) => {
        db.User.find({})
        .populate('reservation')
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        });
    });

    app.get('/restaurant', (req, res) => {
        db.Restaurant.find({})
        .populate({
            path: 'menu',
            populate: {
                path: 'item',
                model: 'Item'
            }
        })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        });
    });

    app.post('/newitem', ({body}, res) => {
        db.Item.create(body)
        .then(({_id}) => db.Menu.findOneAndUpdate({_id: body.menu}, { $push: { item: _id}}))
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    })

    app.post('/newreservation', ({body}, res) => {
        db.Reservation.create(body)
        .then(({_id}) => db.User.findOneAndUpdate({_id: body.user}, { $push: { reservations: _id}}))
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    })

    app.post('/newmenu', ({body}, res) => {
        db.Menu.create(body)
        .then(({_id}) => db.Restaurant.findOneAndUpdate({_id: body.restaurant}, { $push: { menu: _id}}))
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    })

    app.get('/menus', (req, res) => {
        db.Menu.find({})
        .populate('item')
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        });
    });
    
    
}
