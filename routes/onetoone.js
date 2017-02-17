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

module.exports = router;
