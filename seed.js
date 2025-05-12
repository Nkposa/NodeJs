const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err) {
    if (err) {
        console.error("MongoDB connection error: " + err);
    } else {
        console.log("MongoDB Connection Successful");
        seedDatabase();
    }
});

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: String,
    id: Number,
    description: String,
    image: String,
    velocity: String,
    distance: String
});

const planetModel = mongoose.model('planets', dataSchema);

const planets = [
    { id: 1, name: 'Mercury', description: 'The smallest planet', image: 'mercury.jpg', velocity: '47.87 km/s', distance: '57.91 million km' },
    { id: 2, name: 'Venus', description: 'The hottest planet', image: 'venus.jpg', velocity: '35.02 km/s', distance: '108.2 million km' },
    { id: 3, name: 'Earth', description: 'Our home planet', image: 'earth.jpg', velocity: '29.78 km/s', distance: '149.6 million km' },
    { id: 4, name: 'Mars', description: 'The red planet', image: 'mars.jpg', velocity: '24.07 km/s', distance: '227.9 million km' },
    { id: 5, name: 'Jupiter', description: 'The largest planet', image: 'jupiter.jpg', velocity: '13.07 km/s', distance: '778.5 million km' },
    { id: 6, name: 'Saturn', description: 'The planet with rings', image: 'saturn.jpg', velocity: '9.69 km/s', distance: '1.43 billion km' },
    { id: 7, name: 'Uranus', description: 'The ice giant', image: 'uranus.jpg', velocity: '6.81 km/s', distance: '2.87 billion km' },
    { id: 8, name: 'Neptune', description: 'The farthest planet', image: 'neptune.jpg', velocity: '5.43 km/s', distance: '4.5 billion km' },
    { id: 9, name: 'Pluto', description: 'The dwarf planet', image: 'pluto.jpg', velocity: '4.74 km/s', distance: '5.9 billion km' }
];

function seedDatabase() {
    planetModel.insertMany(planets, function(err, docs) {
        if (err) {
            console.error("Error seeding database: " + err);
        } else {
            console.log("Database seeded successfully with planets data.");
            mongoose.connection.close();
        }
    });
}
