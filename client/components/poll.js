//dodavanje event-a na kliktanje odgovora u anketi
Template.poll.events({

  // event koji radi kada se klikne odgovor
  'click .vote': function(event) {

    //prevent default behavior
    event.preventDefault();

    //pokupi id od poll-a
    var pollID = $(event.currentTarget).parent('.poll').data('id');
    var voteID = $(event.currentTarget).data('id');

    // create the incrementing object so we can add to the corresponding vote
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;

    // increment the number of votes for this choice
    Polls.update(
      { _id: pollID },
      { $inc: action }
    );
  }
});
