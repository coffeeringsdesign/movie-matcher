# Movie Mood Matcher

#### Movie mood matching app for group project, 8.27.18

#### By Nikki Wong, Kendra Kelly, Maly Phongsavanh, Kate Goss

## Description

This application allows users to select their current mood and view a list of movies suitable for that mood.

### Specifications
* When a mood button is clicked, a corresponding mood range slider is shown
  * Example Input: [click button: Happy]
  * Example Output: [happyRange slider]
* When an input range value is submitted, cards containing objects with corresponding property values are created and displayed
  * Example Input: [happyRange - 5]
  * Example Output: [Happy Gilmore card, She's The Man card, The Lion King card, Home Alone card, Shrek card]
* When an input range value is submitted, a form for users to add their own movies is shown
  * Example Input: [happyRange - 5]
  * Example Output: [form]
* When user enters information and submits the add movie form, a new movie card with the inputted information is created and displayed
  * Example Input: ["Lord of the Rings: The Fellowship of the Ring", 2, 3, 3, 1, "https://goo.gl/hWYo2f", "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.", "https://www.imdb.com/title/tt0120737/"]
  * Example Output: (new Movie object added to masterMoviesLists array)


## Setup

* Clone this repository
* Open a simple HTTP server in the top level of the cloned directory
* Use git functions to add, commit, and push to the master branch in remote repository

## Technologies Used

* HTML
* CSS
* Git
* Bootstrap
* JavaScript
* jQuery

## Legal
Copyright (c) 2018 Nikki Wong, Kendra Kelly, Maly Phongsavanh, Kate Goss
