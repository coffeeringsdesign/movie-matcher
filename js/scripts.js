// business
function Movie(title, category) {
  this.title = title;
  this.category = category;
}

var titanic = new Movie("Titanic", "sad");
// var fault = new Movie("Fault In Our Stars", "sad");

Movie.prototype.mood = function(moodChoice) { //beingtriggered
  if (moodChoice === "sad") {
    return 1;
  } else if (moodChoice === "happy") {
    return 2;
  } else if (moodChoice === "angst") {
    return 3;
  } else if (moodChoice === "love") {
    return 4;
  }
}

// user interface
$(document).ready(function() {
  var newMovie = new Movie("title", "category");

  $("#happyButton").click(function(){
    $(".happySliders").fadeIn();
  })
  $("#sadButton").click(function(){
    $(".sadSliders").fadeIn();
  })
  $("#angstButton").click(function(){
    $(".angstSliders").fadeIn();
  })
  $("#loveButton").click(function(){
    $(".loveSliders").fadeIn();
  })



  $("#moodForm").submit(function(event) {
    event.preventDefault();
    var moodChoice = ($("input[name='optionsRadios']:checked").val());
    // console.log(moodChoice);

      if (newMovie.mood(moodChoice) === 1) {
        $(".sad").fadeIn();
      } else if (newMovie.mood(moodChoice) === 2) {
        $(".happy").fadeIn();
      } else if (newMovie.mood(moodChoice) === 3) {
        $(".angst").fadeIn();
      } else if (newMovie.mood(moodChoice) === 4) {
        $(".love").fadeIn();
      }

    // var newMovie = new Movie(movieTitle, moodChoice);
  });

});
