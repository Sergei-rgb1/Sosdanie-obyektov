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



// var chevy = {
//     make: "Chevy",
//     model: "Bel air",
//     year: 1957,
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 1021,
//     started: false,

//     start: function() {
//         this.started = true;
//     },

//     stop: function() {
//         this.started = false;
//     },

//     drive: function() {
//         if (this.started = false) {
//             console.log(this.make + " " +
//                 this.model + " goes zoom zoom!");
//         } else {
//             console.log("Start the engine first.");
//         }
//     }
// };

// var fiat = {
//     make: "Fiat",
//     model: "5000",
//     year: 1957,
//     color: "Medium Blue",
//     passengers: 2,
//     convertible: false,
//     mileage: 88000,
//     started: false,

//     start: function() {
//         this.started = true;
//     },

//     stop: function() {
//         this.started = false;
//     },

//     drive: function() {
//         if (this.started = false) {
//             console.log(this.make + " " +
//                 this.model + " goes zoom zoom!");
//         } else {
//             console.log("Start the engine first.");
//         }
//     }
// };



// var taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341,
//     started: false,

//     start: function() {
//         this.started = true;
//     },

//     stop: function() {
//         this.started = false;
//     },

//     drive: function() {
//         if (this.started = false) {
//             console.log(this.make + " " +
//                 this.model + " goes zoom zoom!");
//         } else {
//             console.log("Start the engine first.");
//         }
//     }
// };


// // var cadi = { make: "GM",
// //                     model: "Cadillac",
// //                     year: 1955,
// //                     color: "tan",
// //                     passengers: 5,
// //                     convertible: false,
// //                     mileage: 12892,
// //                     started: false,

// //                     start: function() {
// //                         this.started = true;
// //                     },

// //                     stop: function() {
// //                         this.started = false;
// //                     },

// //                     drive: function() {
// //                         if (this.started = false) {
// //                             console.log(this.make + " " +
// //                                 this.model + " goes zoom zoom!");
// //                         } else {
// //                             console.log("Start the engine first.");
// //                         }
// //                     }
// //                 };


// var chevy = new Car("Chevy", "Bel Air", "1957", "red", 2, false, 1021);
// var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
// var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
// var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);




                var cadiParams = { make: "GM",
                    model: "Cadillac",
                    year: 1955,
                    color: "tan",
                    passengers: 5,
                    convertible: false,
                    mileage: 12892,};
            var cadi = new Car(cadiParams);                    

var cars = [cadi];

for(var i = 0; i < cars.length; i++) {
    cadi.start();
    cadi.drive();
    cadi.drive();
    cadi.stop();
}


function Car (params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible
    this.mileage = params.mileage;
    this.started = false;

    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started) {
            alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first");
        }
    };

}












