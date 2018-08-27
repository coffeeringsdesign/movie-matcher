// business
function Movie(title, category) {
  this.title = title;
  this.category = category;
}

var titanic = new Movie("Titanic", sad);

Movie.prototype.mood = function() {
  if (moodchoice === "sad") {
    sad();
  // } else if (moodchoice === "happy") {
  //   happy.category.fadeIn();
  // } else if (moodChoice === "angst") {
  //   angst.category.fadeIn();
  // } else if (moodChoice === "love") {
  //   love.category.fadeIn();
  // }
  // return;
}

// user interface
$(document).ready(function() {
  $("#moodForm").submit(function(event) {
    event.preventDefault();
    var moodChoice = ($("input[name='moods']:checked").val());
    mood(moodChoice);
  });

  sad fuction() {
    (this['category'] = "sad").show();
  }

});
