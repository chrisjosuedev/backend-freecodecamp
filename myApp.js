require("dotenv").config();
require("./db/connection");

const Person = require("./models/PersonSchema");

const createAndSavePerson = (done) => {
    const person = new Person({
        name: "Chris",
        age: 24,
        favoriteFoods: ["Baleadas", "Pollo Frito", "Lasagna"],
    });
    person.save((err, data) => {
        if (err) return done(err);
        done(null, data);
    });
};

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, data) => {
        if (err) return done(err);
        done(null, data);
    });
};

const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (err, data) => {
        if (err) return done(err);
        done(null, data);
    });
};

const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, (err, data) => {
        if (err) return done(err);
        done(null, data);
    });
};

const findPersonById = (personId, done) => {
    done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";

    done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    done(null /*, data*/);
};

const removeById = (personId, done) => {
    done(null /*, data*/);
};

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";

    done(null /*, data*/);
};

const queryChain = (done) => {
    const foodToSearch = "burrito";

    done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
