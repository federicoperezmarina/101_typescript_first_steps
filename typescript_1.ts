//Object Types
const poet = {
    born: 1935,
    name: "Mary Oliver",
};

poet['born'];
poet.name;

//Declaring Object Types
let poetLater: {
    born: number;
    name: string;
};

poetLater = {
    born: 1935,
    name: "Mary Oliver",
};

//Aliased Object Types
type Poet = {
    born: number;
    name: string;
};

let poetLater2: Poet;

// Ok
poetLater2 = {
    born: 1935,
    name: "Sara Teasdale",
};