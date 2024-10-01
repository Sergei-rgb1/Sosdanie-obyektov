// var dog = {
//     name: "Fido",
//     breed: "Mixed",
//     weight: 38,
// };

// var dog = {
//     name: "Flyffy",
//     breed: "Poodle",
//     weight: 30,
// };

// var dog = {
//     name: "Spot",
//     breed: "Chihuahua",
//     weight: 10,
// };


// // var fido = new dog("Fido", "Mixed", 38);
// // var fluffy = new dog("Flyffy", "Poodle", 30);
// // var spot = new dog("Spot", "Chihuahua", 10)

// // for (var i = 0; i < dog.lenght; i++) {
// //     dog[i].bark();
// // }




// function dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function() {
//         if (this.weight > 25) {
//             alert(this.name + " говорит Гав!");
//         } else {
//             alert(this.name + "Говорит Йип!")
//         }
//     };
// }



var chevy = {
    make: "Chevy",
    model: "Bel air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started = false) {
            console.log(this.make + " " +
                this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first.");
        }
    }
};

var fiat = {
    make: "Fiat",
    model: "5000",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started = false) {
            console.log(this.make + " " +
                this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first.");
        }
    }
};



var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started = false) {
            console.log(this.make + " " +
                this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first.");
        }
    }
};


var cadi = { make: "GM",
                    model: "Cadillac",
                    year: 1955,
                    color: "tan",
                    passengers: 5,
                    convertible: false,
                    mileage: 12892,
                    started: false,

                    start: function() {
                        this.started = true;
                    },

                    stop: function() {
                        this.started = false;
                    },

                    drive: function() {
                        if (this.started = false) {
                            console.log(this.make + " " +
                                this.model + " goes zoom zoom!");
                        } else {
                            console.log("Start the engine first.");
                        }
                    }
                };


var cars = [chevy, cadi, taxi, fiat];

for(var i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].stop();
}

var chevy = new Car("Chevy", "Bel Air", "1957", "red", 2, false, 1021);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);



function Car(make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.mileage = mileage;
    this.started = false;

    this.start = function() {
        this.started = true;
    };
}
















