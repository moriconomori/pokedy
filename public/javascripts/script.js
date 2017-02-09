function answerModal(question, answer) {
  var question = {
    attack: 'fire',
    defense: 'water',
  };

  var $modalEl = $('<div>');
  $modalEl.css({
    width: '80%',
    height: '50%',
    margin: '25% auto',
    backgroundColor: '#fff'
  });

  var $answerEl = $('<p>');
  $answerEl.text = answer;
  $modalEl.append($answerEl.text);

  // show modal
  mui.overlay('on', $modalEl.get(0));
}
