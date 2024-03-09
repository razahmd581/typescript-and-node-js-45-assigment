// Task 2
  let personName: string ="Eric";
 console.log("hello ${personName},wouldy you like to learn some python today?");

// // // TASK 3
let personName: string = "RAZA";

// in lowercase
console.log("lowercase:",personName.toLowerCase());

// in uppercase
console.log("uppercase:",personName.toUpperCase());

// in titlecase
console.log("titlecase:",personName.replace(/\b\w/g,c=> c.toUpperCase()));


// // // TASK 4
let quote:string ="A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

// TASK 5
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said,"${quote}"`;
console.log(message);

// TASK 6
 let personName:string = "\n\t RAZA AHMED \n\t";
 console.log("Original:", personName);
 console.log("Stripped:", personName.trim());

// TASK 7
console.log(5+3);
console.log(10-2);
console.log(2*4);
console.log(16/2);


// TASK 9

 let favouriteNumber: number = 4;
 console.log (`My favourite number is ${favouriteNumber} .`);

// TASK 10
//

Assigment solution

//TASK 11
let names: string [] = ["Ali", "haseeb", "Raza", "shahkir"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// console.log(names[3]);

// Task 12
let names: string [] = ["Ali", "haseeb", "Raza", "shahkir"];

let message : string = "Do you like to play football?"
console.log(names[0] + " " + message )
console.log(names[1] + " " + message )
console.log(names[2] + " " + message )
console.log(names[3] + " " + message )

// TASK 13
let transportation : string [] = ["Sports bike", "Corolla", "Landcroser","Audi" ];
transportation.map((items) => console.log(`I would like to own a ${items}`));

// TASK 14
let guestArr: string [] = ["Ali", "haseeb", "Wajahat"];
guestArr.map((items) => console.log(`Dear  ${items} , you are invited to dinner plz you have to come with your family and enjoy the dinner`));

//  TASk 15
 let guestArr : string [] = ["Maryam", "Taniya", "Sania", "Maria"];
 let canNotAttend : string = "Maryam"

 console.log(canNotAttend + "" "can not attend the dinner.")

 let newGuest : string = "javaria"
 
 guestArr [guestArr.indexOf(canNotAttend)]  = newGuest;
 console.log(guestArr)

guestArr.map((items) =>
console.log(`Dear ${items}, you are invited to the dinner.`)

// TASK 16
let guestArr : string [] = ["javaria", "Taniya", "Sania", "Maria"];

let canNotAttend : string = "Sania"

let newGuest : string = "Muneeba"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

guestArr.map((items) =>
console.log(`Dear ${items}, I found a bigger dinning table so I am invited more people.`)
);
Part 2 begning
let guestbeg : string ="Dua"
guestArr.unshift(guestbeg);
console.log

Part 3 Middle
let middleguest : string = "Fatima"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleguest)
console.log(guestArr)

Part 4 append
guestArr.push("Raza")
console.log(guestArr)

Part 5
guestArr.map((items) =>
console.log(`Dear ${items}, you are invited in the more people List on dinner`));

// Task 17
 let guests: string[] = ["Ali" ,"Ahmed"]
console.log("Due to Limited space, only two people invited to the diiner.");


while (guests.length > 2) {
const removedGuest = guests.pop();
console.log(`Sorry , ${removedGuest}, you're no longer to invited the diiner.`);
}

guests.forEach((guests) =>{
    console.log(`Dear ${guests}, you're still invited to the dinner. `);
});

guests.pop();
guests.pop();

console.log("Final guset list:",guests);


// Task 18
let placetovisit: string[]=["Russia","Japan","Malaysia","India","Afghanistan"]
console.log("original order:",placetovisit);

console.log("alphabetical order:",[...placetovisit].sort());

console.log("original order after sorting:",placetovisit);
console.log("reverse alphabetical order:",[...placetovisit].sort().reverse());

placetovisit.reverse();
console.log("reversed order",placetovisit);

placetovisit.sort((a,b)=>b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", placetovisit);

// Task 19
let invitation : string[]=["Raza", "Ali",];
let count_invitation : number=invitation.length;
console.log(`${count_invitation} people invited to the dinner`);


// Task 20
 let country:string[]=["Pakistan","Newzealend","America","Australia","China"];
 console.log("list of country");
 console.log(country);

// Task 21
let person:{name:string,fname:string,age:string}={name : "Raza",fname:"Ahmed habib",age:"18"};
console.log(person);

// Task 22
const day :string[]=["saturday","monday","friday","tuesday","wednesday","sunday", "thursday"];
console.log(day{7});
console.log(day[0]);

// Task 23
let car = "subaru";
 console.log("is car == 'subaru'? pedict true")
 console.log(car == 'subaru')

 console.log("is car != 'honda city'? pedict true")
 console.log(car != 'honda city')

 console.log("is car == 'subaru'? pedict false")
 console.log(car == 'Subaru')

 console.log("is car.length ==6? predict true")
 console.log(car.length==6)

 console.log("is car.length ==10? predict true")
 console.log(car.length==10)

 console.log("is car.length 10>45 predict false")
 console.log(10>45)

 console.log("is car.length 3<=2 ? predict false")
 console.log(3<=2)

 console.log("is car.length 72>61 ? predict false")
 console.log(72>61)

 console.log("is car.length 72>=83 ? predict false")
 console.log(72>=83)

console.log("is car == 'subaru' && car.length ==6? predict true")
console.log(car == 'subaru'&& car.length == 6)

// Task 24
let name_1 : string = "Raza"
let name_2 : string = "Raza Ahmed"
let name_3 : string = "Muhammad Raza"

if (name_1== name_3){
    console.log("names are equal")
} else{
    console.log("names are not equal")
}
if (name_1 !=name_2){
 console.log("names are  equal")
}

 if (name_1 !=name_3){
  console.log("names are  equal")
 }

let age_1: number=18
let age_2: number=22

if (age_1==18){
    console.log("eligble for vote")
}

if (age_1!=22){
    console.log("eligble for vote in older category")
}

if (age_1 <= age_2){  //lesser
    console.log("younger")
}

if (age_2 >= age_1){ //greater
    console.log("older")
}

if (age_1== 18 && age_2 == 22){
    console.log("person is eligble for vote")
}

if (age_1== 18 ||age_2 != 22){
    console.log("person is eligble not for vote")
}

let country : string[] = ["pakistan","India","japan","America"]
if (country.includes("pakistan")){
    console.log("pakistan is a country list")
}

if (!country.includes ("china")){
    console.log("china is not list in country")
}

// Task 25
let alien_color = "green"

if (alien_color == "green")
console.log("you earn 5 points")

let alien_color : string = "red"
if (alien_color == "green")
console.log("no output")

// Task 26
let alien_color = "green"

 if (alien_color == "green") {
 console.log("player just earn 5 points for shooting the alien")
 } else {
    console.log("player just earn 10 points")
 }

let alien_color = "pink"

 if (alien_color == "green") {
 console.log("player just earn 5 points for shooting the alien")
 } else {
    console.log("player just earn 10 points")
 }
// Task 27

let alien_color = "blue"

if (alien_color == "green") {
     console.log("5 points")
} else if ( alien_color == "yellow"){
    console.log("10 points")
}  else{
    console.log("15 points")
}

// Task 28
let age : number = 95

if (age < 2) {
    console.log ("you are a baby")
} else if (age < 4) {
    console.log ("you are a toddler")
} else if (age < 13) {
    console.log ("you are a kid")
} else if (age < 20) {
    console.log ("you are a teenager")
} else if (age < 65) {
    console.log ("you are a adult")
} else{
    console.log("you are older")
}

// Task 29

let favourite_fruits: string [] = ["kivi","mangoes","oranges","berry","peach"]

if (favourite_fruits.includes("kivi")) {
    console.log("kivi")
}
if (favourite_fruits.includes("peach")) {
    console.log("you really like banana")
}

if (favourite_fruits.includes("oranges")) {
    console.log("oranges")
}

if (favourite_fruits.includes("berry")) {
    console.log("you really like banana")
}

if (favourite_fruits.includes("mangoes")) {
    console.log("mangoes")
}

// Task 30
let users : string [] = ["admin","eric","haseeb","ali","fatima"]

for(let user of users) {
    if (user === "admin"){
        console.log(`hello admin , would you like to see a status report ?`)
    } else{
        console.log (`hello ${users}, thank you for logging again`)
    }
}

// Task 31
let users : string [] = ["admin","eric","haseeb","ali","fatima"]
if (users.length === 0) {
    console.log ("we need to find some user!")
} else {
    for (let user of users) {
        if (user === "admin") {
            console.log("hello admin , would you like to see a status report ?")
        } else {
            console.log(`hello ${users}, thank you for logging again`)
        }
    }
}

users = []
if (users.length ===0) {
    console.log("we need to find some user")
}

// Task 32 
let current_users : string [] = ["admin","Eric","Ali","Humza","fatima"]
let new_users : string [] = ["admin","fatima","Aliza","Haseeb","Noor"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_users}, that name is taken`)

    }else {
        console.log(`yes ${new_users}, is still in available list`)
    }
}

// Task 33
let numbers : number [] = [1,2,3,4,5,6,7,8,9]
for (let number of numbers) {
    if (number === 1) {
        console.log (`${number}st`)
    } else if  (number === 2) {
        console.log (`${number}nd`)
}  else if  (number === 3) {
    console.log (`${number}rd`)
} else {
    console.log (`${number}th`)
}
} 

// Task 34 
let favourite_pizza : string [] = ["chicken", "vegetable","fajitta"]
for (let pizza of favourite_pizza) {
    console.log(pizza)
}
console.log ("\n")

for (let pizza of favourite_pizza){
    console.log (`I really like ${pizza} pizza!`)
}
console.log("\n I really love pizza")

// Task 35
let animals : string [] = ["cat","lion","dog"]
for (let animal of animals) {
    console.log(animal)
}
console.log ("\n")

for (let animal of animals) {
    console.log(` A ${animal} has a tall`)
}
console.log ("\n all of these are great pets but i love cat more ")

// Task 36 

function makeShirt(size: string,text: string): void{
    console.log(`you order a ${size} shirt that says ${text}`)
}

makeShirt('large','" i love typescript"')
makeShirt('medium','"i need a big shirt')

// Task 37
function makeShirt(size: string = 'large', text:string = 'i love typescript'):void {
    console.log(`you have order a ${size}, shirt that says ${text}`)
}

makeShirt();
makeShirt('medium')

different message 
makeShirt('small' , 'I need a big shirt to wear')

// Task 38

function describe_city(city: string,country: string = 'pakistan' ):void {
    console.log(`${city} is in ${country}`)
}

describe_city('karachi')
describe_city('france', 'europe')
describe_city('lahore', 'punjab')

// Task 39
function citycountry(city: string, country: string): string {
     return `${city} , ${country}` 
}
let c1 = citycountry('lahore','pakistan')
let c2 = citycountry('tokyo','japan')
let c3 = citycountry('paris','france')

console.log(c1)
console.log(c2)
console.log(c3)

// Task 40 
function makeAlbum (artist:string, title:string): {artist:string;title:string} {
    const dictionaries = {
        artist:artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;


    }
  let album = makeAlbum("Ali","light")
  console.log(album)
  
   album = makeAlbum("bilal","red wave")
   console.log(album)
  
   album = makeAlbum("Raza", "seezbreez")
   console.log(album)

// Task 41 
function show_magicions(magicions: string[]): void {

    for(const magicion of magicions) {
        console.log(magicion.charAt(0).toUpperCase() + magicion.slice(1));

    }
 }

const magicion:string[] = ["usman", "hasseb","wahajat"];
show_magicions(magicion)

// Task 42
function make_great(magicions:string[]): void {
    for (let i = 0; i < magicions.length; i++) {
        magicions[i] = magicions[i]  + 'the great'
    }
}

const magicions2:string[] = ["usman","hasseb","wahajat"];
make_great(magicions2)
show_magicions(magicions2)

// Task 43
function make_great2(magicions: string[]): string[] {
    const greatMagicions: string[] = [];
    for (let i = 0; i < magicions.length; i++) {
        greatMagicions.push(magicions[i] + 'the great');
    }
    return greatMagicions;

}
const magicions3 : string[] = ["usman", "wahajat","hasseb"];
const greatMagicions2: string[] = make_great2(magicions3);
show_magicions(magicions3);
show_magicions(greatMagicions2);


// Task 44
function sandwich(...items: string[]): void {
    console.log("sandwich order:")
    for (let i = 0; i < items.length; i++) {
        console.log(`= ${items[i]}`)
    }
}

console.log("enjoy your sandwich Raza Ahmed")

sandwich('capsicam', 'tomato', 'chicken')
sandwich('beef', 'cheese')
sandwich('garlic chicken ' , 'mayo sauce')

// Task 45 
type car = {
    manufacture: string
    model : string
    [key: string]: any;
}
function creatCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}

const mycar : car = creatCar("toyota", "corolla", {color: "silver", year: "2024"})
console.log(mycar)