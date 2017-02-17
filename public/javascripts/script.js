var attack = $('#attackType').data('attack');
var defense = $('#defenseType').data('defense');

function answer(choose) {
  var action = '/onetoone/answer';
  var method = 'post';
  var choose = choose;

  var data = {
    attack: attack,
    defense: defense,
    choose: choose
  };
}
