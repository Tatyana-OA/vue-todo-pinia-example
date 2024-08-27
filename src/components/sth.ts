let munch: string = "Munch";

munch = 3335;

interface Munch {
  name: string;
  age: number;
}

interface BiggerMunch extends Munch {
  munchLevel: number;
}

let anotherMunch: BiggerMunch = {
  name: "Muncho",
  age: 10,
  munchLevel: 9,
};

type Muncho = {};

interface Game {
  players: String[];
  scores: Scores[];
}

type Scores = {
  score: number;
  id: number;
};

const game: Game = {
  players: ["Pesho", "Gosho"],
  scores: [
    { score: 1, id: 1 },
    { score: 200, id: 2 },
  ],
};
