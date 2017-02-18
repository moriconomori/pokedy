var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var attack = getRandomPokemonType();
  var defense = getRandomPokemonType();

  res.render('onetoone', {
    attack: attack,
    attackName: typeName[attack],
    defense: defense,
    defenseName: typeName[defense]
  });
});

router.post('/answer', function(req, res, next) {
  var attack = req.body.attack;
  var defense = req.body.defense;
  var choosed = req.body.answer;

  res.render('correct', {
    attack: attack,
    attackName: typeName[attack],
    defense: defense,
    defenseName: typeName[defense],
    choosed: effect[choosed],
    correct: isCorrect(attack, defense, choosed)
  });
});

function isCorrect(attack, defense, choosed) {
  var expected = getCompatibility(attack, defense);
  if (choosed == expected) {
    return correct[true];
  } else {
    return correct[false];
  }
}

function getCompatibility(attack, defense) {
  return compatibility[attack.toLowerCase()][defense.toLowerCase()];
}

function getRandomPokemonType() {
  return pokemonTypes[getRandomInt(0, 17)];
}

function getRandomInt(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

var pokemonTypes = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"];

var typeName = {
  Normal: "ノーマル",
  Fire: "ほのお",
  Water: "みず",
  Grass: "くさ",
  Electric: "でんき",
  Ice: "こおり",
  Fighting: "かくとう",
  Poison: "どく",
  Ground: "じめん",
  Flying: "ひこう",
  Psychic: "エスパー",
  Bug: "むし",
  Rock: "いわ",
  Ghost: "ゴースト",
  Dragon: "ドラゴン",
  Dark: "あく",
  Steel: "はがね",
  Fairy: "フェアリー"
}

var effect = {
  effective: "ばつぐんだ！",
  normal: "ふつう",
  bad: "いまひとつ...",
  nothing: "ない..."
}

var correct = {
  true: "正解！",
  false: "不正解..."
}

var compatibility = {
  normal: {
    normal: "normal",
    fire: "normal",
    water: "normal",
    grass: "normal",
    electric: "normal",
    ice: "normal",
    fighting: "normal",
    poison: "normal",
    ground: "normal",
    flying: "normal",
    psychic: "normal",
    bug: "normal",
    rock: "bad",
    ghost: "nothing",
    dragon: "normal",
    dark: "normal",
    steel: "bad",
    fairy: "normal"
  },
  fire: {
    normal: "normal",
    fire: "bad",
    water: "bad",
    grass: "effective",
    electric: "normal",
    ice: "effective",
    fighting: "normal",
    poison: "normal",
    ground: "normal",
    flying: "normal",
    psychic: "normal",
    bug: "effective",
    rock: "bad",
    ghost: "normal",
    dragon: "bad",
    dark: "normal",
    steel: "effective",
    fairy: "normal"
  },
  water: {
    normal: "normal",
    fire: "effective",
    water: "bad",
    grass: "bad",
    electric: "normal",
    ice: "normal",
    fighting: "normal",
    poison: "normal",
    ground: "effective",
    flying: "normal",
    psychic: "normal",
    bug: "normal",
    rock: "effective",
    ghost: "normal",
    dragon: "bad",
    dark: "normal",
    steel: "normal",
    fairy: "normal"
  },
  grass: {
    normal: "normal",
    fire: "bad",
    water: "effective",
    grass: "bad",
    electric: "normal",
    ice: "normal",
    fighting: "normal",
    poison: "bad",
    ground: "effective",
    flying: "bad",
    psychic: "normal",
    bug: "bad",
    rock: "effective",
    ghost: "normal",
    dragon: "bad",
    dark: "normal",
    steel: "bad",
    fairy: "normal"
  },
  electric: {
    normal: "normal",
    fire: "normal",
    water: "effective",
    grass: "bad",
    electric: "bad",
    ice: "normal",
    fighting: "normal",
    poison: "normal",
    ground: "nothing",
    flying: "effective",
    psychic: "normal",
    bug: "normal",
    rock: "normal",
    ghost: "normal",
    dragon: "bad",
    dark: "normal",
    steel: "normal",
    fairy: "normal"
  },
  ice: {
    normal: "normal",
    fire: "bad",
    water: "bad",
    grass: "effective",
    electric: "normal",
    ice: "bad",
    fighting: "normal",
    poison: "normal",
    ground: "effective",
    flying: "effective",
    psychic: "normal",
    bug: "normal",
    rock: "normal",
    ghost: "normal",
    dragon: "effective",
    dark: "normal",
    steel: "bad",
    fairy: "normal"
  },
  fighting: {
    normal: "effective",
    fire: "normal",
    water: "normal",
    grass: "normal",
    electric: "normal",
    ice: "effective",
    fighting: "normal",
    poison: "bad",
    ground: "normal",
    flying: "bad",
    psychic: "bad",
    bug: "bad",
    rock: "effective",
    ghost: "nothing",
    dragon: "normal",
    dark: "effective",
    steel: "effective",
    fairy: "bad"
  },
  poison: {
    normal: "normal",
    fire: "normal",
    water: "normal",
    grass: "effective",
    electric: "normal",
    ice: "normal",
    fighting: "normal",
    poison: "bad",
    ground: "bad",
    flying: "normal",
    psychic: "normal",
    bug: "normal",
    rock: "bad",
    ghost: "bad",
    dragon: "normal",
    dark: "normal",
    steel: "nothing",
    fairy: "effective"
  },
  ground: {
    normal: "normal",
    fire: "effective",
    water: "normal",
    grass: "bad",
    electric: "effective",
    ice: "normal",
    fighting: "normal",
    poison: "effective",
    ground: "normal",
    flying: "nothing",
    psychic: "normal",
    bug: "bad",
    rock: "effective",
    ghost: "normal",
    dragon: "normal",
    dark: "normal",
    steel: "effective",
    fairy: "normal"
  },
  flying: {
    normal: "normal",
    fire: "normal",
    water: "normal",
    grass: "effective",
    electric: "bad",
    ice: "normal",
    fighting: "effective",
    poison: "normal",
    ground: "normal",
    flying: "normal",
    psychic: "normal",
    bug: "effective",
    rock: "bad",
    ghost: "normal",
    dragon: "normal",
    dark: "normal",
    steel: "bad",
    fairy: "normal"
  },
  psychic: {
    normal: "normal",
    fire: "normal",
    water: "normal",
    grass: "normal",
    electric: "normal",
    ice: "normal",
    fighting: "effective",
    poison: "effective",
    ground: "normal",
    flying: "normal",
    psychic: "bad",
    bug: "normal",
    rock: "normal",
    ghost: "normal",
    dragon: "normal",
    dark: "nothing",
    steel: "bad",
    fairy: "normal"
  },
  bug: {
    normal: "normal",
    fire: "bad",
    water: "normal",
    grass: "effective",
    electric: "normal",
    ice: "normal",
    fighting: "bad",
    poison: "bad",
    ground: "normal",
    flying: "bad",
    psychic: "effective",
    bug: "normal",
    rock: "normal",
    ghost: "bad",
    dragon: "normal",
    dark: "effective",
    steel: "bad",
    fairy: "bad"
  },
  rock: {
    normal: "normal",
    fire: "effective",
    water: "normal",
    grass: "normal",
    electric: "normal",
    ice: "effective",
    fighting: "bad",
    poison: "normal",
    ground: "bad",
    flying: "effective",
    psychic: "normal",
    bug: "effective",
    rock: "normal",
    ghost: "normal",
    dragon: "normal",
    dark: "normal",
    steel: "bad",
    fairy: "normal"
  },
  ghost: {
    normal: "nothing",
    fire: "normal",
    water: "normal",
    grass: "normal",
    electric: "normal",
    ice: "normal",
    fighting: "normal",
    poison: "normal",
    ground: "normal",
    flying: "normal",
    psychic: "effective",
    bug: "normal",
    rock: "normal",
    ghost: "effective",
    dragon: "normal",
    dark: "bad",
    steel: "normal",
    fairy: "normal"
  },
  dragon: {
    normal: "normal",
    fire: "normal",
    water: "normal",
    grass: "normal",
    electric: "normal",
    ice: "normal",
    fighting: "normal",
    poison: "normal",
    ground: "normal",
    flying: "normal",
    psychic: "normal",
    bug: "normal",
    rock: "normal",
    ghost: "normal",
    dragon: "effective",
    dark: "normal",
    steel: "bad",
    fairy: "nothing"
  },
  dark: {
    normal: "normal",
    fire: "normal",
    water: "normal",
    grass: "normal",
    electric: "normal",
    ice: "normal",
    fighting: "bad",
    poison: "normal",
    ground: "normal",
    flying: "normal",
    psychic: "effective",
    bug: "normal",
    rock: "normal",
    ghost: "effective",
    dragon: "normal",
    dark: "bad",
    steel: "normal",
    fairy: "bad"
  },
  steel: {
    normal: "normal",
    fire: "bad",
    water: "bad",
    grass: "normal",
    electric: "bad",
    ice: "effective",
    fighting: "normal",
    poison: "normal",
    ground: "normal",
    flying: "normal",
    psychic: "normal",
    bug: "normal",
    rock: "effective",
    ghost: "normal",
    dragon: "normal",
    dark: "normal",
    steel: "bad",
    fairy: "effective"
  },
  fairy: {
    normal: "normal",
    fire: "bad",
    water: "normal",
    grass: "normal",
    electric: "normal",
    ice: "normal",
    fighting: "effective",
    poison: "bad",
    ground: "normal",
    flying: "normal",
    psychic: "normal",
    bug: "normal",
    rock: "normal",
    ghost: "normal",
    dragon: "effective",
    dark: "effective",
    steel: "bad",
    fairy: "normal"
  }
}

module.exports = router;
