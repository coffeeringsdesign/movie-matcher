var titanic = new Movie("Titanic", "sad");
var fault = new Movie("Fault In Our Stars", "sad");
var bridget = new Movie("Bridget Jones's Diary", "sad");
// movies et al

var masterMoviesList = [titanic, fault, bridget];

function sayIfSad(list) {
  masterMoviesList.forEach(function(movie) {
    if (movie.sadCategory === 5) {
      return bridget;
    } else if (movie.sadCategory === 4) {
      return ;
    } else if (movie.sadCategory === 3) {
      return ;
    } else if (movie.sadCategory === 2) {
      return ;
    } else if (movie.sadCategory === 1) {
      return ;
    }
  });
}

function sayIfHappy(list) {
  masterMoviesList.forEach(function(movie) {
    if (movie.happyCategory === 5) {
      return bridget;
    } else if (movie.happyCategory === 4) {
      return ;
    } else if (movie.happyCategory === 3) {
      return ;
    } else if (movie.happyCategory === 2) {
      return ;
    } else if (movie.happyCategory === 1) {
      return ;
    }
  });
}

function sayIfAngst(list) {
  masterMoviesList.forEach(function(movie) {
    if (movie.angstCategory === 5) {
      return bridget;
    } else if (movie.angstCategory === 4) {
      return ;
    } else if (movie.angstCategory === 3) {
      return ;
    } else if (movie.angstCategory === 2) {
      return ;
    } else if (movie.angstCategory === 1) {
      return ;
    }
  });
}

function sayIfLove(list) {
  masterMoviesList.forEach(function(movie) {
    if (movie.loveCategory === 5) {
      return bridget;
    } else if (movie.loveCategory === 4) {
      return ;
    } else if (movie.loveCategory === 3) {
      return ;
    } else if (movie.loveCategory === 2) {
      return ;
    } else if (movie.loveCategory === 1) {
      return ;
    }
  });
}

// business
function Movie(title, category) {
  this.title = title;
  this.category = category;
}

// Movie.prototype.mood = function(moodChoice) { //beingtriggered
//   if (moodChoice === "sad") {
//     return 1;
//   } else if (moodChoice === "happy") {
//     return 2;
//   } else if (moodChoice === "angst") {
//     return 3;
//   } else if (moodChoice === "love") {
//     return 4;
//   }
// }

// user interface
$(document).ready(function() {
  var newMovie = new Movie("title", "category");

  $("#happyButton").click(function(){
    $(".happySliders").fadeIn();
  });
  $("#sadButton").click(function(){
    $(".sadSliders").fadeIn();
  });
  $("#angstButton").click(function(){
    $(".angstSliders").fadeIn();
  });
  $("#loveButton").click(function(){
    $(".loveSliders").fadeIn();
  });



  $("#moodForm").submit(function(event) {
    event.preventDefault();
    var sadInput = $("input[id='customRange2']").val()
    console.log(sadInput);
  });

});


    // var moodChoice = ($("input[name='optionsRadios']:checked").val());
    // // console.log(moodChoice);
    //
    //   if (newMovie.mood(moodChoice) === 1) {
    //     $(".sad").fadeIn();
    //   } else if (newMovie.mood(moodChoice) === 2) {
    //     $(".happy").fadeIn();
    //   } else if (newMovie.mood(moodChoice) === 3) {
    //     $(".angst").fadeIn();
    //   } else if (newMovie.mood(moodChoice) === 4) {
    //     $(".love").fadeIn();
    //   }

    // var newMovie = new Movie(movieTitle, moodChoice);
