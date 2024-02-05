const superHeros: string[] = []  // syntax
const powers: Array<number> = [] 

superHeros.push("Spiderman");
powers.push(89);

type Heros = {
    name: string,
    power: number
}

const allHeros: Heros[] = [];

let hero1: Heros = {
    name : "Batman",
    power : 84
}

allHeros.push(hero1);
// allHeros.push({});

console.log(powers)
console.log(allHeros)


// 2D matrix

const image: number[][] = [
    [255,255,255],
    []
]

console.log(image)

export {}