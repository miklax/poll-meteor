Template.pollForm.events({
  'submit form': function(event) {

    // zaustavi formu od submitovanja
    event.preventDefault();

    //pokupi podatke sa forme
    var newPoll = {
      question: event.target.question.value,
      choices: [
        { text: event.target.choice1.value, votes: 0},
        { text: event.target.choice2.value, votes: 0},
        { text: event.target.choice3.value, votes: 0}
      ]
    };

    //kreira novi poll
    Polls.insert(newPoll);
  }
});
