const seedingData = require('./seeding.json');

// Connect to MongoDB
db = connect("mongodb://admin:password@mongo:27017/movies");

// Select the database
db = db.getSiblingDB("movies"); // Select or create a database named "movies".

// Empty the existing movies collection
db.movies.drop(); 

// Insert seed data
const result = db.movies.insertMany(seedingData); 
