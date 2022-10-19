//jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pets');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });



const Owner = mongoose.model('Owner', { name: String });

const ownername = new Owner({ name: 'Eduardo' });

const BredPit = new Owner({ name: 'BredPit' });

const Jonifer = new Owner({ name: 'Jonifer' });

const Anna = new Owner({ name: 'Anna' });


// kitty.save();
// ownername.save();
// Owner.insertMany([BredPit, Jonifer, Anna], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully saved owners");
//     }
// });

Cat.find(function(err, cats) {
    if (err) {
        console.log(err);
    } else {
        cats.forEach(function(Cat) {
            const catName = Cat.name ;
            console.log(catName);
        });
    }
});



































