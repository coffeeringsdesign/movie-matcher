// var gilmore = new Movie("Happy Gilmore", 5, 0, 0, 0, img, "A rejected hockey player puts his skills to the golf course to save his grandmother's house.", "https://www.imdb.com/title/tt0198781/");
// var monsters = new Movie("Monsters Inc", 4, 0, 0, 0, img, "In order to power the city, monsters have to scare children so that they scream.", "https://www.imdb.com/title/tt0198781/");
// var bridget = new Movie("Bridget Jones's Diary", 4, 0, 0, 0, img, "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.", "https://www.imdb.com/title/tt0243155/");
// var amelie = new Movie("Amelie", 3, 0, 0, 0, img, "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.", "https://www.imdb.com/title/tt0211915/");
var titanic = new Movie("Titanic", 0, 5, 0, 0, "img/titanic.jpg", "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", "https://www.imdb.com/title/tt0120338/");
// var fault = new Movie("Fault In Our Stars", 0, 4, 0, 0, img, "Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.", "https://www.imdb.com/title/tt2582846/");
// var schindlers = new Movie("Schindler's List", 0, 5, 0, 0, img, "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.", "https://www.imdb.com/title/tt0108052/");
// var alice = new Movie("Still Alice", 0, 3, 0, 0, img, "A linguistics professor and her family find their bonds tested when she is diagnosed with Alzheimer's Disease.", "https://www.imdb.com/title/tt3316960/");
// var sleepless = new Movie("Sleepless In Seattle", 0, 0, 0, 5, img, "A recently widowed man's son calls a radio talk-show in an attempt to find his father a partner.", "https://www.imdb.com/title/tt0108160/");
// var firstDate = new Movie("50 First Dates", 0, 0, 0, 5, img, "Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams, until he discovers she has short-term memory loss and forgets him the next day.", "https://www.imdb.com/title/tt0343660/");
// var fiveHundredDays = new Movie("500 Days Of Summer", 0, 0, 0, 2, img, "An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her.", "https://www.imdb.com/title/tt1022603/");
// var crazyStupid = new Movie("Crazy Stupid Love", 0, 0, 0, 4, img, "A middle-aged husband's life changes dramatically when his wife asks him for a divorce. He seeks to rediscover his manhood with the help of a newfound friend, Jacob, learning to pick up girls at bars.", "https://www.imdb.com/title/tt1570728/");
// var kungFu = new Movie("Kung Fu Hustle", 0, 0, 5, 0, img, "In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious 'Axe Gang' while residents of a housing complex exhibit extraordinary powers in defending their turf.", "https://www.imdb.com/title/tt0373074/");
// var taken = new Movie("Taken", 0, 0, 4, 0, img, "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.", "https://www.imdb.com/title/tt0936501/");
// var donnie = new Movie("Donnie Darko", 0, 0, 5, 0, img, "A troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes, after he narrowly escapes a bizarre accident.", "https://www.imdb.com/title/tt0246578/");
// var fightClub = new Movie("Fight Club", 0, 0, 3, 0, img, "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.", "https://www.imdb.com/title/tt0137523/");



// movies et al

var masterMoviesList = [gilmore, monsters, bridget, amelie, titanic, fault, schindlers, alice, sleepless, firstDate, fiveHundredDays, crazyStupid, kungFu, taken, donnie, fightClub];

function sayIfHappy(list) {
  masterMoviesList.forEach(function(movie) {
    if (movie.happyCategory === 5) {
      return gilmore;
    } else if (movie.happyCategory === 4) {
      return monsters && bridget;
    } else if (movie.happyCategory === 3) {
      return amelie;
    } else if (movie.happyCategory === 2) {
      return ;
    } else if (movie.happyCategory === 1) {
      return ;
    }
  });
}

function sayIfSad(list) {
  masterMoviesList.forEach(function(movie) {
    if (movie.sadCategory === 5) {
      return titanic && schindlers;
    } else if (movie.sadCategory === 4) {
      return fault;
    } else if (movie.sadCategory === 3) {
      return alice;
    } else if (movie.sadCategory === 2) {
      return ;
    } else if (movie.sadCategory === 1) {
      return ;
    }
  });
}

function sayIfAngst(list) {
  masterMoviesList.forEach(function(movie) {
    if (movie.angstCategory === 5) {
      return donnie && kungFu;
    } else if (movie.angstCategory === 4) {
      return taken;
    } else if (movie.angstCategory === 3) {
      return fightClub;
    } else if (movie.angstCategory === 2) {
      return fiveHundredDays;
    } else if (movie.angstCategory === 1) {
      return ;
    }
  });
}

function sayIfLove(list) {
  masterMoviesList.forEach(function(movie) {
    if (movie.loveCategory === 5) {
      return sleepless && firstDate;
    } else if (movie.loveCategory === 4) {
      return crazyStupid;
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
function Movie(title, happyCategory, sadCategory, angstCategory, loveCategory, imgFile, description, link) {
  this.title = title;
  this.happyCategory = happyCategory;
  this.sadCategory = sadCategory;
  this.angstCategory = angstCategory;
  this.loveCategory = loveCategory;
  this.imgFile = imgFile;
  this.description = description;
  this.link = link;
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



  $("#sliderForm").submit(function(event) {
    event.preventDefault();
    var happyInput = $("input[id='happyRange']").val();
    console.log(happyInput);
    var sadInput = $("input[id='sadRange']").val();
    console.log(sadInput);
    var angstInput = $("input[id='angstRange']").val();
    console.log(angstInput);
    var loveInput = $("input[id='loveRange']").val();
    console.log(loveInput);

    var happyResult = sayIfHappy(happyInput);
    var sadResult = sayIfSad(sadInput);
    var angstResult = sayIfAngst(angstInput);
    var loveResult = sayIfLove(loveInput);
  });

});
